"use client";

import React from "react";
import { reviews } from "@/data/reviews";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ReviewsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="section-spacing bg-background" id="reviews">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
            {t.reviews.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-primary-text">
            {t.reviews.heading}
          </h2>
        </div>

        {/* 3 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => {
            const quote = rev.quote[language] || rev.quote.hi;
            const author = rev.author[language] || rev.author.hi;
            const location = rev.location[language] || rev.location.hi;
            const ritualType = rev.ritualType[language] || rev.ritualType.hi;

            return (
              <div
                key={rev.id}
                className="bg-surface-light rounded-card p-8 border border-border-subtle hover:border-accent-gold/40 transition-colors shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-accent-gold/30 mb-4" />
                  <p className="text-primary-text font-serif text-base sm:text-lg leading-relaxed mb-6 italic">
                    {quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle/80">
                  <div className="font-semibold text-sm text-primary-text">
                    — {author}
                  </div>
                  <div className="text-xs text-secondary-text mt-0.5 flex items-center justify-between">
                    <span>{location}</span>
                    <span className="text-[11px] text-accent-gold">{ritualType}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
