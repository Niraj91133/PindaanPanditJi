"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail, Shield, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const panditName = language === "bn" ? siteConfig.pandit.bengaliName : (language === "en" ? siteConfig.pandit.englishName : siteConfig.pandit.name);

  return (
    <footer className="bg-surface-light border-t border-border-subtle pt-14 pb-24 md:pb-14 text-sm text-secondary-text">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-border-subtle">
          
          {/* Col 1: Brand & Promise */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-primary-text hover:text-accent-gold transition-colors">
                {siteConfig.name}
              </span>
              <span className="block text-[11px] tracking-widest uppercase text-secondary-text font-medium mt-0.5">
                {t.header.tagline}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold text-primary-text block">
                {t.footer.purohitTitle}
              </span>
              <span className="text-xs text-accent-gold font-medium">
                {panditName}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200 text-xs font-medium transition-colors"
                title="Instagram Profile"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>anandpanditgayaji</span>
              </a>

              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 text-xs font-medium transition-colors"
                title="Facebook Profile"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-text">
              {t.footer.quickLinks}
            </span>
            <Link href="/pind-daan" className="hover:text-accent-gold transition-colors">
              {t.header.pindDaan}
            </Link>
            <Link href="/services" className="hover:text-accent-gold transition-colors">
              {t.header.services}
            </Link>
            <Link href="/pandit-ji" className="hover:text-accent-gold transition-colors">
              {t.header.panditJi}
            </Link>
            <Link href="/gaya-ji" className="hover:text-accent-gold transition-colors">
              {t.header.gayaJi}
            </Link>
            <Link href="/faqs" className="hover:text-accent-gold transition-colors">
              {t.header.faqs}
            </Link>
          </div>

          {/* Col 3: Ritual Services */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-text">
              {t.footer.vedicServices}
            </span>
            <Link href="/services/pind-daan" className="hover:text-accent-gold transition-colors">
              ०१ संपूर्ण त्रिवेदी पिंडदान
            </Link>
            <Link href="/services/tripindi-shraddha" className="hover:text-accent-gold transition-colors">
              ०२ त्रिपिंडी श्राद्ध कर्म
            </Link>
            <Link href="/services/narayan-bali" className="hover:text-accent-gold transition-colors">
              ०३ नारायण बलि विधान
            </Link>
            <Link href="/services/annual-shraddha" className="hover:text-accent-gold transition-colors">
              ०४ वार्षिक तिथि श्राद्ध
            </Link>
          </div>

          {/* Col 4: Contact & Direct Pandit Ji */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-text">
              {t.footer.contactInfo}
            </span>
            <div className="flex items-start space-x-2.5 text-xs">
              <MapPin className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
              <span>{siteConfig.location.address}, {siteConfig.location.city}, {siteConfig.location.state}</span>
            </div>
            <a
              href={`tel:${siteConfig.whatsappNumber}`}
              className="flex items-center space-x-2.5 text-xs text-primary-text hover:text-accent-gold transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 text-xs text-emerald-800 hover:text-emerald-900 font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span>WhatsApp Pandit Ji ({siteConfig.phoneDisplay})</span>
            </a>
            <div className="flex items-center space-x-2.5 text-xs text-secondary-text">
              <Mail className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span>{siteConfig.email}</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary-text gap-4">
          <div>
            © 2026 {siteConfig.name}. {t.footer.rights}
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/faqs" className="hover:text-primary-text transition-colors">
              {t.footer.terms}
            </Link>
            <Link href="/faqs" className="hover:text-primary-text transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/contact" className="hover:text-primary-text transition-colors">
              {t.header.contact}
            </Link>
            <Link href="/admin" className="text-accent-gold hover:underline flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span>{t.header.admin}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
