"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs } from "@/data/faqs";
import { getWhatsAppUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const { t, language } = useLanguage();

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-spacing bg-surface-light border-y border-border-subtle" id="faqs">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
            {t.faqs.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-primary-text mb-3">
            {t.faqs.heading}
          </h2>
          <p className="text-secondary-text text-sm sm:text-base">
            {t.faqs.desc}
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const question = faq.question[language] || faq.question.hi;
            const answer = faq.answer[language] || faq.answer.hi;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-border-subtle bg-background overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-primary-text">
                    {question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-gold flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-secondary-text leading-relaxed border-t border-border-subtle/50 animate-in fade-in duration-200">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Helpline for custom query */}
        <div className="text-center mt-10">
          <p className="text-xs text-secondary-text mb-3">
            {t.faqs.moreQuestions}
          </p>
          <a
            href={getWhatsAppUrl("नमस्ते पंडित जी, मुझे गया जी पिंडदान से संबंधित एक विशेष प्रश्न पूछना है।")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-accent-gold hover:text-accent-goldDark transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>{t.faqs.askOnWhatsApp}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
