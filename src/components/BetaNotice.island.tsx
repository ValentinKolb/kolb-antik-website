import { onMount } from "solid-js";

export default function BetaNotice() {
  let dialogRef: HTMLDialogElement | undefined;

  onMount(() => {
    if (!document.cookie.includes("beta_accepted=1")) {
      dialogRef?.showModal();
    }
  });

  const accept = () => {
    document.cookie = "beta_accepted=1;path=/;max-age=31536000";
    dialogRef?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      class="fixed inset-0 m-auto w-[calc(100%-2.5rem)] max-w-md p-8 bg-white rounded-lg shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm border border-zinc-200"
    >
      <div class="flex flex-col gap-5 text-center">
        <p class="text-xs font-semibold tracking-widest text-zinc-400">
          INTERNE BETA
        </p>
        <h2 class="font-serif text-2xl font-normal text-zinc-900">
          Hinweis
        </h2>
        <p class="text-sm text-zinc-500 leading-relaxed">
          Diese Website befindet sich in aktiver Entwicklung. Alle Inhalte,
          Funktionen und Darstellungen sind vorläufig und nicht verbindlich.
        </p>
        <button
          onClick={accept}
          class="text-sm font-semibold text-white bg-zinc-900 px-6 py-3 rounded hover:bg-zinc-800 transition-colors"
        >
          Verstanden
        </button>
      </div>
    </dialog>
  );
}
