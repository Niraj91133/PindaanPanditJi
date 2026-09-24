"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const { language, t } = useLanguage();

  const title = service.title[language] || service.title.hi;
  const shortDesc = service.shortDesc[language] || service.shortDesc.hi;
  const duration = service.duration[language] || service.duration.hi;

  return (
    <div className="group relative bg-surface-light hover:bg-white rounded-card p-7 sm:p-8 border border-border-subtle hover:border-accent-gold/50 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Minimal Number Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl font-serif font-light text-accent-gold/70 group-hover:text-accent-gold transition-colors">
            {service.number}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-secondary-text font-medium bg-[#F5EFE6] px-2.5 py-1 rounded">
            {service.englishTitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold font-serif text-primary-text mb-3 group-hover:text-accent-gold transition-colors">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-secondary-text text-sm sm:text-base leading-relaxed mb-6">
          {shortDesc}
        </p>
      </div>

      {/* Action link */}
      <div className="pt-4 border-t border-border-subtle/60 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-accent-gold group-hover:text-accent-goldDark transition-colors"
        >
          <span>{t.servicesSection.learnMore}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-xs text-secondary-text/80">
          {duration.split(" ")[0]}
        </span>
      </div>
    </div>
  );
}
