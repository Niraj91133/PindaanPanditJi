"use client";

import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <section className="section-spacing bg-background" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <div>
            <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
              {t.servicesSection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-text">
              {t.servicesSection.heading}
            </h2>
          </div>
          <p className="text-secondary-text text-sm sm:text-base max-w-md mt-4 md:mt-0">
            {t.servicesSection.subheading}
          </p>
        </div>

        {/* 4 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-sm font-medium text-secondary-text hover:text-primary-text transition-colors"
          >
            <span>{t.servicesSection.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
