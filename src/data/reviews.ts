export interface ReviewItem {
  id: string;
  quote: { hi: string; en: string; bn: string };
  author: { hi: string; en: string; bn: string };
  location: { hi: string; en: string; bn: string };
  ritualType: { hi: string; en: string; bn: string };
  date: string;
}

export const reviews: ReviewItem[] = [
  {
    id: "review-1",
    quote: {
      hi: "“Pandit Ji ने पूरी प्रक्रिया पहले ही समझा दी थी। गया पहुँचने के बाद हमें किसी चीज़ की चिंता नहीं करनी पड़ी। सब कुछ अत्यंत शांत और श्रद्धापूर्वक संपन्न हुआ।”",
      en: "“Pandit Ji explained the entire process beforehand. After reaching Gaya, we had nothing to worry about. Everything was performed peacefully with utmost devotion.”",
      bn: "“পণ্ডিত জী আগেই সম্পূর্ণ প্রক্রিয়াটি বুঝিয়ে দিয়েছিলেন। গয়া পৌঁছানোর পর আমাদের কোনো চিন্তা করতে হয়নি। সবকিছু অত্যন্ত শান্তিপূর্ণ ও ভক্তিভরে সম্পন্ন হয়েছে।”",
    },
    author: {
      hi: "राजेश कुमार",
      en: "Rajesh Kumar",
      bn: "রাজেশ কুমার",
    },
    location: {
      hi: "दिल्ली (Delhi)",
      en: "New Delhi",
      bn: "নয়াদিল্লি",
    },
    ritualType: {
      hi: "त्रिवेदी पिंडदान",
      en: "Trivedi Pind Daan",
      bn: "ত্রিবেদী পিণ্ডদান",
    },
    date: "October 2026",
  },
  {
    id: "review-2",
    quote: {
      hi: "“पूरी प्रक्रिया बहुत शांत और व्यवस्थित रही। Pandit Ji ने हर मंत्र और हर चरण का अर्थ हमें समझाया। दक्षिणा भी पहले से स्पष्ट थी।”",
      en: "“The entire ritual was extremely peaceful and organized. Pandit Ji explained the meaning of each mantra and step. Dakshina was transparent from the start.”",
      bn: "“সম্পূর্ণ প্রক্রিয়াটি অত্যন্ত শান্ত ও সুশৃঙ্খল ছিল। পণ্ডিত জী প্রতিটি মন্ত্র ও প্রতিটি ধাপের অর্থ বুঝিয়ে দিয়েছেন। দক্ষিণা আগেই স্পষ্ট ছিল।”",
    },
    author: {
      hi: "অমিত শর্মা / अमित शर्मा",
      en: "Amit Sharma",
      bn: "অমিত শর্মা",
    },
    location: {
      hi: "कोलकाता / Bengaluru",
      en: "Kolkata / Bengaluru",
      bn: "কলকাতা / বেঙ্গালুরু",
    },
    ritualType: {
      hi: "त्रिपिंडी श्राद्ध",
      en: "Tripindi Shraddha",
      bn: "ত্রিপিন্ডী শ্রাদ্ধ",
    },
    date: "November 2026",
  },
  {
    id: "review-3",
    quote: {
      hi: "“हम पहली बार गया जी आए थे और मन में बहुत संकोच था। पंडित जी के व्यक्तिगत मार्गदर्शन ने हमें बहुत संबल दिया। पूर्वजों की शांति का सच्चा संतोष मिला।”",
      en: "“We visited Gaya Ji for the very first time with much hesitation. Pandit Ji’s personal guidance gave us immense comfort and ancestral peace.”",
      bn: "“আমরা প্রথমবারের মতো গয়া জী এসেছিলাম এবং মনে দ্বিধা ছিল। পণ্ডিত জীর ব্যক্তিগত নির্দেশনা আমাদের গভীর শান্তি ও পিতৃপুরুষদের তৃপ্তির সন্তুষ্টি দিয়েছে।”",
    },
    author: {
      hi: "सुरेश नारायण जोशी",
      en: "Suresh Narayan Joshi",
      bn: "সুরেশ নারায়ণ যোশী",
    },
    location: {
      hi: "मुंबई (Mumbai)",
      en: "Mumbai",
      bn: "মুম্বাই",
    },
    ritualType: {
      hi: "वार्षिक पिंडदान एवं तर्पण",
      en: "Annual Pind Daan & Tarpan",
      bn: "বার্ষিক পিণ্ডদান ও তর্পণ",
    },
    date: "December 2026",
  },
];
