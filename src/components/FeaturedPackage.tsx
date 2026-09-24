"use client";

import React from "react";
import { Check, ArrowRight, MapPin } from "lucide-react";
import { openBookingModal } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturedPackage() {
  const { t } = useLanguage();

  const locations = ["फल्गु नदी (Falgu River)", "विष्णुपद मंदिर (Vishnupad Mandir)", "अक्षयवट (Akshayavat)"];

  return (
    <section className="section-spacing bg-[#26231F] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-gold/10 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-[#1E1C18] rounded-2xl border border-[#3B3730] p-8 sm:p-12 lg:p-14 shadow-darkCard">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-accent-gold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span>{t.featuredPackage.eyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif leading-tight text-[#FFFDF9]">
                {t.featuredPackage.title}
              </h2>

              <p className="text-[#A6A095] text-sm sm:text-base leading-relaxed">
                {t.featuredPackage.desc}
              </p>

              {/* Three key locations in Gaya */}
              <div className="flex flex-wrap gap-2 pt-1">
                {locations.map((loc, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 text-xs text-[#DDD7CC] bg-[#2A2621] px-3 py-1.5 rounded border border-[#3E3931]"
                  >
                    <MapPin className="w-3 h-3 text-accent-gold" />
                    <span>{loc}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Card / Inclusions & CTA */}
            <div className="lg:col-span-5 bg-[#26231F] rounded-xl p-6 sm:p-7 border border-[#3B3730] flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-accent-gold font-medium mb-1">
                  {t.featuredPackage.inclusionsTitle}
                </div>
                <div className="text-2xl font-serif font-bold text-[#FFFDF9] mb-1">
                  {t.featuredPackage.trivedi}
                </div>
                <div className="text-xs text-[#968F83] mb-6">
                  {t.featuredPackage.note}
                </div>

                {/* Checklist */}
                <div className="space-y-3 mb-8">
                  {t.featuredPackage.inclusions.map((inc, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#DDD7CC]">
                      <div className="w-4 h-4 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent-gold" />
                      </div>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => openBookingModal("संपूर्ण त्रिवेदी पिंडदान (Complete Pind Daan)")}
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-4 bg-accent-gold hover:bg-accent-goldLight text-white font-medium text-sm rounded-btn transition-colors active:scale-[0.99] group shadow-sm"
              >
                <span>{t.featuredPackage.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
