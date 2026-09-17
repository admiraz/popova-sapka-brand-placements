"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

const LABELS: Record<Locale, { open: string; close: string; menu: string }> = {
  en: { open: "Open menu", close: "Close menu", menu: "Menu" },
  mk: { open: "Отвори мени", close: "Затвори мени", menu: "Мени" },
  sq: { open: "Hap menynë", close: "Mbyll menynë", menu: "Menyja" },
};

/**
 * Full-screen mobile nav panel. Radix Dialog supplies the focus trap,
 * Escape-to-close, focus-restore-to-trigger and scroll lock; Motion for
 * React animates only the panel's own opacity/transform — nothing here is
 * also touched by GSAP, per the brief's "one system owns one element" rule.
 */
export function MobileNav({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = LABELS[locale];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={t.open}
          className="flex size-10 items-center justify-center text-navy lg:hidden"
        >
          <Menu size={24} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-40 bg-navy-deep/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                data-mobile-nav=""
                className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-between px-6 py-5">
                  <Dialog.Title className="font-display text-lg font-black text-navy">{t.menu}</Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label={t.close}
                      className="flex size-10 items-center justify-center text-navy"
                    >
                      <X size={24} strokeWidth={1.5} aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="flex-1" />

                <div className="border-t border-line px-6 py-5">
                  <LanguageSwitcher locale={locale} />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
