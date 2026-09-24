"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function PanditProfile() {
  const { t, language } = useLanguage();
  const panditName = language === "bn" ? siteConfig.pandit.bengaliName : (language === "en" ? siteConfig.pandit.englishName : siteConfig.pandit.name);

  return (
    <section className="section-spacing bg-surface-light border-y border-border-subtle" id="pandit-ji">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Large Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-border-subtle shadow-card">
              <Image
                src="/images/pandit-ji.jpg"
                alt={panditName}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
          </div>

          {/* Right: Personal Bio & Facts */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Eyebrow */}
            <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase">
              {t.panditSection.eyebrow}
            </span>

            {/* Name & Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-primary-text">
                {panditName}
              </h2>
              <p className="text-sm font-medium text-accent-gold mt-1">
                {t.panditSection.title}
              </p>
            </div>

            {/* Personal Quote */}
            <div className="border-l-2 border-accent-gold/60 pl-5 py-1">
              <p className="text-base sm:text-lg text-primary-text/90 italic font-serif leading-relaxed">
                {t.panditSection.quote}
              </p>
            </div>

            {/* Facts Table/Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 pb-2 border-y border-border-subtle">
              <div>
                <div className="text-xs text-secondary-text">{t.panditSection.fact1Label}</div>
                <div className="text-sm font-semibold text-primary-text mt-0.5">
                  {t.panditSection.fact1Val}
                </div>
              </div>
              <div>
                <div className="text-xs text-secondary-text">{t.panditSection.fact2Label}</div>
                <div className="text-sm font-semibold text-primary-text mt-0.5">
                  {t.panditSection.fact2Val}
                </div>
              </div>
              <div>
                <div className="text-xs text-secondary-text">{t.panditSection.fact3Label}</div>
                <div className="text-sm font-semibold text-primary-text mt-0.5">
                  {t.panditSection.fact3Val}
                </div>
              </div>
            </div>

            {/* Links and CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/pandit-ji"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-accent-gold hover:text-accent-goldDark transition-colors group"
              >
                <span>{t.panditSection.learnMore}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={getWhatsAppUrl(`नमस्ते पंडित जी, मुझे गया जी यात्रा एवं पिंडदान के संबंध में मार्गदर्शन चाहिए।`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2.5 bg-[#F3EADF] text-primary-text hover:bg-accent-gold hover:text-white rounded-btn transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>{t.panditSection.directTalk}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
