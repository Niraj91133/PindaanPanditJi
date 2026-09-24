"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessTimeline() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t.process.step1Title,
      desc: t.process.step1Desc,
    },
    {
      num: "02",
      title: t.process.step2Title,
      desc: t.process.step2Desc,
    },
    {
      num: "03",
      title: t.process.step3Title,
      desc: t.process.step3Desc,
    },
    {
      num: "04",
      title: t.process.step4Title,
      desc: t.process.step4Desc,
    },
  ];

  return (
    <section className="section-spacing bg-surface-light border-y border-border-subtle">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
            {t.process.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-primary-text">
            {t.process.heading}
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-background p-6 rounded-xl border border-border-subtle hover:border-accent-gold/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-serif font-light text-accent-gold mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold font-serif text-primary-text mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-text text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-accent-gold/40 font-serif">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
