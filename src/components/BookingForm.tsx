"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageCircle, Phone, Calendar, User, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

interface BookingFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export default function BookingForm({ initialService, onSuccess }: BookingFormProps) {
  const { t, language } = useLanguage();
  const panditName = language === "bn" ? siteConfig.pandit.bengaliName : (language === "en" ? siteConfig.pandit.englishName : siteConfig.pandit.name);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    date: "",
    service: initialService || "पिंडदान (Gaya Ji Pind Daan)",
    members: "1-2",
    gotra: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("कृपया अपना नाम और मोबाइल नंबर दर्ज करें।");
      return;
    }

    // Save to Local Storage for Admin Portal
    try {
      const newBooking = {
        id: `BK-${Date.now()}`,
        ...formData,
        status: "New",
        createdAt: new Date().toISOString(),
      };
      const existingStr = localStorage.getItem("pindaan_bookings");
      const existing = existingStr ? JSON.parse(existingStr) : [];
      localStorage.setItem("pindaan_bookings", JSON.stringify([newBooking, ...existing]));
      window.dispatchEvent(new Event("pindaan_bookings_updated"));
    } catch (err) {
      console.error("Failed to save booking locally:", err);
    }

    // Prepare WhatsApp Message
    const message = `🙏 *गया जी पिंडदान / पूजा परामर्श अनुरोध* 🙏
━━━━━━━━━━━━━━━━━━━━
*यजमान का नाम:* ${formData.name}
*फोन नंबर:* ${formData.phone}
*शहर / स्थान:* ${formData.city || "उल्लेखित नहीं"}
*वांछित तिथि:* ${formData.date || "शीघ्र परामर्श"}
*पूजा / विधि:* ${formData.service}
*परिजनों की संख्या:* ${formData.members}
*गोत्र:* ${formData.gotra || "विधि अनुसार मार्गदर्शन चाहिए"}
${formData.notes ? `*विशेष प्रश्न / टिप्पणी:* ${formData.notes}` : ""}
━━━━━━━━━━━━━━━━━━━━
नमस्ते पंडित जी (${panditName}), कृपया इस विवरण के अनुसार मार्गदर्शन एवं दक्षिणा विवरण प्रदान करें।`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;

    setSubmitted(true);
    if (onSuccess) {
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        onSuccess();
      }, 700);
    } else {
      window.open(whatsappUrl, "_blank");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8 px-4 space-y-4">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-serif text-primary-text">
          {t.bookingForm.successTitle}
        </h3>
        <p className="text-sm text-secondary-text max-w-md mx-auto">
          {t.bookingForm.successDesc}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-accent-gold underline hover:text-accent-goldDark"
        >
          {t.bookingForm.newFormBtn}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-primary-text uppercase tracking-wider mb-1.5">
            {t.bookingForm.nameLabel}
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-secondary-text absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder={t.bookingForm.namePlaceholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-background border border-border-subtle rounded-btn text-sm text-primary-text focus:outline-none focus:border-accent-gold transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-primary-text uppercase tracking-wider mb-1.5">
            {t.bookingForm.phoneLabel}
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-secondary-text absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              placeholder={t.bookingForm.phonePlaceholder}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-background border border-border-subtle rounded-btn text-sm text-primary-text focus:outline-none focus:border-accent-gold transition-colors"
            />
          </div>
        </div>
      </div>

      {/* City & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-primary-text uppercase tracking-wider mb-1.5">
            {t.bookingForm.cityLabel}
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-secondary-text absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.bookingForm.cityPlaceholder}
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-background border border-border-subtle rounded-btn text-sm text-primary-text focus:outline-none focus:border-accent-gold transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-primary-text uppercase tracking-wider mb-1.5">
            {t.bookingForm.dateLabel}
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-secondary-text absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-background border border-border-subtle rounded-btn text-sm text-primary-text focus:outline-none focus:border-accent-gold transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Service & Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-primary-text uppercase tracking-wider mb-1.5">
            {t.bookingForm.serviceLabel}
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3 py-2.5 bg-background border border-border-subtle rounded-btn text-sm text-primary-text focus:outline-none focus:border-accent-gold transition-colors"
          >
            <option value="पिंडदान (Gaya Ji Pind Daan)">०१ संपूर्ण त्रिवेदी पिंडदान (Pind Daan)</option>
            <option value="त्रिपिंडी श्राद्ध (Tripindi Shraddha)">०२ त्रिपिंडी श्राद्ध (Tripindi Shraddha)</option>
            <option value="नारायण बलि (Narayan Bali)">०३ नारायण बलि विधान (Narayan Bali)</option>
            <option value="वार्षिक श्राद्ध (Annual Shraddha)">०४ वार्षिक श्राद्ध (Annual Shraddha)</option>
            <option value="सामान्य परामर्श (General Consultation)">सामान्य मार्गदर्शन / परामर्श</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-primary-text uppercase tracking-wider mb-1.5">
            {t.bookingForm.membersLabel}
          </label>
          <select
            value={formData.members}
            onChange={(e) => setFormData({ ...formData, members: e.target.value })}
            className="w-full px-3 py-2.5 bg-background border border-border-subtle rounded-btn text-sm text-primary-text focus:outline-none focus:border-accent-gold transition-colors"
          >
            <option value="1">केवल १ व्यक्ति (मुख्य कर्ता)</option>
            <option value="2-3">२ से ३ परिजन</option>
            <option value="4-6">४ से ६ परिजन</option>
            <option value="7+">७ से अधिक परिजन</option>
          </select>
        </div>
      </div>

      {/* Gotra & Notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-primary-text uppercase tracking-wider mb-1.5">
            {t.bookingForm.gotraLabel}
          </label>
          <input
            type="text"
            placeholder={t.bookingForm.gotraPlaceholder}
            value={formData.gotra}
            onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
            className="w-full px-3 py-2.5 bg-background border border-border-subtle rounded-btn text-sm text-primary-text focus:outline-none focus:border-accent-gold transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-primary-text uppercase tracking-wider mb-1.5">
            {t.bookingForm.notesLabel}
          </label>
          <input
            type="text"
            placeholder={t.bookingForm.notesPlaceholder}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3 py-2.5 bg-background border border-border-subtle rounded-btn text-sm text-primary-text focus:outline-none focus:border-accent-gold transition-colors"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 py-3.5 bg-accent-gold hover:bg-accent-goldDark text-white font-semibold text-sm rounded-btn transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t.bookingForm.submitBtn}</span>
        </button>
      </div>

      <p className="text-center text-[11px] text-secondary-text pt-1">
        {t.bookingForm.privacyNote}
      </p>
    </form>
  );
}
