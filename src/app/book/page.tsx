import React from "react";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { ShieldCheck, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: "पिंडदान एवं पूजा बुकिंग | PindaanPanditJi",
  description:
    "गया जी में पिंडदान, त्रिपिंडी श्राद्ध या नारायण बलि हेतु तिथि एवं यजमान विवरण दर्ज करें। सीधे तीर्थ पुरोहित जी से तुरंत मार्गदर्शन।",
};

export default function BookPage() {
  return (
    <div className="bg-background min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-secondary-text mb-6">
          <Link href="/" className="hover:text-accent-gold">
            होम
          </Link>
          <span>/</span>
          <span className="text-primary-text font-medium">बुकिंग एवं परामर्श</span>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
              RESERVATION & CONSULTATION
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text mb-3">
              पिंडदान एवं पूजा बुकिंग
            </h1>
            <p className="text-secondary-text text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              सीधे तीर्थ पुरोहित {siteConfig.pandit.name} जी से तिथि और दक्षिणा का मार्गदर्शन प्राप्त करने हेतु विवरण भरें।
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-surface-light rounded-2xl border border-border-subtle p-7 sm:p-10 shadow-card mb-8">
            <BookingForm />
          </div>

          {/* Direct Support Quick Links */}
          <div className="bg-[#F5EFE6] rounded-xl p-6 border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-text">
            <div className="flex items-center space-x-2 text-primary-text font-medium">
              <ShieldCheck className="w-5 h-5 text-accent-gold flex-shrink-0" />
              <span>सीधे पंडित जी से संवाद · बिना किसी मध्यस्थ के</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-emerald-800 font-semibold hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.whatsappNumber}`}
                className="flex items-center space-x-1.5 text-primary-text font-semibold hover:text-accent-gold"
              >
                <Phone className="w-4 h-4 text-accent-gold" />
                <span>कॉल करें</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
