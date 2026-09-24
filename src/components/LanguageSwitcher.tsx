"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; script: string }[] = [
    { code: "hi", label: "हिन्दी", script: "Hindi" },
    { code: "en", label: "English", script: "EN" },
    { code: "bn", label: "বাংলা", script: "Bengali" },
  ];

  const current = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center space-x-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-btn bg-[#F5EFE6] text-primary-text hover:bg-accent-goldSoft border border-border-subtle transition-colors"
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-accent-gold" />
        <span>{current.label}</span>
        <ChevronDown className={`w-3 h-3 text-secondary-text transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-36 bg-surface-light rounded-xl shadow-card border border-border-subtle py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-left transition-colors ${
                language === lang.code
                  ? "bg-accent-goldSoft text-accent-gold font-bold"
                  : "text-primary-text hover:bg-background"
              }`}
            >
              <span>{lang.label}</span>
              {language === lang.code && <Check className="w-3.5 h-3.5 text-accent-gold" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
