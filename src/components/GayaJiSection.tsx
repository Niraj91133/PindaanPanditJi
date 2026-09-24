"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GayaJiSection() {
  const { t } = useLanguage();

  const holySpots = [
    {
      title: t.gayaSection.vishnupadTitle,
      desc: t.gayaSection.vishnupadDesc,
      href: "/gaya-ji#vishnupad",
    },
    {
      title: t.gayaSection.falguTitle,
      desc: t.gayaSection.falguDesc,
      href: "/gaya-ji#falgu",
    },
    {
      title: t.gayaSection.akshayavatTitle,
      desc: t.gayaSection.akshayavatDesc,
      href: "/gaya-ji#akshayavat",
    },
  ];

  return (
    <section className="section-spacing bg-background" id="gaya-ji">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Real Vishnupad Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border-subtle shadow-card bg-surface-light">
              <Image
                src="/images/vishnupad.jpg"
                alt="Vishnupad Temple & Falgu Ghat, Gaya Ji"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 550px"
              />
            </div>
          </div>

          {/* Right: Content & Links */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Eyebrow */}
            <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase">
              {t.gayaSection.eyebrow}
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text leading-tight">
              {t.gayaSection.h2Line1}
              <span className="block font-normal text-secondary-text mt-1 text-2xl sm:text-3xl lg:text-4xl">
                {t.gayaSection.h2Line2}
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-base text-secondary-text leading-relaxed">
              {t.gayaSection.desc}
            </p>

            {/* 3 Sacred Vedis List */}
            <div className="w-full space-y-3 pt-2">
              {holySpots.map((spot, idx) => (
                <Link
                  key={idx}
                  href={spot.href}
                  className="group flex items-center justify-between p-3.5 rounded-lg bg-surface-light hover:bg-white border border-border-subtle hover:border-accent-gold/40 transition-all duration-200"
                >
                  <div>
                    <div className="text-sm font-bold font-serif text-primary-text group-hover:text-accent-gold transition-colors">
                      {spot.title}
                    </div>
                    <div className="text-xs text-secondary-text mt-0.5">
                      {spot.desc}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-accent-gold group-hover:translate-x-1 transition-transform flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>

            {/* Travel Guide Link */}
            <div className="pt-2">
              <Link
                href="/gaya-ji"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-accent-gold hover:text-accent-goldDark transition-colors group"
              >
                <span>{t.gayaSection.travelGuideLink}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
