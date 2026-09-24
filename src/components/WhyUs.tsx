"use client";

import React from "react";
import { UserCheck, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();

  const points = [
    {
      icon: UserCheck,
      title: t.whyUs.point1Title,
      desc: t.whyUs.point1Desc,
    },
    {
      icon: ShieldCheck,
      title: t.whyUs.point2Title,
      desc: t.whyUs.point2Desc,
    },
    {
      icon: HeartHandshake,
      title: t.whyUs.point3Title,
      desc: t.whyUs.point3Desc,
    },
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
            {t.whyUs.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-primary-text">
            {t.whyUs.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-surface-light rounded-card p-8 border border-border-subtle hover:border-accent-gold/40 transition-all duration-300 shadow-subtle flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-goldSoft flex items-center justify-center mb-6 text-accent-gold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary-text mb-3">
                  {pt.title}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
