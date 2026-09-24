"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Check } from "lucide-react";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-background min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-secondary-text mb-6">
          <Link href="/" className="hover:text-accent-gold">
            होम
          </Link>
          <span>/</span>
          <span className="text-primary-text font-medium">{t.header.services}</span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
            {t.servicesSection.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text mb-4">
            {t.servicesSection.heading}
          </h1>
          <p className="text-secondary-text text-base sm:text-lg leading-relaxed">
            {t.servicesSection.subheading}
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-8 mb-16">
          {services.map((service) => {
            const title = service.title[language] || service.title.hi;
            const fullDesc = service.fullDesc[language] || service.fullDesc.hi;
            const duration = service.duration[language] || service.duration.hi;
            const keyPoints = service.keyPoints[language] || service.keyPoints.hi;

            return (
              <div
                key={service.number}
                className="bg-surface-light rounded-2xl border border-border-subtle p-7 sm:p-10 shadow-subtle hover:border-accent-gold/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left info */}
                  <div className="lg:col-span-8 flex flex-col space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-serif text-accent-gold font-light">
                        {service.number}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-secondary-text font-medium bg-[#F5EFE6] px-2.5 py-1 rounded">
                        {service.englishTitle}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary-text">
                      {title}
                    </h2>

                    <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
                      {fullDesc}
                    </p>

                    <div className="pt-2">
                      <span className="text-xs font-semibold text-primary-text uppercase tracking-wider block mb-2">
                        {language === "bn" ? "প্রধান বৈশিষ্ট্যসমূহ:" : language === "en" ? "Key Highlights:" : "मुख्य विशेषताएं:"}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {keyPoints.map((kp, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-primary-text/90">
                            <Check className="w-3.5 h-3.5 text-accent-gold flex-shrink-0" />
                            <span>{kp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Quick Info & CTAs */}
                  <div className="lg:col-span-4 bg-background rounded-xl p-6 border border-border-subtle flex flex-col justify-between h-full space-y-5">
                    <div className="space-y-3 text-xs text-secondary-text">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-accent-gold flex-shrink-0" />
                        <span><strong>अवधि:</strong> {duration}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                        <span><strong>स्थान:</strong> {service.locations.join(", ")}</span>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2.5 pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="w-full text-center py-2.5 bg-accent-gold hover:bg-accent-goldDark text-white font-semibold rounded-btn text-xs tracking-wider transition-colors"
                      >
                        {t.servicesSection.learnMore}
                      </Link>

                      <a
                        href={getWhatsAppUrl(`नमस्ते पंडित जी, मुझे ${title} के बारे में परामर्श चाहिए।`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center py-2.5 border border-border-subtle bg-surface-light hover:bg-white text-primary-text font-medium rounded-btn text-xs transition-colors"
                      >
                        WhatsApp पर दक्षिणा पूछें
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
