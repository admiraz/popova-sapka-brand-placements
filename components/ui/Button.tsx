import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group inline-flex items-center gap-3 rounded-button font-display text-button font-bold uppercase",
    "tracking-[0.12em] transition-colors duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        // bg-cyan-dark (not the brighter --cyan) so the white label clears
        // WCAG AA's 4.5:1 text contrast — see app/globals.css token notes.
        primary: "bg-cyan-dark px-7 py-4 text-white hover:bg-cyan-darker",
        secondary: "bg-transparent py-2 pr-2 text-navy hover:text-cyan-darker",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function PlayBadge() {
  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cyan text-white transition-colors duration-200 ease-out group-hover:bg-cyan-dark"
    >
      <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
        <path d="M0 0.5L12 7L0 13.5V0.5Z" />
      </svg>
    </span>
  );
}

function ButtonContent({ variant, children }: { variant: ButtonVariants["variant"]; children: React.ReactNode }) {
  return (
    <>
      {variant === "secondary" && <PlayBadge />}
      <span>{children}</span>
      {variant !== "secondary" && <ArrowIcon />}
    </>
  );
}

/**
 * Primary = solid cyan with a trailing arrow that slides on hover.
 * Secondary = transparent navy label with a leading circular play badge.
 * Every real CTA on this page is a link (anchor scroll, mailto, tel, or an
 * external resort URL) rather than a form submit, so this renders an `<a>`
 * whenever `href` is given and a `<button>` otherwise — deliberately not a
 * Radix Slot `asChild` polymorphic component, since Slot requires cloning
 * onto a single caller-provided child and can't also inject the automatic
 * icon markup around arbitrary children.
 */
export type ButtonProps = ButtonVariants &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function Button({ className, variant, children, ...props }: ButtonProps) {
  if (props.href !== undefined) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={cn(buttonVariants({ variant }), className)} {...anchorProps}>
        <ButtonContent variant={variant}>{children}</ButtonContent>
      </a>
    );
  }

  const { href, ...buttonProps } = props;
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...buttonProps}>
      <ButtonContent variant={variant}>{children}</ButtonContent>
    </button>
  );
}
