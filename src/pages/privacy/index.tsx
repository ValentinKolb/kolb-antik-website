import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export default ssr(async (c) => {
  c.get("page").title = "Datenschutzerklärung — Kolb Antik GmbH";
  c.get("page").description =
    "Datenschutzerklärung der Kolb Antik GmbH. Informationen zur Verarbeitung personenbezogener Daten.";

  return (
    <Layout>
      <section class={`${containerClass} pt-12 pb-8`}>
        <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6">
          Rechtliches
        </p>
        <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-12">
          Datenschutzerklärung
        </h1>

        <div class="flex flex-col gap-10 text-base text-zinc-700 leading-relaxed max-w-3xl">
          {/* Verantwortlicher */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">
              1. Verantwortlicher
            </h2>
            <p class="mb-2">
              Verantwortlich für die Datenverarbeitung auf dieser Website:
            </p>
            <p class="font-medium text-zinc-900">Kolb Antik GmbH</p>
            <p>Maienweg 22, 89081 Ulm</p>
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

          {/* Allgemeines */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">
              2. Allgemeine Hinweise
            </h2>
            <p class="mb-4">
              Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Diese
              Website verwendet <strong>keine Cookies</strong>,{" "}
              <strong>keine Tracking-Tools</strong> und{" "}
              <strong>keine externen Dienste</strong> (wie Google Analytics,
              Google Fonts oder Social-Media-Plugins).
            </p>
            <p>
              Alle Inhalte — einschließlich Schriften und Icons — werden direkt
              von unserem eigenen Server ausgeliefert. Es findet keine
              Datenübertragung an Dritte statt, wenn Sie unsere Website
              besuchen.
            </p>
          </div>

          {/* Server-Logs */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">
              3. Hosting und Server-Logfiles
            </h2>
            <p class="mb-4">
              Beim Besuch unserer Website werden automatisch technische
              Informationen in Server-Logfiles gespeichert:
            </p>
            <ul class="list-disc pl-6 flex flex-col gap-1 mb-4 text-zinc-500">
              <li>IP-Adresse (anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene Seite</li>
              <li>Browser-Typ und Betriebssystem</li>
            </ul>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar und werden
              ausschließlich zur Sicherstellung des Betriebs und zur
              Fehlerbehebung verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse).
            </p>
          </div>

          {/* Kontaktformular */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">
              4. Kontaktformular und E-Mail-Kontakt
            </h2>
            <p class="mb-4">
              Wenn Sie uns über das Kontaktformular, per E-Mail, Telefon oder
              WhatsApp kontaktieren, werden die von Ihnen mitgeteilten Daten (z.
              B. Name, E-Mail-Adresse, Telefonnummer, Nachricht) von uns
              gespeichert und zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
            <p class="mb-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Beantwortung Ihrer Anfrage).
            </p>
            <p>
              Ihre Daten werden nicht an Dritte weitergegeben und gelöscht,
              sobald die Anfrage abschließend bearbeitet wurde — es sei denn,
              gesetzliche Aufbewahrungsfristen stehen dem entgegen.
            </p>
          </div>

          {/* Ihre Rechte */}
          <div>
            <h2 class="font-serif text-xl font-normal mb-4">5. Ihre Rechte</h2>
            <p class="mb-4">Sie haben jederzeit das Recht auf:</p>
            <ul class="list-disc pl-6 flex flex-col gap-1 mb-4 text-zinc-500">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p>
              Richten Sie Ihr Anliegen bitte an{" "}
              <a
                href="mailto:kurprinz@kolb-antik.de"
                class="text-zinc-900 underline"
              >
                kurprinz@kolb-antik.de
              </a>
              . Sie haben zudem das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
});
