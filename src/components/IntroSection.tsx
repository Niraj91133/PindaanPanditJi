"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function IntroSection() {
  const { t } = useLanguage();

  return (
    <section className="section-spacing bg-surface-light border-b border-border-subtle">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow */}
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-3">
            {t.intro.eyebrow}
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text leading-tight mb-6">
            {t.intro.h2Line1}
            <span className="block font-normal text-secondary-text mt-1 text-2xl sm:text-3xl lg:text-4xl">
              {t.intro.h2Line2}
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-secondary-text leading-relaxed mb-8">
            {t.intro.paragraph}
          </p>

          {/* Link */}
          <Link
            href="/pind-daan"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-accent-gold hover:text-accent-goldDark transition-colors group pb-1 border-b border-accent-gold/40 hover:border-accent-gold"
          >
            <span>{t.intro.learnMoreLink}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
