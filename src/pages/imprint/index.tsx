import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export default ssr(async (c) => {
  c.get("page").title = "Impressum — Kolb Antik GmbH";
  c.get("page").description = "Impressum der Kolb Antik GmbH, Ulm.";

  return (
    <Layout>
      <section class={`${containerClass} pt-12 pb-8`}>
        <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6">
          Rechtliches
        </p>
        <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-12">
          Impressum
        </h1>

        <div class="flex flex-col gap-10 text-base text-zinc-700 leading-relaxed max-w-3xl">
          {/* Angaben gemäß § 5 TMG */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p class="mb-2 font-medium text-zinc-900">Kolb Antik GmbH</p>
            <p>Maienweg 22</p>
            <p>89081 Ulm</p>
            <p>Deutschland</p>
          </div>

          {/* Lager & Sendungen */}
          <div class="p-6 bg-zinc-50 rounded-lg">
            <p class="text-sm font-semibold text-zinc-400 tracking-widest mb-3">
              LAGER, SENDUNGEN & ABHOLUNGEN
            </p>
            <p class="mb-2">
              Alle Sendungen, Einlieferungen und Abholungen bitte an unsere
              Lageradresse:
            </p>
            <p class="font-medium text-zinc-900">Kolb Antik GmbH</p>
            <p>Finninger Straße 56</p>
            <p>89231 Neu-Ulm</p>
          </div>

          {/* Kontakt */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">Kontakt</h2>
            <p>
              Telefon:{" "}
              <a href="tel:+49731850754" class="text-zinc-900 underline">
                +49 731 850 754
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:kurprinz@kolb-antik.de"
                class="text-zinc-900 underline"
              >
                kurprinz@kolb-antik.de
              </a>
            </p>
          </div>

          {/* Vertretungsberechtigter */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">
              Vertretungsberechtigter Geschäftsführer
            </h2>
            <p>Wolfgang Kolb</p>
          </div>

          {/* Registereintrag */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">Registereintrag</h2>
            <p>Eintragung im Handelsregister</p>
            <p>Registergericht: Amtsgericht Ulm</p>
            <p>Registernummer: HRB XXXXX</p>
          </div>

          {/* Umsatzsteuer-ID */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            </p>
            <p>DE XXXXXXXXX</p>
          </div>

          {/* Haftungsausschluss */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">
              Haftungsausschluss
            </h2>
            <p class="mb-4">
              Alle Angaben auf dieser Website — insbesondere zu Preisen,
              Leistungen, Abläufen und Konditionen — sind unverbindlich und
              freibleibend. Irrtümer und Änderungen bleiben ausdrücklich
              vorbehalten.
            </p>
            <p>
              Die Inhalte dieser Website stellen kein verbindliches Angebot dar.
              Verbindliche Vereinbarungen kommen ausschließlich durch
              individuelle schriftliche Absprache zustande.
            </p>
          </div>

          {/* Streitschlichtung */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">
              Streitschlichtung
            </h2>
            <p class="mb-4">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener"
                class="text-zinc-900 underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
});
