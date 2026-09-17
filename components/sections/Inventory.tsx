import { INVENTORY } from "@/data/inventory";
import type { Locale } from "@/lib/i18n";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealSection } from "@/components/ui/RevealSection";

export function Inventory({ locale }: { locale: Locale }) {
  const t = INVENTORY[locale];

  return (
    <section id="inventory" aria-labelledby="inventory-heading" className="bg-navy py-section-sm text-white">
      <RevealSection as="div" className="container">
        <SectionEyebrow number="04" label={t.eyebrowLabel} tone="on-dark" className="mb-5" data-reveal="" />
        <h2 id="inventory-heading" data-reveal="" className="text-h2 max-w-3xl font-display font-black leading-[1.12]">
          <span className="text-white">{t.headingLine1} </span>
          <span className="text-cyan">{t.headingLine2}</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {t.categories.map((category) => (
            <div
              key={category.id}
              data-reveal=""
              data-reveal-group="inventory-categories"
              className="lg:pl-8 lg:first:pl-0"
            >
              <span
                aria-hidden="true"
                className="block font-display text-5xl font-black leading-none text-transparent [-webkit-text-stroke:1.5px_var(--cyan)] sm:text-6xl"
              >
                {category.id}
              </span>
              <p className="mt-4 font-display text-xl font-bold text-white">{category.title}</p>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/65">{category.detail}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
