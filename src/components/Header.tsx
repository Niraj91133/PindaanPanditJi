"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X, Phone, Shield } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { openBookingModal, getWhatsAppUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#F9F7F2]/95 backdrop-blur-md border-b border-border-subtle transition-all duration-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex flex-col items-start">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary-text group-hover:text-accent-gold transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[11px] tracking-widest uppercase text-secondary-text font-medium">
              {t.header.tagline}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            <Link
              href="/pind-daan"
              className={`text-sm font-medium transition-colors ${
                pathname === "/pind-daan"
                  ? "text-accent-gold font-semibold"
                  : "text-primary-text hover:text-accent-gold"
              }`}
            >
              {t.header.pindDaan}
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith("/services")
                  ? "text-accent-gold font-semibold"
                  : "text-primary-text hover:text-accent-gold"
              }`}
            >
              {t.header.services}
            </Link>
            <Link
              href="/pandit-ji"
              className={`text-sm font-medium transition-colors ${
                pathname === "/pandit-ji"
                  ? "text-accent-gold font-semibold"
                  : "text-primary-text hover:text-accent-gold"
              }`}
            >
              {t.header.panditJi}
            </Link>
            <Link
              href="/gaya-ji"
              className={`text-sm font-medium transition-colors ${
                pathname === "/gaya-ji"
                  ? "text-accent-gold font-semibold"
                  : "text-primary-text hover:text-accent-gold"
              }`}
            >
              {t.header.gayaJi}
            </Link>
            <Link
              href="/faqs"
              className={`text-sm font-medium transition-colors ${
                pathname === "/faqs"
                  ? "text-accent-gold font-semibold"
                  : "text-primary-text hover:text-accent-gold"
              }`}
            >
              {t.header.faqs}
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-accent-gold font-semibold"
                  : "text-primary-text hover:text-accent-gold"
              }`}
            >
              {t.header.contact}
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switcher */}
            <LanguageSwitcher />

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-primary-text hover:text-accent-gold px-2.5 py-2 rounded-btn transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>{t.header.whatsappPandit}</span>
            </a>

            <button
              onClick={() => openBookingModal()}
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-accent-gold hover:bg-accent-goldDark rounded-btn transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              {t.header.bookNow}
            </button>

            {/* Subtle Admin Link */}
            <Link
              href="/admin"
              className="p-2 text-secondary-text hover:text-primary-text rounded-btn hover:bg-surface-light transition-colors"
              title="Admin Portal"
            >
              <Shield className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher />
            <a
              href={`tel:${siteConfig.whatsappNumber}`}
              className="p-2 text-primary-text hover:text-accent-gold rounded-btn"
              aria-label="Call Pandit Ji"
            >
              <Phone className="w-4 h-4 text-accent-gold" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary-text hover:text-accent-gold focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-down */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-subtle bg-surface-light px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pb-4 border-b border-border-subtle">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-primary-text hover:text-accent-gold py-1"
            >
              होम (Home)
            </Link>
            <Link
              href="/pind-daan"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-primary-text hover:text-accent-gold py-1"
            >
              {t.header.pindDaan}
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-primary-text hover:text-accent-gold py-1"
            >
              {t.header.services}
            </Link>
            <Link
              href="/pandit-ji"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-primary-text hover:text-accent-gold py-1"
            >
              {t.header.panditJi}
            </Link>
            <Link
              href="/gaya-ji"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-primary-text hover:text-accent-gold py-1"
            >
              {t.header.gayaJi}
            </Link>
            <Link
              href="/faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-primary-text hover:text-accent-gold py-1"
            >
              {t.header.faqs}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-primary-text hover:text-accent-gold py-1"
            >
              {t.header.contact}
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-accent-gold hover:text-accent-goldDark py-1 flex items-center space-x-1.5"
            >
              <Shield className="w-4 h-4" />
              <span>{t.header.admin} (Admin Portal)</span>
            </Link>
          </nav>

          <div className="flex flex-col space-y-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
              className="w-full text-center py-3 bg-accent-gold text-white font-semibold rounded-btn text-sm"
            >
              {t.header.bookNow}
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 border border-border-subtle bg-white text-primary-text font-medium rounded-btn text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>{t.header.whatsappPandit}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
