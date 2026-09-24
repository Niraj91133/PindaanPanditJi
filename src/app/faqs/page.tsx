import React from "react";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: "गया जी पिंडदान प्रश्नोत्तरी (FAQ) | PindaanPanditJi",
  description:
    "गया जी में पिंडदान, विधि, दक्षिणा, अवधि, गोत्र, तैयारी एवं व्यवस्था से जुड़े सभी महत्वपूर्ण प्रश्नों के सरल एवं प्रामाणिक उत्तर।",
};

export default function FAQsPage() {
  return (
    <div className="bg-background min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-secondary-text mb-6">
          <Link href="/" className="hover:text-accent-gold">
            होम
          </Link>
          <span>/</span>
          <span className="text-primary-text font-medium">प्रश्नोत्तरी (FAQ)</span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
            CLARITY & GUIDANCE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text mb-4">
            अक्सर पूछे जाने वाले प्रश्न
          </h1>
          <p className="text-secondary-text text-base sm:text-lg leading-relaxed">
            गया जी में पिंडदान व श्राद्ध के संबंध में श्रद्धालुओं के मन में आने वाली सभी शंकाओं का समाधान।
          </p>
        </div>

        <FAQAccordion />

      </div>
    </div>
  );
}
