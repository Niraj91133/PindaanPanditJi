"use client";

import React from "react";
import { UserCheck, Sparkles, HeartHandshake, PackageCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustBar() {
  const { t } = useLanguage();

  const items = [
    {
      icon: UserCheck,
      title: t.trustBar.directPandit.title,
      hindi: t.trustBar.directPandit.subtitle,
    },
    {
      icon: Sparkles,
      title: t.trustBar.clearDakshina.title,
      hindi: t.trustBar.clearDakshina.subtitle,
    },
    {
      icon: HeartHandshake,
      title: t.trustBar.personalGuidance.title,
      hindi: t.trustBar.personalGuidance.subtitle,
    },
    {
      icon: PackageCheck,
      title: t.trustBar.pujaSamagri.title,
      hindi: t.trustBar.pujaSamagri.subtitle,
    },
  ];

  return (
    <section className="border-y border-border-subtle bg-surface-light py-5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-3 px-2 py-1"
              >
                <div className="w-9 h-9 rounded-full bg-accent-goldSoft/70 border border-accent-gold/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-accent-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-primary-text uppercase tracking-wider">
                    {item.title}
                  </span>
                  <span className="text-xs text-secondary-text hidden sm:block">
                    {item.hindi}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
