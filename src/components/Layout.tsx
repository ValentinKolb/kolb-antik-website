import type { JSX } from "solid-js";
import Nav from "./Nav.island";
import BetaNotice from "./BetaNotice.island";
import { Footer } from "./Footer";

export const Layout = (props: { children: JSX.Element }): JSX.Element => (
  <div class="font-sans bg-white text-zinc-900 min-h-screen flex flex-col">
    <Nav />
    <main class="pt-16 flex flex-col gap-16 flex-1 pb-4">{props.children}</main>
    <Footer />
    <BetaNotice />
  </div>
);
