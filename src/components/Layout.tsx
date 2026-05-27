import type { JSX } from "solid-js";
import Nav from "./Nav.island";
import { Footer } from "./Footer";
import { LanguagePrompt } from "./LanguagePrompt";
import type { Content, Locale, RouteKey } from "../i18n";

type LayoutProps = {
  children: JSX.Element;
  content: Content;
  locale: Locale;
  route: RouteKey;
  showLanguagePrompt?: boolean;
};

export const Layout = (props: LayoutProps): JSX.Element => (
  <div class="font-sans bg-white text-zinc-900 min-h-screen flex flex-col">
    <Nav content={props.content.common} locale={props.locale} />
    <main class="pt-16 flex flex-col gap-16 flex-1 pb-4">{props.children}</main>
    <Footer content={props.content.common} locale={props.locale} route={props.route} />
    {props.showLanguagePrompt && (
      <LanguagePrompt content={props.content.common} locale={props.locale} route={props.route} />
    )}
  </div>
);
