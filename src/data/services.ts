export interface LocalizedString {
  hi: string;
  en: string;
  bn: string;
}

export interface ServiceItem {
  number: string;
  slug: string;
  title: LocalizedString;
  englishTitle: string;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  duration: LocalizedString;
  locations: string[];
  keyPoints: { hi: string[]; en: string[]; bn: string[] };
  recommendedFor: LocalizedString;
  inclusions: { hi: string[]; en: string[]; bn: string[] };
}

export const services: ServiceItem[] = [
  {
    number: "01",
    slug: "pind-daan",
    englishTitle: "Gaya Ji Pind Daan",
    title: {
      hi: "पिंडदान",
      en: "Gaya Ji Pind Daan",
      bn: "পিণ্ডদান",
    },
    shortDesc: {
      hi: "गया जी में पूर्वजों के लिए पारंपरिक पिंडदान विधि।",
      en: "Traditional Vedic Pind Daan ritual for ancestors in Gaya Ji.",
      bn: "গয়া জী-তে পূর্বপুরুষদের জন্য ঐতিহ্যবাহী পিণ্ডদান বিধি।",
    },
    fullDesc: {
      hi: "गया जी में फल्गु नदी, विष्णुपद मंदिर एवं अक्षयवट की त्रिवेदी पर शास्त्रोक्त विधि से पिंडदान व तर्पण कर्म। इससे पितरों को मोक्ष और परिवार को शांति प्राप्त होती है।",
      en: "Complete Vedic Pind Daan and Tarpan on the holy Trivedi: Falgu River, Vishnupad Temple, and Akshayavat Dham, granting salvation to ancestors and peace to the family.",
      bn: "গয়া জী-তে ফল্গু নদী, বিষ্ণুপাদ মন্দির ও অক্ষয়বটের ত্রিবেদীতে শাস্ত্রীয় নিয়মে পিণ্ডদান ও তর্পণ কর্ম, যা পিতৃপুরুষদের মোক্ষ ও পরিবারকে শান্তি প্রদান করে।",
    },
    duration: {
      hi: "१ दिन (लगभग ३–४ घंटे) अथवा ३ दिवसीय विधान",
      en: "1 Day (Approx. 3–4 Hours) or 3-Day Ritual",
      bn: "১ দিন (প্রায় ৩–৪ ঘণ্টা) অথবা ৩ দিনের বিধান",
    },
    locations: ["फल्गु नदी घाट", "विष्णुपद मंदिर प्रांगण", "अक्षयवट धाम"],
    keyPoints: {
      hi: [
        "शास्त्रोक्त संकल्प व पितृ आह्वान",
        "जौ, तिल, कुशा व दुग्ध से शुद्ध पिंड निर्माण",
        "विष्णु चरण दर्शन व अक्षयवट पर सुफल",
      ],
      en: [
        "Scriptural Sankalp and ancestral invocation",
        "Pure Pind preparation with barley, sesame, kusha, and milk",
        "Vishnu footprint darshan and Akshayavat Sufal blessing",
      ],
      bn: [
        "শাস্ত্রীয় সংকল্প ও পিতৃ আহ্বান",
        "যব, তিল, কুশ ও দুধ দিয়ে পবিত্র পিণ্ড নির্মাণ",
        "বিষ্ণুপাদ দর্শন ও অক্ষয়বটে সুফল গ্রহণ",
      ],
    },
    recommendedFor: {
      hi: "माता-पिता, पूर्वजों एवं समस्त ज्ञात-अज्ञात कुल पितरों की सद्गति हेतु।",
      en: "For the spiritual salvation of parents, grandparents, and all known/unknown ancestors.",
      bn: "পিতা-মাতা, পূর্বপুরুষ ও সমস্ত জ্ঞাত-অজ্ঞাত পিতৃপুরুষদের মুক্তির উদ্দেশ্যে।",
    },
    inclusions: {
      hi: [
        "पं. आनंद कुमार गुपुत जी का संपूर्ण वैदिक मार्गदर्शन",
        "संपूर्ण शुद्ध पूजा सामग्री (जौ, तिल, कुशा, पात्र, फूल)",
        "तीनों मुख्य वेदियों पर संकल्प व विधि",
        "अक्षयवट सुफल दक्षिणा मार्गदर्शन",
      ],
      en: [
        "Complete Vedic guidance by Pt. Anand Kumar Guput",
        "All pure Puja Samagri (barley flour, sesame, kusha, vessels, flowers)",
        "Sankalp and ritual across all three sacred Vedis",
        "Akshayavat Sufal Dakshina guidance",
      ],
      bn: [
        "পন্ডিত আনন্দ কুমার গুপ্ত জীর সম্পূর্ণ বৈদিক নির্দেশনা",
        "সমস্ত শুদ্ধ পূজা সামগ্রী (যব, তিল, কুশ, তামার পাত্র, ফুল)",
        "তিনটি প্রধান বেদীতে সংকল্প ও বিধি",
        "অক্ষয়বট সুফল দক্ষিণা নির্দেশনা",
      ],
    },
  },
  {
    number: "02",
    slug: "tripindi-shraddha",
    englishTitle: "Tripindi Shraddha",
    title: {
      hi: "त्रिपिंडी श्राद्ध",
      en: "Tripindi Shraddha",
      bn: "ত্রিপিন্ডী শ্রাদ্ধ",
    },
    shortDesc: {
      hi: "परंपरागत विधि के अनुसार विशेष पितृ कर्म।",
      en: "Special Vedic ritual to alleviate Pitru Dosha across generations.",
      bn: "বংশ পরম্পরায় পিতৃ দোষ শান্তির বিশেষ বৈদিক পূজা।",
    },
    fullDesc: {
      hi: "यदि किसी कारणवश तीन पीढ़ियों से अधिक समय से वार्षिक श्राद्ध छूट गया हो, या पितृ दोष की शांति अभीष्ट हो, तो सात्विक, राजसिक एवं तामसिक तीनों प्रकार के पितरों की तृप्ति के लिए त्रिपिंडी श्राद्ध किया जाता है।",
      en: "If annual shraddha has been missed for generations, or to pacify severe Pitru Dosha, Tripindi Shraddha is performed to satisfy Sattvik, Rajasik, and Tamasik ancestral spirits.",
      bn: "যদি কোনো কারণে দীর্ঘ সময় শ্রাদ্ধ না হয়ে থাকে, বা পিতৃ দোষের শান্তি কাম্য হয়, তবে সাত্ত্বিক, রাজসিক ও তামসিক তিন প্রকার পিতৃপুরুষদের তৃপ্তির জন্য ত্রিপিন্ডী শ্রাদ্ধ করা হয়।",
    },
    duration: {
      hi: "२.५ से ३ घंटे",
      en: "2.5 to 3 Hours",
      bn: "২.৫ থেকে ৩ ঘণ্টা",
    },
    locations: ["गया जी तीर्थ वेदी"],
    keyPoints: {
      hi: [
        "ब्रह्मा, विष्णु, महेश तीनों देवों का आह्वान",
        "सत्व, रज, तम दोषों का निवारण",
        "वंश वृद्धि एवं पारिवारिक सुख-शांति",
      ],
      en: [
        "Invocation of Brahma, Vishnu, and Mahesh",
        "Alleviation of Sattva, Rajas, and Tamas afflictions",
        "Lineage prosperity and familial peace",
      ],
      bn: [
        "ব্রহ্মা, বিষ্ণু ও মহেশ্বর ত্রয়ী দেবতার আহ্বান",
        "সত্ত্ব, রজ ও তম দোষ নিবারণ",
        "বংশ বৃদ্ধি ও পারিবারিক সুখ-শান্তি",
      ],
    },
    recommendedFor: {
      hi: "जिनके परिवार में पितृ दोष हो, बार-बार रुकावटें आ रही हों, या श्राद्ध छूट गए हों।",
      en: "Families experiencing persistent obstacles, health/career delays, or missed ancestral rituals.",
      bn: "যাদের পরিবারে পিতৃ দোষ বা বাধা-বিঘ্ন রয়েছে, অথবা অতীতে শ্রাদ্ধকর্ম বাদ গেছে।",
    },
    inclusions: {
      hi: [
        "त्रिपिंडी कलश स्थापन व वैदिक मंत्रोच्चार",
        "विशेष तर्पण एवं पिंड विसर्जन",
        "पूरी पूजा सामग्री व दक्षिणा विवरण",
      ],
      en: [
        "Tripindi Kalash Sthapana & Vedic chants",
        "Special Tarpan and Pind Visarjan",
        "Complete sacred samagri and transparent dakshina",
      ],
      bn: [
        "ত্রিপিন্ডী ঘট স্থাপন ও বৈদিক মন্ত্রোচ্চারণ",
        "বিশেষ তর্পণ ও পিণ্ড বিসর্জন",
        "সম্পূর্ণ পূজা সামগ্রী ও স্পষ্ট দক্ষিণা বিবরণ",
      ],
    },
  },
  {
    number: "03",
    slug: "narayan-bali",
    englishTitle: "Narayan Bali",
    title: {
      hi: "नारायण बलि",
      en: "Narayan Bali",
      bn: "নারায়ণ বলি",
    },
    shortDesc: {
      hi: "विशेष परिस्थितियों में की जाने वाली वैदिक विधि।",
      en: "Special scriptural Vedic ritual for unnatural deaths and troubled souls.",
      bn: "অকাল মৃত্যু বা বিশেষ পরিস্থিতিতে শাস্ত্রীয় বৈদিক বিধি।",
    },
    fullDesc: {
      hi: "अकाल मृत्यु, दुर्घटना या अप्राकृतिक मृत्यु से दिवंगत आत्माओं की शांति और मोक्ष हेतु नारायण बलि विधान गरुड़ पुराण के अनुसार अत्यंत फलदायी माना गया है।",
      en: "Prescribed in the Garuda Purana, Narayan Bali is performed for souls that passed away untimely or unnaturally, liberating them into divine peace.",
      bn: "অকাল মৃত্যু, দুর্ঘটনা বা অস্বাভাবিক মৃত্যুর কারণে অতৃপ্ত আত্মাদের পরম শান্তি ও মোক্ষের জন্য গরুড় পুরাণ অনুসারে নারায়ণ বলি অত্যন্ত ফলদায়ী।",
    },
    duration: {
      hi: "१ विशेष दिवस (३–४ घंटे)",
      en: "1 Sacred Session (3–4 Hours)",
      bn: "১টি বিশেষ অধিবেশন (৩–৪ ঘণ্টা)",
    },
    locations: ["गया जी पवित्र वेदी"],
    keyPoints: {
      hi: [
        "भगवान श्री नारायण का विशेष पूजन",
        "अतृप्त आत्माओं की सद्गति व मुक्ति",
        "पितृ ऋण से पूर्ण मुक्ति का संकल्प",
      ],
      en: [
        "Special Maha Puja of Lord Narayana",
        "Liberation and peace for departed souls",
        "Complete resolution of ancestral debts",
      ],
      bn: [
        "ভগবান শ্রী নারায়ণের বিশেষ পূজা",
        "অতৃপ্ত আত্মাদের সদগতি ও মুক্তি",
        "পিতৃ ঋণ থেকে সম্পূর্ণ মুক্তির সংকল্প",
      ],
    },
    recommendedFor: {
      hi: "अकाल मृत्यु, आकस्मिक वियोग अथवा विशेष पितृ बाधा निवारण हेतु।",
      en: "Untimely demise, accidental loss, or lingering ancestral distress.",
      bn: "অকাল মৃত্যু, আকস্মিক শোক বা বিশেষ পিতৃ বাধা নিবারণের জন্য।",
    },
    inclusions: {
      hi: [
        "नारायण महापूजा व विशेष पिंडदान",
        "वैदिक शांति पाठ एवं आहुति",
        "व्यक्तिगत विधि देखरेख",
      ],
      en: [
        "Narayana Maha Puja & sacred offerings",
        "Vedic Shanti Path and Ahuti",
        "Direct personal ritual supervision",
      ],
      bn: [
        "নারায়ণ মহাপূজা ও বিশেষ পিণ্ডদান",
        "বৈদিক শান্তি পাঠ ও আহুতি",
        "সরাসরি ব্যক্তিগত তত্ত্বাবধান",
      ],
    },
  },
  {
    number: "04",
    slug: "annual-shraddha",
    englishTitle: "Annual Shraddha",
    title: {
      hi: "वार्षिक श्राद्ध",
      en: "Annual Shraddha",
      bn: "বার্ষিক শ্রাদ্ধ",
    },
    shortDesc: {
      hi: "तिथि के अनुसार वार्षिक पितृ कर्म।",
      en: "Annual ancestral homage performed on the precise lunar tithi.",
      bn: "তিথি অনুসারে বার্ষিক পিতৃ তর্পণ ও শ্রাদ্ধ কর্ম।",
    },
    fullDesc: {
      hi: "माता-पिता अथवा परिजनों की पुण्यतिथि (तिथि अनुसार) पर गया जी के पवित्र तीर्थ पर किया जाने वाला वार्षिक श्राद्ध। इसमें तर्पण, ब्राह्मण भोजन संकल्प व पिंडदान शामिल है।",
      en: "Annual Shraddha performed on the tithi (death anniversary) of departed parents or elders at the holy Vishnupad pilgrimage, offering tarpan and sacred pindas.",
      bn: "পিতা-মাতা বা আত্মীয়দের বাৎসরিক তিথিতে গয়া জীর পুণ্য তীর্থে বাৎসরিক শ্রাদ্ধ, তর্পণ ও পিণ্ডদান।",
    },
    duration: {
      hi: "२ घंटे",
      en: "2 Hours",
      bn: "২ ঘণ্টা",
    },
    locations: ["विष्णुपद तीर्थ"],
    keyPoints: {
      hi: [
        "तिथि अनुसार सटीक संकल्प",
        "पारंपरिक तर्पण व हव्य-कव्य अर्पण",
        "पितरों के प्रति कृतज्ञता समर्पण",
      ],
      en: [
        "Precise Tithi-based scriptural Sankalp",
        "Traditional Tarpan & sacred offerings",
        "Expressions of lifelong gratitude to ancestors",
      ],
      bn: [
        "তিথি অনুসারে সঠিক শাস্ত্রীয় সংকল্প",
        "ঐতিহ্যবাহী তর্পণ ও অর্ঘ্য নিবেদন",
        "পূর্বপুরুষদের প্রতি পরম কৃতজ্ঞতা জ্ঞাপন",
      ],
    },
    recommendedFor: {
      hi: "प्रतिवर्ष पुण्यतिथि पर पूर्वजों के स्मरण व कृतज्ञता अर्पण हेतु।",
      en: "Yearly commemoration and gratitude on ancestral death anniversaries.",
      bn: "প্রতি বছর বাৎসরিক তিথিতে পূর্বপুরুষদের স্মরণ ও শ্রদ্ধাঞ্জলি নিবেদনের জন্য।",
    },
    inclusions: {
      hi: [
        "वैदिक श्राद्ध कर्म व संकल्प",
        "यज्ञोपवीत व तर्पण सामग्री",
        "ब्राह्मण भोजन व्यवस्था मार्गदर्शन",
      ],
      en: [
        "Vedic Shraddha ceremony & Sankalp",
        "Yajnopavita & Tarpan sacred samagri",
        "Brahmana Bhojana arrangement guidance",
      ],
      bn: [
        "বৈদিক শ্রাদ্ধ কর্ম ও সংকল্প",
        "পৈতে ও তর্পণ সামগ্রী",
        "ব্রাহ্মণ ভোজন ব্যবস্থার নির্দেশনা",
      ],
    },
  },
];
