"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { openBookingModal, getWhatsAppUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const panditName = language === "bn" ? siteConfig.pandit.bengaliName : (language === "en" ? siteConfig.pandit.englishName : siteConfig.pandit.name);

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 lg:pt-18 lg:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-accent-gold uppercase bg-accent-goldSoft/60 px-3.5 py-1.5 rounded-full border border-accent-gold/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.18] text-primary-text tracking-tight">
              {t.hero.h1Line1}
              <span className="block font-normal text-secondary-text mt-1 text-3xl sm:text-4xl lg:text-5xl">
                {t.hero.h1Line2}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-secondary-text leading-relaxed max-w-xl">
              {t.hero.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-accent-gold hover:bg-accent-goldDark text-white font-medium text-sm tracking-wide rounded-btn transition-all duration-200 shadow-sm active:scale-[0.99] group"
              >
                <span>{t.hero.bookBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-surface-light hover:bg-white text-primary-text border border-border-subtle rounded-btn font-medium text-sm tracking-wide transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>{t.hero.talkBtn}</span>
              </a>
            </div>

            {/* Subtle Guarantee Badge */}
            <div className="pt-2 flex items-center space-x-2 text-xs text-secondary-text">
              <ShieldCheck className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span>{t.hero.trustBadge}</span>
            </div>

          </div>

          {/* Right Column: Authentic Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border-subtle shadow-card bg-surface-light">
                <Image
                  src="/images/pandit-ji.jpg"
                  alt={panditName}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 pointer-events-none" />
                
                {/* Caption on Photo */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="text-xs uppercase tracking-widest text-amber-200 font-medium">
                    {t.hero.panditCaptionTitle}
                  </div>
                  <div className="font-serif text-xl font-bold">
                    {panditName}
                  </div>
                  <div className="text-xs text-white/80 mt-0.5">
                    {t.hero.panditLineage}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
