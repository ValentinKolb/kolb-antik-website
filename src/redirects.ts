import redirects from "./redirects.json";

export const isRedirectSource = (source: string): boolean =>
  /^[a-z0-9][a-z0-9-]{0,63}$/.test(source);

export const resolveRedirect = async (slug: string): Promise<string | null> => {
  const redirect = redirects.find((entry) => entry.slug === slug);

  if (!redirect) return null;

  try {
    return new URL(redirect.url).protocol === "https:" ? redirect.url : null;
  } catch {
    return null;
  }
};
