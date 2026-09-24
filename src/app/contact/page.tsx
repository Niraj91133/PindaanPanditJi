"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import BookingForm from "@/components/BookingForm";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const panditName = language === "bn" ? siteConfig.pandit.bengaliName : (language === "en" ? siteConfig.pandit.englishName : siteConfig.pandit.name);

  return (
    <div className="bg-background min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-secondary-text mb-6">
          <Link href="/" className="hover:text-accent-gold">
            होम
          </Link>
          <span>/</span>
          <span className="text-primary-text font-medium">{t.header.contact}</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
            DIRECT PERSONAL CONTACT
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text mb-4">
            {language === "bn" ? "পণ্ডিত জীর সাথে সরাসরি যোগাযোগ" : language === "en" ? "Direct Contact with Pandit Ji" : "पंडित जी से सीधा संपर्क"}
          </h1>
          <p className="text-secondary-text text-base sm:text-lg leading-relaxed">
            {language === "bn"
              ? "গয়া জী-তে পিণ্ডদান, তিথি নির্ধারণ, দক্ষিণা বা যেকোনো প্রশ্নের সমাধানের জন্য সরাসরি তীর্থ পুরোহিত পন্ডিত আনন্দ কুমার গুপ্ত জীর সাথে কথা বলুন।"
              : language === "en"
              ? "Speak directly with Tirtha Purohit Pt. Anand Kumar Guput for ritual scheduling, auspicious dates, dakshina, or travel guidance."
              : "गया जी में पिंडदान, तिथि निर्धारण, दक्षिणा या किसी भी शंका के समाधान के लिए सीधे तीर्थ पुरोहित पं. आनंद कुमार गुपुत जी से बात करें।"}
          </p>
        </div>

        {/* Main Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-light rounded-2xl p-7 border border-border-subtle shadow-subtle space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-gold">
                  {t.footer.purohitTitle}
                </span>
                <h3 className="text-2xl font-bold font-serif text-primary-text mt-1">
                  {panditName}
                </h3>
                <p className="text-xs text-secondary-text mt-0.5">
                  {siteConfig.pandit.title[language] || siteConfig.pandit.title.hi} · {siteConfig.pandit.lineage[language] || siteConfig.pandit.lineage.hi}
                </p>
              </div>

              <div className="space-y-4 text-sm text-primary-text border-t border-border-subtle/80 pt-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase text-secondary-text">स्थान / Location</strong>
                    <span>{siteConfig.location.address}, {siteConfig.location.city}, {siteConfig.location.state} - {siteConfig.location.pincode}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase text-secondary-text">फोन नंबर / Phone</strong>
                    <a href={`tel:${siteConfig.whatsappNumber}`} className="hover:text-accent-gold font-medium">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase text-secondary-text">WhatsApp</strong>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 hover:text-emerald-900 font-medium"
                    >
                      {siteConfig.phoneDisplay} (सीधा संवाद)
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase text-secondary-text">परामर्श समय / Hours</strong>
                    <span>प्रातः ०६:०० बजे से रात्रि ०९:०० बजे तक (6:00 AM - 9:00 PM)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F4EFE6] rounded-xl p-5 border border-border-subtle text-xs text-secondary-text space-y-2">
              <div className="flex items-center space-x-2 text-primary-text font-semibold">
                <ShieldCheck className="w-4 h-4 text-accent-gold" />
                <span>{language === "bn" ? "সরাসরি ব্যবস্থার নিশ্চয়তা" : language === "en" ? "Direct Connection Guarantee" : "सीधी व्यवस्था का आश्वासन"}</span>
              </div>
              <p>
                {language === "bn"
                  ? "গয়া জী পৌঁছানোর পর কোনো অপরিচিত দালাল বা মধ্যস্থতাকারীর বিভ্রান্তিতে পড়বেন না। সরাসরি পণ্ডিত জীর দেওয়া স্থানে যোগাযোগ করুন।"
                  : language === "en"
                  ? "Avoid middlemen and unauthorized agents upon arriving in Gaya. Connect directly with Pt. Anand Kumar Guput at the designated temple location."
                  : "गया जी पहुँचने पर किसी अनजान एजेंट या बिचौलिए के भ्रम में न आएं। सीधे पं. आनंद कुमार गुपुत जी के दिए गए स्थान पर संपर्क करें।"}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-light rounded-2xl p-7 sm:p-10 border border-border-subtle shadow-card">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-accent-gold font-semibold block">
                  ONLINE INQUIRY & BOOKING
                </span>
                <h3 className="text-2xl font-bold font-serif text-primary-text mt-1">
                  {t.bookingForm.modalTitle}
                </h3>
                <p className="text-xs text-secondary-text mt-1">
                  {t.bookingForm.modalSubtitle}
                </p>
              </div>

              <BookingForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
