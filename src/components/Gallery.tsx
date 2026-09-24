"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    {
      src: "/images/ritual.jpg",
      title: t.gallery.photo1,
      caption: t.gallery.photo1Sub,
    },
    {
      src: "/images/pandit-ji.jpg",
      title: t.gallery.photo2,
      caption: t.gallery.photo2Sub,
    },
    {
      src: "/images/vishnupad.jpg",
      title: t.gallery.photo3,
      caption: t.gallery.photo3Sub,
    },
    {
      src: "/images/family.jpg",
      title: t.gallery.photo4,
      caption: t.gallery.photo4Sub,
    },
  ];

  return (
    <section className="section-spacing bg-surface-light border-y border-border-subtle">
      <div className="container-custom">
        {/* Heading */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
            {t.gallery.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-primary-text mb-3">
            {t.gallery.heading}
          </h2>
          <p className="text-secondary-text text-sm sm:text-base">
            {t.gallery.desc}
          </p>
        </div>

        {/* 2x2 Clean Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle shadow-card bg-background"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="font-serif text-base font-bold">
                  {item.title}
                </div>
                <div className="text-xs text-white/80 mt-0.5">
                  {item.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
