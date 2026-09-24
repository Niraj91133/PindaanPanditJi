import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openBookingModal(defaultService?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-booking-modal", {
        detail: { service: defaultService || "पिंडदान (Gaya Ji Pind Daan)" },
      })
    );
  }
}

export function getWhatsAppUrl(customText?: string) {
  const phone = "919835214789";
  const defaultText = "नमस्ते पंडित जी, मुझे गया जी में पिंडदान / श्राद्ध विधि के बारे में मार्गदर्शन चाहिए।";
  const message = encodeURIComponent(customText || defaultText);
  return `https://wa.me/${phone}?text=${message}`;
}
