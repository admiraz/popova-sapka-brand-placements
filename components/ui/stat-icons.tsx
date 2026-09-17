import type { SVGProps } from "react";

/**
 * The four resort stat icons, hand-drawn as inline SVG rather than pulled
 * from Lucide — the brief calls these out as the one icon set that stays
 * custom, everything else in the interface uses the shared Lucide set.
 * Same 24×24 viewBox / 1.5px stroke convention as the rest of the icon system.
 */

const shared: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v3M12 18.5v3M4.4 4.4l2.1 2.1M17.5 17.5l2.1 2.1M2.5 12h3M18.5 12h3M4.4 19.6l2.1-2.1M17.5 6.5l2.1-2.1" />
    </svg>
  );
}

export function SnowflakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M12 2.5v19M4.5 7.25l15 9.5M19.5 7.25l-15 9.5" />
      <path d="M12 2.5l-2 2M12 2.5l2 2M12 21.5l-2-2M12 21.5l2-2" />
      <path d="M4.5 7.25l.4-2.7M4.5 7.25l2.7.4M19.5 16.75l-.4 2.7M19.5 16.75l-2.7-.4" />
      <path d="M19.5 7.25l-.4-2.7M19.5 7.25l-2.7.4M4.5 16.75l.4 2.7M4.5 16.75l2.7-.4" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 1.9" />
    </svg>
  );
}

export function MountainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M2.5 19.5L9 8l4 6.2L15.5 11 21.5 19.5z" />
      <path d="M6.5 19.5L9 15.6" />
    </svg>
  );
}

export const STAT_ICONS = {
  sun: SunIcon,
  snowflake: SnowflakeIcon,
  clock: ClockIcon,
  mountain: MountainIcon,
} as const;
