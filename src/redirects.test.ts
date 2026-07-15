import { describe, expect, spyOn, test } from "bun:test";
import server from "./server";
import redirects from "./redirects.json";
import { isRedirectSource, resolveRedirect } from "./redirects";

const request = (path: string) =>
  server.fetch(new Request(`https://kolb-antik.de${path}`, { redirect: "manual" }));

describe("redirect resolver", () => {
  test("resolves every configured slug to its exact URL", async () => {
    for (const redirect of redirects) {
      expect(await resolveRedirect(redirect.slug)).toBe(redirect.url);
    }
  });

  test("returns null for unknown slugs", async () => {
    expect(await resolveRedirect("unknown")).toBeNull();
  });

  test("contains unique slugs and HTTPS destinations", () => {
    expect(new Set(redirects.map((redirect) => redirect.slug)).size).toBe(redirects.length);
    expect(redirects.every((redirect) => redirect.url.startsWith("https://"))).toBe(true);
  });

  test("accepts bounded campaign source identifiers", () => {
    expect(isRedirectSource("flyer-a5-2026-07")).toBe(true);
    expect(isRedirectSource("a".repeat(64))).toBe(true);
    expect(isRedirectSource("a".repeat(65))).toBe(false);
    expect(isRedirectSource("Flyer A5")).toBe(false);
  });
});

describe("GET /r/:slug", () => {
  test("redirects a known slug without caching or indexing", async () => {
    const response = await request("/r/ebay");

    expect(response.status).toBe(302);
    expect(response.headers.get("location")).toBe(
      "https://www.ebay.de/str/kolbantikulm?_sop=16&_tab=shop",
    );
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(response.headers.get("x-robots-tag")).toBe("noindex, nofollow");
  });

  test("accepts a campaign source without forwarding it", async () => {
    const response = await request("/r/lot-tissimo?source=flyer-a5-2026-07");

    expect(response.status).toBe(302);
    expect(response.headers.get("location")).toBe(
      "https://www.lot-tissimo.com/de-de/auction-catalogues/kolb",
    );
  });

  test("rejects an invalid campaign source", async () => {
    const response = await request(`/r/ebay?source=${"a".repeat(65)}`);

    expect(response.status).toBe(400);
    expect(response.headers.get("location")).toBeNull();
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(response.headers.get("x-robots-tag")).toBe("noindex, nofollow");
  });

  test("returns a non-indexable 404 for unknown slugs", async () => {
    const response = await request("/r/unknown?url=https://example.com");

    expect(response.status).toBe(404);
    expect(response.headers.get("location")).toBeNull();
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(response.headers.get("x-robots-tag")).toBe("noindex, nofollow");
  });

  test("keeps redirect routes out of the sitemap", async () => {
    const response = await request("/sitemap.xml");
    const sitemap = await response.text();

    expect(sitemap).toContain("https://kolb-antik.de/de");
    expect(sitemap).not.toContain("kolb-antik.website");
    expect(sitemap).not.toContain("/r/");
  });

  test("logs every redirect attempt as one structured CLI event", async () => {
    const info = spyOn(console, "info").mockImplementation(() => {});

    try {
      await request("/r/ebay?source=flyer-a5-2026-07");
      await request("/r/unknown");
      await request(`/r/ebay?source=${"a".repeat(65)}`);

      const events = info.mock.calls.map(([message]) => JSON.parse(String(message)));
      expect(events).toHaveLength(3);
      expect(events.map(({ event, slug, source, status, target }) => ({
        event,
        slug,
        source,
        status,
        target,
      }))).toEqual([
        {
          event: "redirect",
          slug: "ebay",
          source: "flyer-a5-2026-07",
          status: 302,
          target: "https://www.ebay.de/str/kolbantikulm?_sop=16&_tab=shop",
        },
        {
          event: "redirect",
          slug: "unknown",
          source: null,
          status: 404,
          target: null,
        },
        {
          event: "redirect",
          slug: "ebay",
          source: null,
          status: 400,
          target: null,
        },
      ]);
      expect(events.every(({ timestamp }) => !Number.isNaN(Date.parse(timestamp)))).toBe(true);
    } finally {
      info.mockRestore();
    }
  });
});
