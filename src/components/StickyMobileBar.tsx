"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function StickyMobileBar() {
  const { t } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FFFDF9]/95 backdrop-blur-lg border-t border-border-subtle px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.whatsappNumber}`}
          className="flex items-center justify-center space-x-2 py-3 px-3 bg-[#F4EFE6] text-primary-text border border-border-subtle rounded-btn font-medium text-xs tracking-wide active:bg-[#EAE2D5] transition-colors"
        >
          <Phone className="w-4 h-4 text-accent-gold" />
          <span>{t.mobileBar.callPandit}</span>
        </a>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 py-3 px-3 bg-emerald-800 text-white rounded-btn font-semibold text-xs tracking-wide active:bg-emerald-900 transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t.mobileBar.whatsappPandit}</span>
        </a>
      </div>
    </div>
  );
}
