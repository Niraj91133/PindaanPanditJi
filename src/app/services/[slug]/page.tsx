import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, MapPin, ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import BookingForm from "@/components/BookingForm";

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-secondary-text mb-6">
          <Link href="/" className="hover:text-accent-gold">
            होम
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-accent-gold">
            सेवाएं
          </Link>
          <span>/</span>
          <span className="text-primary-text font-medium">{service.title.hi}</span>
        </div>

        {/* Title and Intro */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2">
            <span>सेवा संख्या {service.number}</span>
            <span>·</span>
            <span>{service.englishTitle}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text mb-4">
            {service.title.hi} विधि एवं महात्म्य
          </h1>
          <p className="text-secondary-text text-base sm:text-lg leading-relaxed">
            {service.fullDesc.hi}
          </p>
        </div>

        {/* Main Grid: Content + Booking Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8">
            {/* Highlights */}
            <div className="bg-surface-light rounded-2xl p-7 sm:p-8 border border-border-subtle shadow-subtle">
              <h2 className="text-xl font-bold font-serif text-primary-text mb-4">
                यह विधि किसके लिए आवश्यक है?
              </h2>
              <p className="text-sm sm:text-base text-secondary-text leading-relaxed mb-6">
                {service.recommendedFor.hi}
              </p>

              <h3 className="text-sm font-semibold text-primary-text uppercase tracking-wider mb-3">
                विधि के मुख्य बिंदु:
              </h3>
              <div className="space-y-2.5">
                {service.keyPoints.hi.map((kp, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-primary-text">
                    <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                    <span>{kp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-surface-light rounded-2xl p-7 sm:p-8 border border-border-subtle shadow-subtle">
              <h2 className="text-xl font-bold font-serif text-primary-text mb-4">
                इस अनुष्ठान में क्या-क्या सम्मिलित है?
              </h2>
              <div className="space-y-3">
                {service.inclusions.hi.map((inc, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-primary-text">
                    <div className="w-5 h-5 rounded-full bg-accent-goldSoft flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-accent-gold font-bold">✓</span>
                    </div>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pandit Ji Personal Note */}
            <div className="border-l-2 border-accent-gold bg-surface-light rounded-r-2xl p-6 sm:p-7 border-y border-r border-border-subtle">
              <div className="text-xs uppercase tracking-wider text-accent-gold font-semibold mb-1">
                तीर्थ पुरोहित का संदेश
              </div>
              <p className="font-serif italic text-base text-primary-text mb-3 leading-relaxed">
                “{service.title.hi} एक अत्यंत सूक्ष्म और श्रद्धापूर्ण वैदिक अनुष्ठान है। हम सुनिश्चित करते हैं कि बिना किसी जल्दबाजी के, मंत्रोच्चार और गोत्र संकल्प के साथ यह संपन्न हो।”
              </p>
              <div className="text-xs font-semibold text-primary-text">
                — {siteConfig.pandit.name} ({siteConfig.pandit.title.hi})
              </div>
            </div>
          </div>

          {/* Right Sidebar Form & Contact */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-surface-light rounded-2xl p-6 sm:p-7 border border-border-subtle shadow-card">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-accent-gold font-semibold block">
                  सीधा परामर्श
                </span>
                <h3 className="text-xl font-bold font-serif text-primary-text">
                  {service.title.hi} हेतु संपर्क करें
                </h3>
                <p className="text-xs text-secondary-text mt-1">
                  अपनी तिथि और परिवार की जानकारी साझा करें, पं. आनंद कुमार गुपुत जी सीधे WhatsApp पर मार्गदर्शन देंगे।
                </p>
              </div>

              <BookingForm initialService={`${service.title.hi} (${service.englishTitle})`} />

              <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-secondary-text">
                <span>फोन पर बात करें:</span>
                <a
                  href={`tel:${siteConfig.whatsappNumber}`}
                  className="font-semibold text-primary-text hover:text-accent-gold"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
