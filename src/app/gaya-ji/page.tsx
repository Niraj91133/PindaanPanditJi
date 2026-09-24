import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Train, Plane, Car, Hotel, Compass, MapPin, Calendar, Clock } from "lucide-react";
import { sacredSites } from "@/data/gayaJiInfo";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "गया जी तीर्थ दर्शन एवं यात्रा गाइड | PindaanPanditJi",
  description:
    "गया जी तीर्थ का पौराणिक महात्म्य, विष्णुपद मंदिर, फल्गु नदी, अक्षयवट की जानकारी एवं कैसे पहुँचें - संपूर्ण यात्रा गाइड।",
};

export default function GayaJiPage() {
  const travelWays = [
    {
      icon: Train,
      title: "रेल मार्ग द्वारा (By Train)",
      desc: "गया जंक्शन (Gaya Jn - कोड: GAYA) देश के सभी प्रमुख नगरों (दिल्ली, कोलकाता, मुंबई, वाराणसी, लखनऊ, पटना आदि) से ग्रैंड कॉर्ड रेल मार्ग पर स्थित है। रेलवे स्टेशन से विष्णुपद मंदिर की दूरी मात्र ४.५ किलोमीटर है।",
    },
    {
      icon: Plane,
      title: "वायु मार्ग द्वारा (By Flight)",
      desc: "गया अंतर्राष्ट्रीय हवाई अड्डा (GAY) मुख्य शहर से १० किमी की दूरी पर है। इसके अतिरिक्त पटना का जयप्रकाश नारायण हवाई अड्डा (PAT) गया से लगभग १०० किमी दूरी पर है, जहाँ से नियमित टैक्सी और ट्रेन उपलब्ध हैं।",
    },
    {
      icon: Car,
      title: "सड़क मार्ग द्वारा (By Road)",
      desc: "गया जी राष्ट्रीय राजमार्ग NH-2 (Grand Trunk Road / Dobhi) से केवल ३० किमी दूरी पर स्थित है। पटना, वाराणसी, रांची, धनबाद और कोलकाता से उत्तम बसें और टैक्सियां संचालित हैं।",
    },
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
          <span className="text-primary-text font-medium">गया जी तीर्थ</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
            THE HOLY PILGRIMAGE OF GAYA JI
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text mb-4">
            गया जी तीर्थ एवं यात्रा मार्गदर्शन
          </h1>
          <p className="text-secondary-text text-base sm:text-lg leading-relaxed">
            सनातन संस्कृति में गया जी को 'पितृ मुक्ति तीर्थ' के रूप में सर्वश्रेष्ठ स्थान प्राप्त है। यहाँ की प्रमुख पावन वेदियों और पहुँचने के सुगम मार्गों की संपूर्ण जानकारी।
          </p>
        </div>

        {/* Sacred Sites List */}
        <div className="space-y-12 mb-16">
          {sacredSites.map((site, idx) => (
            <div
              key={site.id}
              id={site.id}
              className="bg-surface-light rounded-2xl border border-border-subtle p-7 sm:p-10 shadow-subtle scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border-subtle shadow-card">
                    <Image
                      src={site.image}
                      alt={site.hindiName}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-6 flex flex-col space-y-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider">
                    {site.name}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary-text">
                    {site.hindiName}
                  </h2>
                  <p className="text-xs text-accent-gold font-medium">
                    {site.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
                    {site.description}
                  </p>
                  <div className="pt-2 border-t border-border-subtle/80 text-xs text-primary-text">
                    <strong>महत्व:</strong> {site.significance}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Reach Guide */}
        <div className="bg-surface-light rounded-2xl border border-border-subtle p-8 sm:p-12 mb-16 shadow-subtle">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
              TRAVEL GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary-text">
              गया जी कैसे पहुँचें?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelWays.map((way, idx) => {
              const Icon = way.icon;
              return (
                <div key={idx} className="bg-background p-6 rounded-xl border border-border-subtle">
                  <div className="w-10 h-10 rounded-lg bg-accent-goldSoft flex items-center justify-center mb-4 text-accent-gold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-primary-text mb-2">
                    {way.title}
                  </h3>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    {way.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
