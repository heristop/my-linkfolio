import React from "react";

/**
 * Shared shell for the status routes (404, 400, 500). Values come from the
 * theme tokens in `app/globals.css`, so a palette change carries here too.
 *
 * The entrance uses the `fade-in` utility the linkfolio package ships, rather
 * than the observer-driven reveal: this app renders the published package, so
 * only what that build exposes is available.
 */

const CODE_CLASS =
  "fade-in text-[length:clamp(3rem,2.2rem_+_3.5vw,5rem)] font-bold leading-none text-[var(--color-secondary)]";
const TITLE_CLASS =
  "fade-in mt-2 text-balance text-[length:clamp(1.5rem,1.3rem_+_1vw,2.125rem)] font-semibold";
const BODY_CLASS =
  "fade-in max-w-prose text-[length:clamp(1rem,0.95rem_+_0.2vw,1.0625rem)] leading-[1.7] text-[var(--lf-description-color)]";

/**
 * `hover:text-…` restates the resting colour on purpose: the package
 * stylesheet has a global `a:hover { color: var(--color-secondary) }` which
 * outranks a plain text utility and would repaint this label in the same hue
 * as its own background, making it vanish on hover.
 */
export const ACTION_PRIMARY_CLASS =
  "inline-flex min-h-11 items-center rounded-md bg-[var(--color-primary)] px-6 text-[var(--color-background-start)] hover:text-[var(--color-background-start)] transition-transform duration-200 [transition-timing-function:var(--ease-out-expo)] hover:scale-[1.02] active:scale-[0.98]";
export const ACTION_SECONDARY_CLASS =
  "inline-flex min-h-11 items-center rounded-md border border-[var(--color-primary)]/20 px-6 underline-offset-2 transition-[border-color,transform] duration-200 [transition-timing-function:var(--ease-out-expo)] hover:border-[var(--color-primary)]/45 hover:underline active:scale-[0.98]";

export type StatusPageProps = {
  code: string;
  title: string;
  children: React.ReactNode;
  actions: React.ReactNode;
};

export default function StatusPage({
  code,
  title,
  children,
  actions,
}: StatusPageProps) {
  return (
    <main
      className="mx-auto flex min-h-[60vh] max-w-[720px] flex-col justify-center px-[clamp(1rem,3vw,3rem)] py-[clamp(2rem,1.5rem_+_2vw,4rem)] text-[var(--color-primary)]"
      style={{ paddingTop: "max(2rem, env(safe-area-inset-top))" }}
    >
      <p className={CODE_CLASS} style={{ animationDelay: "0.05s" }}>
        {code}
      </p>

      <h1 className={TITLE_CLASS} style={{ animationDelay: "0.15s" }}>
        {title}
      </h1>

      <div className="fade-in mt-4 mb-6" style={{ animationDelay: "0.25s" }}>
        <div
          className="reveal-line h-0.5 w-[var(--lf-accent-line-width)] origin-left bg-[var(--lf-accent-line-color)] opacity-[var(--lf-accent-line-opacity)]"
          role="presentation"
        />
      </div>

      <div className={BODY_CLASS} style={{ animationDelay: "0.3s" }}>
        {children}
      </div>

      <div
        className="fade-in mt-8 flex flex-wrap gap-4"
        style={{ animationDelay: "0.4s" }}
      >
        {actions}
      </div>
    </main>
  );
}
