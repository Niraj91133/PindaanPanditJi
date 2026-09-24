"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function PanditJiPage() {
  const { pandit } = siteConfig;
  const { t, language } = useLanguage();
  const panditName = language === "bn" ? pandit.bengaliName : (language === "en" ? pandit.englishName : pandit.name);
  const panditTitle = pandit.title[language] || pandit.title.hi;
  const panditLineage = pandit.lineage[language] || pandit.lineage.hi;
  const panditQuote = pandit.quote[language] || pandit.quote.hi;

  const credentials = [
    language === "bn"
      ? "গয়া জী বিষ্ণুপাদ অঞ্চলে প্রাচীন তীর্থ পুরোহিত বৈদিক ঐতিহ্য।"
      : language === "en"
      ? "Ancient Tirtha Purohit Vedic tradition in the sacred Vishnupad precinct of Gaya Ji."
      : "गया जी विष्णुपद क्षेत्र में प्राचीन तीर्थ पुरोहित परंपरा।",
    language === "bn"
      ? "২০+ বছর ধরে হাজার হাজার পরিবারকে প্রামাণিক পিণ্ডদান ও শ্রাদ্ধ সেবা।"
      : language === "en"
      ? "Over 20+ years guiding thousands of families worldwide in authentic Pind Daan."
      : "२०+ वर्षों से देश-विदेश के हजारों परिवारों को प्रामाणिक पिंडदान व श्राद्ध सेवा।",
    language === "bn"
      ? "গরুড় পুরাণ ও শাস্ত্রীয় কর্মকাণ্ডে সুগভীর জ্ঞান ও বেদজ্ঞ শাস্ত্রীয় ঐতিহ্য।"
      : language === "en"
      ? "Mastery of the Garuda Purana, scriptural rituals, and Vedic mantras."
      : "संस्कृत व कर्मकांड में शास्त्रीय ज्ञान एवं गरुड़ पुराण के मर्मज्ञ।",
    language === "bn"
      ? "সম্পূর্ণ ব্যক্তিগত নিষ্ঠা — কোনো মধ্যস্থতাকারী বা দালাল ছাড়া সরাসরি সান্নিধ্য।"
      : language === "en"
      ? "Pure personal dedication — Direct guidance with zero middlemen or agents."
      : "पूर्णतः व्यक्तिगत समर्पण — किसी मध्यस्थ या एजेंट के बिना सीधा सान्निध्य।",
  ];

  return (
    <div className="bg-background min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-secondary-text mb-6">
          <Link href="/" className="hover:text-accent-gold">
            होम
          </Link>
          <span>/</span>
          <span className="text-primary-text font-medium">{t.header.panditJi}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border-subtle shadow-card bg-surface-light">
              <Image
                src="/images/pandit-ji.jpg"
                alt={panditName}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase">
              {t.panditSection.eyebrow}
            </span>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text">
                {panditName}
              </h1>
              <p className="text-base text-accent-gold font-medium mt-1">
                {panditTitle} · {panditLineage}
              </p>
            </div>

            <p className="text-base text-secondary-text leading-relaxed">
              {language === "bn"
                ? "গয়া জীর পুণ্যভূমিতে আমাদের ঐতিহ্য সনাতন রীতি অনুসারে তীর্থযাত্রীদের পিতৃ কর্ম, পিণ্ডদান ও শ্রাদ্ধের সেবা প্রদান করে আসছে। আমাদের মূল উদ্দেশ্য হলো প্রতিটি পরিবার যাতে কোনো বিভ্রান্তি ছাড়াই সম্পূর্ণ শ্রদ্ধা ও শুদ্ধ বৈদিক বিধিতে তাদের পূর্বপুরুষদের আত্মার তৃপ্তি বিধান করতে পারে।"
                : language === "en"
                ? "In the sacred soil of Gaya Ji, our lineage has dedicatedly served families across generations with authentic Vedic Pind Daan, Shraddha, and Pitru rituals. Our core mission is to provide every devotee family with a serene, transparent, and devout experience without any middlemen."
                : "गया जी की पावन धरती पर हमारा परिवार सनातन परंपरा के अनुसार देश-विदेश से आने वाले श्रद्धालुओं को पितृ कर्म, पिंडदान और श्राद्ध की सेवा प्रदान करता आ रहा है। हमारा मूल उद्देश्य है कि प्रत्येक श्रद्धालु परिवार को गया जी में बिना किसी असमंजस या असुविधा के, संपूर्ण श्रद्धा और शुद्ध वैदिक विधि से अपने पूर्वजों को तृप्ति प्रदान करने का सौभाग्य मिले।"}
            </p>

            <div className="border-l-2 border-accent-gold pl-5 py-1 bg-surface-light rounded-r-lg">
              <p className="font-serif italic text-base sm:text-lg text-primary-text">
                {panditQuote}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getWhatsAppUrl(`नमस्ते पंडित जी (${panditName}), मैं आपसे गया जी यात्रा व पिंडदान के संबंध में सीधे बात करना चाहता हूँ।`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-medium text-sm rounded-btn transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.panditSection.directTalk}</span>
              </a>

              <a
                href={`tel:${siteConfig.whatsappNumber}`}
                className="inline-flex items-center space-x-2 px-5 py-3 border border-border-subtle bg-surface-light hover:bg-white text-primary-text font-medium text-sm rounded-btn transition-colors"
              >
                <Phone className="w-4 h-4 text-accent-gold" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Credentials & Tradition */}
        <div className="bg-surface-light rounded-2xl border border-border-subtle p-8 sm:p-12 mb-16 shadow-subtle">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
              {language === "bn" ? "ঐতিহ্য ও অভিজ্ঞতা" : language === "en" ? "TRADITION & CREDENTIALS" : "परंपरा एवं अनुभव"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary-text">
              {language === "bn" ? "প্রামাণিকতা ও সেবার সংকল্প" : language === "en" ? "Authenticity & Sacred Commitment" : "प्रामाणिकता और सेवा का संकल्प"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred, idx) => (
              <div key={idx} className="flex items-start space-x-3.5 p-4 rounded-xl bg-background border border-border-subtle">
                <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-text leading-relaxed font-medium">
                  {cred}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
