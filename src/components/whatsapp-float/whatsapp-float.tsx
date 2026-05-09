"use client";

import { WhatsAppIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WHATSAPP_E164 = "34628530092";

const pulseTransition = {
  duration: 2.4,
  repeat: Infinity,
  ease: "easeOut",
} as const;

export function WhatsAppFloat() {
  const t = useTranslations("WhatsAppFloat");

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_E164}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex size-17 items-center justify-center overflow-visible rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 ring-4 ring-background/80 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] dark:ring-background-dark/80"
      aria-label={t("ariaLabel")}
      initial={{ opacity: 0, scale: 0.82, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      whileHover={{
        scale: 1.08,
        rotate: [-1, 1, -1, 0],
        transition: { rotate: { duration: 0.45 } },
      }}
      whileTap={{ scale: 0.92 }}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-full border-2 border-[#25D366]"
        aria-hidden
        initial={false}
        animate={{ scale: [1, 1.65], opacity: [0.55, 0] }}
        transition={pulseTransition}
      />
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-full border-2 border-[#25D366]"
        aria-hidden
        initial={false}
        animate={{ scale: [1, 1.65], opacity: [0.55, 0] }}
        transition={{
          ...pulseTransition,
          delay: pulseTransition.duration / 2,
        }}
      />
      <WhatsAppIcon className="relative z-10 size-10 drop-shadow-sm" />
    </motion.a>
  );
}
