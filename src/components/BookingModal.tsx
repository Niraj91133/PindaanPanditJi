"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import BookingForm from "./BookingForm";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialService, setInitialService] = useState<string>("पिंडदान (Gaya Ji Pind Daan)");
  const { t, language } = useLanguage();
  const panditName = language === "bn" ? siteConfig.pandit.bengaliName : (language === "en" ? siteConfig.pandit.englishName : siteConfig.pandit.name);

  useEffect(() => {
    const handleOpen = (e: CustomEvent<{ service?: string }>) => {
      if (e.detail && e.detail.service) {
        setInitialService(e.detail.service);
      }
      setIsOpen(true);
    };

    window.addEventListener("open-booking-modal" as any, handleOpen);
    return () => {
      window.removeEventListener("open-booking-modal" as any, handleOpen);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-surface-light rounded-2xl border border-border-subtle shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-secondary-text hover:text-primary-text rounded-full hover:bg-background transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="text-[11px] font-semibold tracking-widest text-accent-gold uppercase block mb-1">
            {t.bookingForm.modalEyebrow}
          </span>
          <h3 className="text-2xl font-bold font-serif text-primary-text">
            {t.bookingForm.modalTitle}
          </h3>
          <p className="text-xs text-secondary-text mt-1">
            {t.bookingForm.modalSubtitle}
          </p>
        </div>

        {/* Form */}
        <BookingForm
          initialService={initialService}
          onSuccess={() => {
            setTimeout(() => setIsOpen(false), 2000);
          }}
        />
      </div>
    </div>
  );
}
