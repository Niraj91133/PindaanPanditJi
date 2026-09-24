"use client";

import React from "react";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { openBookingModal, getWhatsAppUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function FinalCTA() {
  const { t, language } = useLanguage();
  const panditName = language === "bn" ? siteConfig.pandit.bengaliName : (language === "en" ? siteConfig.pandit.englishName : siteConfig.pandit.name);

  return (
    <section className="section-spacing bg-[#26231F] text-white text-center relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-3">
            {t.finalCta.eyebrow}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#FFFDF9] mb-4 leading-tight">
            {t.finalCta.heading}
          </h2>

          <p className="text-[#A6A095] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            {t.finalCta.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl(`नमस्ते पंडित जी, मैं गया जी में पिंडदान के लिए तिथि निर्धारित करना चाहता हूँ।`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-medium text-sm rounded-btn transition-colors shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.finalCta.whatsappBtn}</span>
            </a>

            <a
              href={`tel:${siteConfig.whatsappNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-[#322D27] hover:bg-[#3D3730] text-[#FFFDF9] border border-[#484239] font-medium text-sm rounded-btn transition-colors"
            >
              <Phone className="w-5 h-5 text-accent-gold" />
              <span>{t.finalCta.callBtn}</span>
            </a>

            <button
              onClick={() => openBookingModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-accent-gold hover:bg-accent-goldLight text-white font-medium text-sm rounded-btn transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.finalCta.bookBtn}</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-[#7A7469]">
            {panditName} · विष्णुपद मंदिर मार्ग, गया जी · फोन: {siteConfig.phoneDisplay}
          </div>

        </div>
      </div>
    </section>
  );
}
