"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function PindDaanPage() {
  const { t, language } = useLanguage();
  const panditName = language === "bn" ? siteConfig.pandit.bengaliName : (language === "en" ? siteConfig.pandit.englishName : siteConfig.pandit.name);

  const vedis = [
    {
      title: "१. फल्गु नदी तीर्थ (Falgu River)",
      desc: "प्रथम चरण में फल्गु नदी के पावन तट पर स्नान, आचमन, कुश व तिल से तर्पण एवं बालू के पिंड का अर्पण किया जाता है। यहाँ माता सीता द्वारा महाराज दशरथ जी को बालू का पिंडदान दिए जाने का अति पावन प्रसंग है।",
      significance: "आदि तीर्थ - समस्त पापों का प्रक्षालन एवं पितृ आह्वान।",
    },
    {
      title: "२. विष्णुपद मंदिर वेदी (Vishnupad Temple)",
      desc: "द्वितीय चरण में भगवान श्री गदाधर (विष्णु) के अष्टकोणीय रजत कुंड में स्थापित दिव्य चरण चिह्नों पर जौ के आटे और तिल से बने मुख्य पिंड अर्पित किए जाते हैं।",
      significance: "मुख्य वेदी - भगवान विष्णु के साक्षात चरणों में पितरों को वैकुंठ धाम की प्राप्ति।",
    },
    {
      title: "३. अक्षयवट धाम (Akshayavat)",
      desc: "तृतीय एवं अंतिम चरण में अमर वटवृक्ष 'अक्षयवट' के नीचे पिंडदान संपन्न करके ब्राह्मण को दक्षिणा व 'सुफल' लिया जाता है। यहाँ पितर सदा-सदा के लिए तृप्त हो जाते हैं।",
      significance: "सुफल वेदी - अक्षय तृप्ति, जिसके पश्चात अन्य किसी तीर्थ पर पिंडदान की आवश्यकता नहीं रहती।",
    },
  ];

  const preparationList = [
    "पितरों के नाम (पिता, पितामह, प्रपितामह, माता, दादी, परदादी आदि)",
    "अपना गोत्र (यदि गोत्र ज्ञात न हो तो पंडित जी शास्त्रोक्त कश्यप गोत्र से संकल्प कराएंगे)",
    "धोती-कुर्ता या सात्विक श्वेत वस्त्र (मुख्य कर्ता के लिए)",
    "हृदय में पितरों के प्रति कृतज्ञता और श्रद्धा का भाव",
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
          <span className="text-primary-text font-medium">{t.header.pindDaan}</span>
        </div>

        {/* Header Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
            GAYA JI PIND DAAN VIDHI
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text mb-4 leading-tight">
            गया जी में पिंडदान
            <span className="block font-normal text-secondary-text text-2xl sm:text-3xl lg:text-4xl mt-1">
              त्रिवेदी की पावन परंपरा एवं शास्त्रोक्त विधि
            </span>
          </h1>
          <p className="text-secondary-text text-base sm:text-lg leading-relaxed">
            सनातन धर्म में गया जी को पितरों के मोक्ष का परम द्वार माना गया है। जानिए फल्गु, विष्णुपद और अक्षयवट की तीनों पावन वेदियों पर विधि कैसे संपन्न होती है।
          </p>
        </div>

        {/* Main Banner Image */}
        <div className="relative aspect-[16/8] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-border-subtle shadow-card mb-14 bg-surface-light">
          <Image
            src="/images/ritual.jpg"
            alt="गया जी पिंडदान विधि"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl">
            <span className="text-xs uppercase tracking-widest text-amber-200">
              वैदिक परंपरा
            </span>
            <div className="text-xl sm:text-2xl font-serif font-bold">
              एक ही दिन में संपूर्ण त्रिवेदी अनुष्ठान
            </div>
          </div>
        </div>

        {/* 3 Vedis Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary-text mb-8">
            त्रिवेदी की तीन मुख्य वेदियाँ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vedis.map((v, idx) => (
              <div
                key={idx}
                className="bg-surface-light rounded-card p-7 border border-border-subtle shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold font-serif text-primary-text mb-3">
                    {v.title}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed mb-4">
                    {v.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-border-subtle/80 text-xs text-accent-gold font-medium">
                  {v.significance}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation & Checklist */}
        <div className="bg-surface-light rounded-2xl border border-border-subtle p-8 sm:p-10 mb-16 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
                आवश्यक तैयारी
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary-text mb-4">
                पिंडदान के लिए आपको क्या जानकारी चाहिए?
              </h2>
              <p className="text-secondary-text text-sm leading-relaxed mb-6">
                पूजा की समस्त सामग्री (जौ का आटा, काले तिल, कुशा, पात्र, फूल, रोली) {panditName} जी द्वारा व्यवस्थित की जाती है। आपको केवल अपने पूर्वजों का स्मरण और मूल विवरण साथ रखना है।
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {preparationList.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-primary-text">
                  <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Direct CTA Box */}
        <div className="bg-[#26231F] text-white rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-darkCard">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FFFDF9] mb-3">
            पिंडदान विधि के लिए {panditName} जी से सीधे बात करें
          </h3>
          <p className="text-[#A6A095] text-sm sm:text-base mb-6 max-w-lg mx-auto">
            अपनी सुविधा और तिथि के अनुसार सीधे तीर्थ पुरोहित जी से परामर्श लें।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(`नमस्ते पंडित जी (${panditName}), मुझे गया जी पिंडदान विधि के बारे में विस्तार से बात करनी है।`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-semibold rounded-btn transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp पर पूछें</span>
            </a>
            <Link
              href="/book"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent-gold hover:bg-accent-goldLight text-white text-sm font-semibold rounded-btn transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>बुकिंग फॉर्म भरें</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
