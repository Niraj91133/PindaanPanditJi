export type Language = "hi" | "en" | "bn";

export interface Translations {
  header: {
    tagline: string;
    pindDaan: string;
    services: string;
    panditJi: string;
    gayaJi: string;
    faqs: string;
    contact: string;
    admin: string;
    whatsappPandit: string;
    bookNow: string;
  };
  hero: {
    eyebrow: string;
    h1Line1: string;
    h1Line2: string;
    desc: string;
    bookBtn: string;
    talkBtn: string;
    trustBadge: string;
    panditCaptionTitle: string;
    panditName: string;
    panditLineage: string;
  };
  trustBar: {
    directPandit: { title: string; subtitle: string };
    clearDakshina: { title: string; subtitle: string };
    personalGuidance: { title: string; subtitle: string };
    pujaSamagri: { title: string; subtitle: string };
  };
  intro: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    paragraph: string;
    learnMoreLink: string;
  };
  servicesSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    learnMore: string;
    viewAll: string;
  };
  featuredPackage: {
    eyebrow: string;
    title: string;
    desc: string;
    note: string;
    trivedi: string;
    cta: string;
    inclusionsTitle: string;
    inclusions: string[];
  };
  panditSection: {
    eyebrow: string;
    name: string;
    title: string;
    quote: string;
    learnMore: string;
    directTalk: string;
    fact1Label: string;
    fact1Val: string;
    fact2Label: string;
    fact2Val: string;
    fact3Label: string;
    fact3Val: string;
  };
  whyUs: {
    eyebrow: string;
    heading: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  gayaSection: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    desc: string;
    vishnupadTitle: string;
    vishnupadDesc: string;
    falguTitle: string;
    falguDesc: string;
    akshayavatTitle: string;
    akshayavatDesc: string;
    travelGuideLink: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    desc: string;
    photo1: string;
    photo1Sub: string;
    photo2: string;
    photo2Sub: string;
    photo3: string;
    photo3Sub: string;
    photo4: string;
    photo4Sub: string;
  };
  reviews: {
    eyebrow: string;
    heading: string;
  };
  faqs: {
    eyebrow: string;
    heading: string;
    desc: string;
    moreQuestions: string;
    askOnWhatsApp: string;
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    desc: string;
    whatsappBtn: string;
    callBtn: string;
    bookBtn: string;
    footerNote: string;
  };
  footer: {
    desc: string;
    purohitTitle: string;
    quickLinks: string;
    vedicServices: string;
    contactInfo: string;
    rights: string;
    terms: string;
    privacy: string;
  };
  mobileBar: {
    callPandit: string;
    whatsappPandit: string;
  };
  bookingForm: {
    modalEyebrow: string;
    modalTitle: string;
    modalSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    dateLabel: string;
    serviceLabel: string;
    membersLabel: string;
    gotraLabel: string;
    gotraPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    privacyNote: string;
    successTitle: string;
    successDesc: string;
    newFormBtn: string;
  };
}

export const translations: Record<Language, Translations> = {
  hi: {
    header: {
      tagline: "Gaya Ji · Pind Daan & Shraddha",
      pindDaan: "पिंडदान विधि",
      services: "पितृ सेवाएं",
      panditJi: "पंडित जी",
      gayaJi: "गया जी तीर्थ",
      faqs: "प्रश्नोत्तरी (FAQ)",
      contact: "संपर्क",
      admin: "एडमिन पोर्टल",
      whatsappPandit: "WhatsApp Pandit Ji",
      bookNow: "Book Pind Daan",
    },
    hero: {
      eyebrow: "GAYA JI · PIND DAAN & SHRADDHA",
      h1Line1: "गया जी में पिंडदान",
      h1Line2: "पूरी श्रद्धा के साथ।",
      desc: "अपने पूर्वजों के लिए गया जी में पिंडदान की पूरी विधि, एक अनुभवी तीर्थ पुरोहित पं. आनंद कुमार गुपुत जी के व्यक्तिगत मार्गदर्शन में।",
      bookBtn: "पिंडदान बुक करें",
      talkBtn: "पंडित जी से बात करें",
      trustBadge: "सीधे पंडित जी से बात · कोई बिचौलिया नहीं (No Middlemen)",
      panditCaptionTitle: "गया जी तीर्थ पुरोहित",
      panditName: "पं. आनंद कुमार गुपुत",
      panditLineage: "प्राचीन गया जी तीर्थ पुरोहित परंपरा",
    },
    trustBar: {
      directPandit: { title: "Direct Pandit Ji", subtitle: "सीधे पंडित जी से संपर्क" },
      clearDakshina: { title: "Clear Dakshina", subtitle: "पारदर्शी व पूर्व निर्धारित दक्षिणा" },
      personalGuidance: { title: "Personal Guidance", subtitle: "व्यक्तिगत संपूर्ण मार्गदर्शन" },
      pujaSamagri: { title: "Puja Samagri Included", subtitle: "संपूर्ण पूजा सामग्री सम्मिलित" },
    },
    intro: {
      eyebrow: "एक सरल शुरुआत",
      h2Line1: "पिंडदान की शुरुआत",
      h2Line2: "सही मार्गदर्शन से होती है।",
      paragraph: "गया जी में पिंडदान एक अत्यंत महत्वपूर्ण सनातन धार्मिक परंपरा है। पहली बार आने वाले परिवारों के लिए विधि, तिथि, स्थान और आवश्यक तैयारी को समझना सरल नहीं होता। PindaanPanditJi का उद्देश्य इस पूरी पावन प्रक्रिया को सरल, स्पष्ट, पारदर्शी और व्यक्तिगत बनाना है।",
      learnMoreLink: "पिंडदान विधि के बारे में विस्तार से जानें",
    },
    servicesSection: {
      eyebrow: "आपकी आवश्यकता के अनुसार",
      heading: "पितृ कर्म की विधि",
      subheading: "शास्त्रसम्मत वैदिक परंपराओं के अनुसार प्रत्येक परिवार की विशेष स्थिति के अनुरूप पूर्ण प्रामाणिक अनुष्ठान।",
      learnMore: "विधि जानें",
      viewAll: "सभी वैदिक अनुष्ठानों का विवरण देखें",
    },
    featuredPackage: {
      eyebrow: "PIND DAAN · GAYA JI",
      title: "एक पूरी तरह guided Pind Daan journey",
      desc: "आपकी तिथि और परिवार की आवश्यकता के अनुसार पंडित जी पूरी प्रक्रिया समझाते हैं और गया जी में आवश्यक विधि में व्यक्तिगत रूप से मार्गदर्शन करते हैं।",
      note: "तिथि, परिजनों की संख्या और विशेष संकल्प के आधार पर पूर्व निर्धारित स्पष्ट विवरण। कोई छिपा हुआ शुल्क नहीं।",
      trivedi: "संपूर्ण त्रिवेदी पिंडदान",
      cta: "बुकिंग के लिए बात करें",
      inclusionsTitle: "पारदर्शी दक्षिणा विवरण",
      inclusions: [
        "पं. आनंद कुमार गुपुत जी का व्यक्तिगत वैदिक मार्गदर्शन",
        "संपूर्ण शुद्ध पूजा सामग्री (जौ का आटा, तिल, कुशा, रोली, धूप, दीप, पात्र)",
        "फल्गु नदी घाट पर तर्पण एवं प्रथम संकल्प विधि",
        "विष्णुपद मंदिर प्रांगण में चरण दर्शन व मुख्य पिंडदान",
        "अक्षयवट धाम पर अक्षय तृप्ति संकल्प व सुफल विधि",
      ],
    },
    panditSection: {
      eyebrow: "YOUR PANDIT JI",
      name: "पं. आनंद कुमार गुपुत",
      title: "गया जी तीर्थ पुरोहित · प्राचीन परंपरा",
      quote: "“हर परिवार के लिए पिंडदान केवल एक विधि नहीं, बल्कि अपने पूर्वजों के प्रति श्रद्धा का पावन अवसर है। मेरा सतत प्रयास रहता है कि परिवार को पूरी प्रक्रिया पहले से समझ आए और पूजा पूर्ण शांति, शुद्धता एवं श्रद्धापूर्वक संपन्न हो।”",
      learnMore: "पंडित जी के बारे में और जानें",
      directTalk: "सीधे बात करें",
      fact1Label: "परंपरा",
      fact1Val: "गया जी तीर्थ पुरोहित",
      fact2Label: "स्थान",
      fact2Val: "विष्णुपद, गया जी",
      fact3Label: "विशेषज्ञता",
      fact3Val: "पिंडदान · श्राद्ध · पितृ कर्म",
    },
    whyUs: {
      eyebrow: "हमारा दृष्टिकोण",
      heading: "क्यों PindaanPanditJi?",
      point1Title: "एक ही पंडित जी",
      point1Desc: "आपको अलग-अलग पंडितों या बिचौलियों में से चुनने या भटकने की जरूरत नहीं। पूरी व्यवस्था सीधे पं. आनंद कुमार गुपुत जी के अधीन होती है।",
      point2Title: "पहले से स्पष्ट जानकारी",
      point2Desc: "विधि, आवश्यक सामग्री, तिथि, तैयारी और दक्षिणा की समस्त जानकारी आने से पहले ही स्पष्ट रूप से साझा की जाती है।",
      point3Title: "व्यक्तिगत मार्गदर्शन",
      point3Desc: "आपके परिवार के गोत्र, परिस्थिति और समय के अनुसार सीधे पंडित जी से व्यक्तिगत रूप से बात करके निश्चिंत होकर आएं।",
    },
    process: {
      eyebrow: "सरल एवं सुव्यवस्थित प्रक्रिया",
      heading: "आपकी यात्रा, चार सरल चरणों में",
      step1Title: "बात करें",
      step1Desc: "पंडित जी से फोन या WhatsApp पर अपनी तिथि व परिवार की स्थिति साझा करें।",
      step2Title: "विधि समझें",
      step2Desc: "पिंडदान की आवश्यक तैयारी, गोत्र विवरण और दक्षिणा की पूर्व जानकारी प्राप्त करें।",
      step3Title: "गया जी आएँ",
      step3Desc: "निश्चिंत होकर गया जी पहुँचें, जहाँ पूर्व निर्धारित समय पर व्यवस्था तैयार रहेगी।",
      step4Title: "पिंडदान संपन्न करें",
      step4Desc: "पं. आनंद कुमार गुपुत जी के सान्निध्य में श्रद्धापूर्वक संपूर्ण त्रिवेदी अनुष्ठान पूर्ण करें।",
    },
    gayaSection: {
      eyebrow: "GAYA JI · THE SACRED TIRTHA",
      h2Line1: "गया जी क्यों",
      h2Line2: "महत्वपूर्ण है?",
      desc: "गया जी को सनातन परंपरा में पितृ कर्म के सर्वोपरि महातीर्थ के रूप में प्रतिष्ठा प्राप्त है। गरुड़ पुराण एवं वायु पुराण के अनुसार, यहाँ किए गए पिंडदान और तर्पण से इक्कीस पीढ़ियों के पितृ तृप्त होकर मोक्ष गति प्राप्त करते हैं।",
      vishnupadTitle: "विष्णुपद मंदिर",
      vishnupadDesc: "भगवान श्री विष्णु के साक्षात पदचिह्न जहाँ पिंडदान से पितरों को मोक्ष मिलता है।",
      falguTitle: "पवित्र फल्गु नदी",
      falguDesc: "माता सीता द्वारा बालू से पिंडदान की पावन अंतःसलिला नदी व आदि तीर्थ घाट।",
      akshayavatTitle: "अक्षयवट धाम",
      akshayavatDesc: "अमर वटवृक्ष जहाँ पितरों को अक्षय तृप्ति और सुफल का आशीर्वाद प्राप्त होता है।",
      travelGuideLink: "गया जी यात्रा गाइड व पहुँचने का मार्ग देखें",
    },
    gallery: {
      eyebrow: "प्रामाणिक अनुष्ठान",
      heading: "कुछ वास्तविक क्षण",
      desc: "गया जी में पं. आनंद कुमार गुपुत जी के साथ संपन्न हुई पिंडदान विधि के कुछ पावन एवं शांत क्षण।",
      photo1: "शास्त्रोक्त सामग्री एवं पिंड निर्माण",
      photo1Sub: "जौ, तिल, कुशा व शुद्ध गंगाजल से निर्मित पावन पिंड",
      photo2: "पं. आनंद कुमार गुपुत जी",
      photo2Sub: "पवित्र तीर्थ वेदी पर व्यक्तिगत मार्गदर्शन",
      photo3: "विष्णुपद मंदिर व फल्गु घाट",
      photo3Sub: "प्रातःकालीन पावन बेला में तीर्थ दर्शन",
      photo4: "श्रद्धापूर्वक संपन्न अनुष्ठान",
      photo4Sub: "परिवारों द्वारा शांति एवं पूर्ण कृतज्ञता से पितृ तर्पण",
    },
    reviews: {
      eyebrow: "अनुभव एवं विश्वास",
      heading: "परिवारों के अनुभव",
    },
    faqs: {
      eyebrow: "स्पष्टता एवं समाधान",
      heading: "अक्सर पूछे जाने वाले प्रश्न",
      desc: "गया जी में पिंडदान, विधि, दक्षिणा एवं व्यवस्था से जुड़े आवश्यक प्रश्न।",
      moreQuestions: "क्या आपका कोई अन्य प्रश्न है जिसका उत्तर यहाँ नहीं मिला?",
      askOnWhatsApp: "सीधे पंडित जी से WhatsApp पर पूछें →",
    },
    finalCta: {
      eyebrow: "पवित्र संकल्प",
      heading: "अपने पितरों के लिए गया जी आएँ।",
      desc: "पिंडदान की विधि, शुभ तिथि और अपनी यात्रा के बारे में सीधे पं. आनंद कुमार गुपुत जी से बात करें और निश्चिंत होकर पधारें।",
      whatsappBtn: "WhatsApp Pandit Ji",
      callBtn: "Call Pandit Ji",
      bookBtn: "ऑनलाइन फॉर्म भरें",
      footerNote: "पं. आनंद कुमार गुपुत · विष्णुपद मंदिर मार्ग, गया जी",
    },
    footer: {
      desc: "एक पंडित जी। एक परंपरा। आपके परिवार के लिए पूरी श्रद्धा के साथ। गया जी तीर्थ पुरोहित पं. आनंद कुमार गुपुत जी का व्यक्तिगत वैदिक सान्निध्य।",
      purohitTitle: "तीर्थ पुरोहित:",
      quickLinks: "मुख्य पृष्ठ",
      vedicServices: "वैदिक सेवाएं",
      contactInfo: "सीधा संपर्क (Gaya Ji)",
      rights: "सर्वाधिकार सुरक्षित।",
      terms: "नियम एवं शर्तें",
      privacy: "गोपनीयता नीति",
    },
    mobileBar: {
      callPandit: "Call Pandit Ji",
      whatsappPandit: "WhatsApp Pandit Ji",
    },
    bookingForm: {
      modalEyebrow: "GAYA JI PIND DAAN CONSULTATION",
      modalTitle: "पिंडदान व पूजा परामर्श",
      modalSubtitle: "सीधे तीर्थ पुरोहित पं. आनंद कुमार गुपुत जी से तिथि, विधि व दक्षिणा पर मार्गदर्शन प्राप्त करें।",
      nameLabel: "आपका नाम (Yajman Name) *",
      namePlaceholder: "उदा. राजेश कुमार",
      phoneLabel: "फोन / WhatsApp नंबर *",
      phonePlaceholder: "उदा. 9876543210",
      cityLabel: "आपका शहर / राज्य (City / State)",
      cityPlaceholder: "उदा. दिल्ली / कोलकाता / पटना",
      dateLabel: "संभावित तिथि (Estimated Date)",
      serviceLabel: "वांछित पूजा / विधि (Ritual Service)",
      membersLabel: "परिजनों की संख्या (Family Members)",
      gotraLabel: "गोत्र (Gotra - यदि ज्ञात हो)",
      gotraPlaceholder: "उदा. शांडिल्य / कश्यप / ज्ञात नहीं",
      notesLabel: "कोई विशेष प्रश्न या आवश्यकता",
      notesPlaceholder: "उदा. आवास, सामग्री या विशेष समय",
      submitBtn: "पंडित जी को विवरण भेजें (Connect on WhatsApp)",
      privacyNote: "🔒 आपका विवरण पूर्णतः सुरक्षित रहेगा एवं सीधे पं. आनंद कुमार गुपुत जी को प्रेषित होगा।",
      successTitle: "विवरण सफलतापूर्वक तैयार हो गया है!",
      successDesc: "पंडित जी से सीधे WhatsApp पर संवाद प्रारंभ हो रहा है...",
      newFormBtn: "नया विवरण भरें",
    },
  },
  en: {
    header: {
      tagline: "Gaya Ji · Pind Daan & Shraddha",
      pindDaan: "Pind Daan Vidhi",
      services: "Vedic Services",
      panditJi: "Pandit Ji",
      gayaJi: "Gaya Pilgrimage",
      faqs: "FAQs",
      contact: "Contact",
      admin: "Admin Portal",
      whatsappPandit: "WhatsApp Pandit Ji",
      bookNow: "Book Pind Daan",
    },
    hero: {
      eyebrow: "GAYA JI · PIND DAAN & SHRADDHA",
      h1Line1: "Pind Daan in Gaya Ji",
      h1Line2: "With Utmost Devotion.",
      desc: "Complete Vedic Pind Daan rituals for your ancestors in Gaya Ji, under the direct personal guidance of experienced Tirtha Purohit Pt. Anand Kumar Guput.",
      bookBtn: "Book Pind Daan",
      talkBtn: "Talk to Pandit Ji",
      trustBadge: "Direct Talk with Pandit Ji · No Middlemen Guaranteed",
      panditCaptionTitle: "Gaya Ji Tirtha Purohit",
      panditName: "Pt. Anand Kumar Guput",
      panditLineage: "Ancient Gaya Ji Tirtha Purohit Vedic Tradition",
    },
    trustBar: {
      directPandit: { title: "Direct Pandit Ji", subtitle: "Direct contact with Tirtha Purohit" },
      clearDakshina: { title: "Clear Dakshina", subtitle: "Transparent & pre-agreed fees" },
      personalGuidance: { title: "Personal Guidance", subtitle: "Dedicated ritual accompaniment" },
      pujaSamagri: { title: "Puja Samagri Included", subtitle: "All sacred materials provided" },
    },
    intro: {
      eyebrow: "A Serene Beginning",
      h2Line1: "Sacred Pind Daan Begins",
      h2Line2: "With Authentic Guidance.",
      paragraph: "Pind Daan at Gaya Ji is one of the most sacred obligations in Sanatana Dharma. For visiting families, understanding the timing, rituals, sacred vedis, and preparations can feel overwhelming. PindaanPanditJi makes this sacred journey transparent, peaceful, and deeply personal.",
      learnMoreLink: "Learn more about Pind Daan rituals",
    },
    servicesSection: {
      eyebrow: "Tailored to Your Family's Needs",
      heading: "Sacred Vedic Rituals",
      subheading: "Authentic rituals performed strictly according to the Garuda and Vayu Puranas by Pt. Anand Kumar Guput.",
      learnMore: "Learn Procedure",
      viewAll: "Explore All Vedic Rituals",
    },
    featuredPackage: {
      eyebrow: "PIND DAAN · GAYA JI",
      title: "A Fully Guided Pind Daan Journey",
      desc: "Pandit Ji explains the entire process in advance according to your family's gotra and timing, guiding you personally at all three sacred vedis in Gaya Ji.",
      note: "Pre-agreed transparent dakshina based on date and family requirements. No hidden costs.",
      trivedi: "Complete Trivedi Pind Daan",
      cta: "Discuss Booking with Pandit Ji",
      inclusionsTitle: "Transparent Dakshina Breakdown",
      inclusions: [
        "Direct personal guidance by Pt. Anand Kumar Guput",
        "Complete pure Puja Samagri (barley flour, black sesame, kusha, vessels, flowers)",
        "Falgu River ghat Tarpan & initial Sankalp ceremony",
        "Vishnupad Temple sanctum darshan & primary Pind Daan",
        "Akshayavat Dham eternal peace Sankalp & Sufal blessings",
      ],
    },
    panditSection: {
      eyebrow: "YOUR PANDIT JI",
      name: "Pt. Anand Kumar Guput",
      title: "Gaya Ji Tirtha Purohit · Ancient Lineage",
      quote: "“For every family, Pind Daan is not merely a ritual, but a sacred opportunity to express deep devotion to their ancestors. My endeavor is to ensure families understand the entire process beforehand, and the ritual is performed with pure peace, purity, and devotion.”",
      learnMore: "Learn more about Pandit Ji",
      directTalk: "Connect Directly",
      fact1Label: "Tradition",
      fact1Val: "Gaya Ji Tirtha Purohit",
      fact2Label: "Location",
      fact2Val: "Vishnupad, Gaya Ji",
      fact3Label: "Expertise",
      fact3Val: "Pind Daan · Shraddha · Pitru Karma",
    },
    whyUs: {
      eyebrow: "Our Philosophy",
      heading: "Why PindaanPanditJi?",
      point1Title: "Only One Pandit Ji",
      point1Desc: "No need to browse dozens of unknown pandits or negotiate with brokers. Everything is handled directly by Pt. Anand Kumar Guput.",
      point2Title: "Upfront & Clear Information",
      point2Desc: "Ritual procedure, required items, auspicious dates, and dakshina are fully explained before you arrive in Gaya Ji.",
      point3Title: "Personal Guidance",
      point3Desc: "Tailored to your family lineage and gotra with direct WhatsApp/phone consultations prior to your journey.",
    },
    process: {
      eyebrow: "Simple & Organized Workflow",
      heading: "Your Journey in 4 Simple Steps",
      step1Title: "01. Connect",
      step1Desc: "Share your date and family details with Pandit Ji via Call or WhatsApp.",
      step2Title: "02. Understand",
      step2Desc: "Receive clarity on gotra details, required preparation, and transparent dakshina.",
      step3Title: "03. Arrive in Gaya",
      step3Desc: "Reach Gaya Ji with peace of mind; all arrangements and samagri will be prepared.",
      step4Title: "04. Complete Ritual",
      step4Desc: "Perform the sacred Trivedi Pind Daan under Pt. Anand Kumar Guput's guidance.",
    },
    gayaSection: {
      eyebrow: "GAYA JI · THE SACRED TIRTHA",
      h2Line1: "Why is Gaya Ji",
      h2Line2: "So Profoundly Sacred?",
      desc: "Gaya Ji is revered as the foremost pilgrimage for ancestral salvation. According to the Garuda and Vayu Puranas, Pind Daan performed here liberates twenty-one generations of ancestors into eternal bliss.",
      vishnupadTitle: "Vishnupad Temple",
      vishnupadDesc: "Sacred footprint of Lord Vishnu where Pind Daan ensures immediate salvation for ancestors.",
      falguTitle: "Holy Falgu River",
      falguDesc: "The ancient river where Goddess Sita offered sand pindas, the primary site for sacred tarpan.",
      akshayavatTitle: "Akshayavat Tree",
      akshayavatDesc: "The immortal banyan tree where eternal satisfaction (Akshaya Tripti) and Sufal blessings are sealed.",
      travelGuideLink: "View Gaya Ji Pilgrimage & Travel Guide",
    },
    gallery: {
      eyebrow: "Authentic Moments",
      heading: "Sacred Moments in Gaya Ji",
      desc: "Glimpses of serene Vedic Pind Daan rituals conducted with Pt. Anand Kumar Guput.",
      photo1: "Sacred Ingredients & Pind Preparation",
      photo1Sub: "Barley, sesame seeds, kusha grass, and Ganga water",
      photo2: "Pt. Anand Kumar Guput",
      photo2Sub: "Personal guidance at the holy tirtha altar",
      photo3: "Vishnupad Temple & Falgu Ghats",
      photo3Sub: "Serene morning pilgrimage at the sacred shrine",
      photo4: "Devout Family Rituals",
      photo4Sub: "Peaceful ancestral tarpan performed with utmost gratitude",
    },
    reviews: {
      eyebrow: "Trust & Experiences",
      heading: "Words from Visiting Families",
    },
    faqs: {
      eyebrow: "Clarity & Answers",
      heading: "Frequently Asked Questions",
      desc: "Essential questions on ritual duration, dakshina, gotra, booking, and travel arrangements.",
      moreQuestions: "Have a specific question not covered here?",
      askOnWhatsApp: "Ask Pandit Ji directly on WhatsApp →",
    },
    finalCta: {
      eyebrow: "Sacred Resolution",
      heading: "Visit Gaya Ji for Your Ancestors.",
      desc: "Speak directly with Pt. Anand Kumar Guput regarding ritual dates, procedure, and travel advice.",
      whatsappBtn: "WhatsApp Pandit Ji",
      callBtn: "Call Pandit Ji",
      bookBtn: "Fill Online Booking Form",
      footerNote: "Pt. Anand Kumar Guput · Vishnupad Temple Road, Gaya Ji",
    },
    footer: {
      desc: "One Pandit Ji. One Sacred Tradition. For your family with utmost devotion. Direct Vedic guidance from Gaya Ji Tirtha Purohit Pt. Anand Kumar Guput.",
      purohitTitle: "Tirtha Purohit:",
      quickLinks: "Quick Links",
      vedicServices: "Vedic Services",
      contactInfo: "Direct Contact (Gaya Ji)",
      rights: "All rights reserved.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
    },
    mobileBar: {
      callPandit: "Call Pandit Ji",
      whatsappPandit: "WhatsApp Pandit Ji",
    },
    bookingForm: {
      modalEyebrow: "GAYA JI PIND DAAN CONSULTATION",
      modalTitle: "Ritual & Consultation Request",
      modalSubtitle: "Direct guidance on auspicious dates, procedures, and dakshina from Pt. Anand Kumar Guput.",
      nameLabel: "Your Name (Yajman Name) *",
      namePlaceholder: "e.g., Rajesh Sharma",
      phoneLabel: "Phone / WhatsApp Number *",
      phonePlaceholder: "e.g., +91 9876543210",
      cityLabel: "Your City / State",
      cityPlaceholder: "e.g., Kolkata / New Delhi / Patna",
      dateLabel: "Estimated Date of Visit",
      serviceLabel: "Desired Ritual Service",
      membersLabel: "Number of Family Members",
      gotraLabel: "Gotra (If known)",
      gotraPlaceholder: "e.g., Shandilya / Kashyapa / Not Sure",
      notesLabel: "Special Questions or Requirements",
      notesPlaceholder: "e.g., Accommodation or specific timing requirements",
      submitBtn: "Send Details to Pandit Ji (Connect on WhatsApp)",
      privacyNote: "🔒 Your information remains strictly confidential and is sent directly to Pt. Anand Kumar Guput.",
      successTitle: "Details Ready to Send!",
      successDesc: "Direct WhatsApp window is opening with Pandit Ji...",
      newFormBtn: "Fill another form",
    },
  },
  bn: {
    header: {
      tagline: "Gaya Ji · Pind Daan & Shraddha",
      pindDaan: "পিণ্ডদান বিধি",
      services: "বৈদিক সেবাসমূহ",
      panditJi: "পণ্ডিত জী",
      gayaJi: "গয়া তীর্থ পরিক্রমা",
      faqs: "প্রশ্নোত্তর (FAQ)",
      contact: "যোগাযোগ",
      admin: "অ্যাডমিন পোর্টাল",
      whatsappPandit: "WhatsApp Pandit Ji",
      bookNow: "Book Pind Daan",
    },
    hero: {
      eyebrow: "GAYA JI · PIND DAAN & SHRADDHA",
      h1Line1: "গয়া জী-তে পিণ্ডদান",
      h1Line2: "পরম শ্রদ্ধার সাথে।",
      desc: "আপনার পূর্বপুরুষদের আত্মার শান্তির জন্য গয়া জী-তে শাস্ত্রীয় পিণ্ডদানের সম্পূর্ণ বিধি, অভিজ্ঞ তীর্থ পুরোহিত পন্ডিত আনন্দ কুমার গুপ্ত জীর সরাসরি তত্ত্বাবধানে।",
      bookBtn: "পিণ্ডদান বুক করুন",
      talkBtn: "পণ্ডিত জীর সাথে কথা বলুন",
      trustBadge: "সরাসরি পণ্ডিত জীর সাথে যোগাযোগ · কোনো দালাল বা মধ্যস্থতাকারী নেই",
      panditCaptionTitle: "গয়া জী তীর্থ পুরোহিত",
      panditName: "পন্ডিত আনন্দ কুমার গুপ্ত",
      panditLineage: "প্রাচীন গয়া জী তীর্থ পুরোহিত বৈদিক ঐতিহ্য",
    },
    trustBar: {
      directPandit: { title: "Direct Pandit Ji", subtitle: "সরাসরি তীর্থ পুরোহিতের সাথে যোগাযোগ" },
      clearDakshina: { title: "Clear Dakshina", subtitle: "স্বচ্ছ ও পূর্বনির্ধারিত দক্ষিণা" },
      personalGuidance: { title: "Personal Guidance", subtitle: "ব্যক্তিগত সম্পূর্ণ শাস্ত্রীয় নির্দেশনা" },
      pujaSamagri: { title: "Puja Samagri Included", subtitle: "সমস্ত পূজা সামগ্রী অন্তর্ভুক্ত" },
    },
    intro: {
      eyebrow: "একটি পবিত্র সূচনা",
      h2Line1: "পিণ্ডদানের সঠিক সূচনা",
      h2Line2: "সঠিক নির্দেশনার মাধ্যমে হয়।",
      paragraph: "সনাতন ধর্মে গয়া জী-তে পিণ্ডদান পিতৃপুরুষদের পরম মুক্তির পথ। প্রথমবার আসা পরিবারের জন্য তিথি, স্থান, বিধি ও প্রস্তুতি বোঝা সহজ নয়। PindaanPanditJi-র উদ্দেশ্য এই পবিত্র প্রক্রিয়াকে সহজ, স্পষ্ট, স্বচ্ছ ও ব্যক্তিগত রূপ দেওয়া।",
      learnMoreLink: "পিণ্ডদান বিধি সম্পর্কে বিস্তারিত জানুন",
    },
    servicesSection: {
      eyebrow: "আপনার প্রয়োজন অনুসারে",
      heading: "পিতৃ কর্ম ও বৈদিক পূজা",
      subheading: "গরুড় পুরাণ ও শাস্ত্রীয় বৈদিক রীতি অনুসারে পন্ডিত আনন্দ কুমার গুপ্ত জীর দ্বারা সম্পাদিত প্রামাণিক অনুষ্ঠান।",
      learnMore: "বিধি জানুন",
      viewAll: "সমস্ত বৈদিক আচার দেখুন",
    },
    featuredPackage: {
      eyebrow: "PIND DAAN · GAYA JI",
      title: "একটি সম্পূর্ণ নির্দেশিত পিণ্ডদান যাত্রা",
      desc: "আপনার তিথি এবং পরিবারের গোত্র অনুসারে পণ্ডিত জী সম্পূর্ণ প্রক্রিয়া আগেই বুঝিয়ে দেন এবং গয়া জীর তিনটি পবিত্র বেদীতে ব্যক্তিগতভাবে পরিচালনা করেন।",
      note: "আগমনের পূর্বেই স্পষ্ট ও স্বচ্ছ দক্ষিণা বিবরণ। কোনো গোপন চার্জ নেই।",
      trivedi: "সম্পূর্ণ ত্রিবেদী পিণ্ডদান",
      cta: "বুকিংয়ের জন্য কথা বলুন",
      inclusionsTitle: "স্বচ্ছ দক্ষিণা বিবরণ",
      inclusions: [
        "পন্ডিত আনন্দ কুমার গুপ্ত জীর সরাসরি ব্যক্তিগত বৈদিক নির্দেশনা",
        "সম্পূর্ণ শুদ্ধ পূজা সামগ্রী (যবের গুঁড়ো, কালো তিল, কুশ, তামার পাত্র, ফুল)",
        "ফল্গু নদীর ঘাটে তর্পণ ও প্রথম সংকল্প বিধি",
        "বিষ্ণুপাদ মন্দির প্রাঙ্গণে চরণ দর্শন ও প্রধান পিণ্ডদান",
        "অক্ষয়বট ধামে অক্ষয় তৃপ্তি সংকল্প ও সুফল আশীর্বাদ",
      ],
    },
    panditSection: {
      eyebrow: "YOUR PANDIT JI",
      name: "পন্ডিত আনন্দ কুমার গুপ্ত",
      title: "গয়া জী তীর্থ পুরোহিত · প্রাচীন ঐতিহ্য",
      quote: "“প্রতিটি পরিবারের জন্য পিণ্ডদান কেবল একটি আচার নয়, পূর্বপুরুষদের প্রতি শ্রদ্ধার এক পরম পবিত্র সুযোগ। আমার সর্বদা প্রচেষ্টা থাকে যাতে পরিবারটি সম্পূর্ণ প্রক্রিয়াটি আগেই বুঝতে পারে এবং পূজা সম্পূর্ণ শান্তি, শুদ্ধতা ও শ্রদ্ধার সাথে সম্পন্ন হয়।”",
      learnMore: "পণ্ডিত জী সম্পর্কে আরও জানুন",
      directTalk: "সরাসরি যোগাযোগ করুন",
      fact1Label: "ঐতিহ্য",
      fact1Val: "গয়া জী তীর্থ পুরোহিত",
      fact2Label: "স্থান",
      fact2Val: "বিষ্ণুপাদ, গয়া জী",
      fact3Label: "দক্ষতা",
      fact3Val: "পিণ্ডদান · শ্রাদ্ধ · পিতৃ কর্ম",
    },
    whyUs: {
      eyebrow: "আমাদের দৃষ্টিভঙ্গি",
      heading: "কেন PindaanPanditJi?",
      point1Title: "কেবল একজন পণ্ডিত জী",
      point1Desc: "আপনাকে বিভিন্ন অপরিচিত পুরোহিত বা দালালের খোঁজে ঘুরতে হবে না। সম্পূর্ণ ব্যবস্থা সরাসরি পন্ডিত আনন্দ কুমার গুপ্ত জীর অধীনে।",
      point2Title: "আগে থেকেই স্পষ্ট তথ্য",
      point2Desc: "পূজা বিধি, প্রয়োজনীয় সামগ্রী, শুভ তিথি ও দক্ষিণার সমস্ত বিবরণ আসার আগেই স্পষ্ট জানানো হয়।",
      point3Title: "ব্যক্তিগত নির্দেশনা",
      point3Desc: "আপনার পরিবারের গোত্র ও সময়সূচি অনুসারে সরাসরি পণ্ডিত জীর সাথে ফোনে বা WhatsApp-এ কথা বলে নিশ্চিত হয়ে আসুন।",
    },
    process: {
      eyebrow: "সহজ ও সুসংগঠিত প্রক্রিয়া",
      heading: "আপনার যাত্রা, চারটি সহজ ধাপে",
      step1Title: "০১. কথা বলুন",
      step1Desc: "পণ্ডিত জীর সাথে ফোন বা WhatsApp-এ আপনার সম্ভাব্য তারিখ ও পারিবারিক বিবরণ জানান।",
      step2Title: "০২. বিধি বুঝুন",
      step2Desc: "পিণ্ডদানের প্রস্তুতি, গোত্র বিবরণ ও স্বচ্ছ দক্ষিণার স্পষ্ট তথ্য জেনে নিন।",
      step3Title: "০৩. গয়া জী আসুন",
      step3Desc: "নির্দিষ্ট সময়ে গয়া জী পৌঁছান; সমস্ত পূজার প্রস্তুতি পূর্বনির্ধারিত থাকবে।",
      step4Title: "০৪. পিণ্ডদান সম্পন্ন করুন",
      step4Desc: "পন্ডিত আনন্দ কুমার গুপ্ত জীর উপস্থিতিতে ভক্তিভরে সম্পূর্ণ ত্রিবেদী পিণ্ডদান সম্পন্ন করুন।",
    },
    gayaSection: {
      eyebrow: "GAYA JI · THE SACRED TIRTHA",
      h2Line1: "গয়া জী কেন",
      h2Line2: "এত অত্যন্ত পবিত্র?",
      desc: "সনাতন ঐতিহ্যে গয়া জীকে পিতৃমুক্তির সর্বশ্রেষ্ঠ মহাতীর্থ হিসেবে গণ্য করা হয়। গরুড় পুরাণ অনুসারে, এখানে পিণ্ডদান ও তর্পণ করলে একুশ পুরুষের আত্মা মুক্তি লাভ করে বৈকুণ্ঠে স্থান পায়।",
      vishnupadTitle: "বিষ্ণুপাদ মন্দির",
      vishnupadDesc: "ভগবান শ্রী বিষ্ণুর সাক্ষাত পদচিহ্ন যেখানে পিণ্ডদান করলে পিতৃপুরুষরা পরম মুক্তি লাভ করেন।",
      falguTitle: "পবিত্র ফল্গু নদী",
      falguDesc: "যেখানে মাতা সীতা বালুকা দ্বারা পিণ্ডদান করেছিলেন, আদি তীর্থ ও পবিত্র তর্পণের স্থান।",
      akshayavatTitle: "অক্ষয়বট ধাম",
      akshayavatDesc: "অমর বটবৃক্ষ যেখানে পিতৃপুরুষদের অক্ষয় তৃপ্তি এবং সুফল আশীর্বাদ নিশ্চিত হয়।",
      travelGuideLink: "গয়া জী তীর্থ ও ভ্রমণ নির্দেশিকা দেখুন",
    },
    gallery: {
      eyebrow: "প্রামাণিক মুহূর্ত",
      heading: "গয়া জীর কিছু পবিত্র মুহূর্ত",
      desc: "পন্ডিত আনন্দ কুমার গুপ্ত জীর সান্নিধ্যে সম্পন্ন হওয়া পিণ্ডদানের কিছু পরম শান্ত ও পবিত্র মুহূর্ত।",
      photo1: "শাস্ত্রীয় সামগ্রী ও পিণ্ড নির্মাণ",
      photo1Sub: "যব, তিল, কুশ ও গঙ্গাজলে নির্মিত পবিত্র পিণ্ড",
      photo2: "পন্ডিত আনন্দ কুমার গুপ্ত জী",
      photo2Sub: "পবিত্র তীর্থ বেদীতে সরাসরি শাস্ত্রীয় নির্দেশনা",
      photo3: "বিষ্ণুপাদ মন্দির ও ফল্গু ঘাট",
      photo3Sub: "প্রাতঃকালীন নির্মল আলোয় পবিত্র তীর্থ দর্শন",
      photo4: "ভক্তিপূর্ণ পারিবারিক আচার",
      photo4Sub: "শান্তি ও পরম শ্রদ্ধার সাথে পিতৃ তর্পণ সমাপন",
    },
    reviews: {
      eyebrow: "অভিজ্ঞতা ও আস্থা",
      heading: "তীর্থযাত্রী পরিবারের অভিজ্ঞতা",
    },
    faqs: {
      eyebrow: "স্পষ্টতা ও সমাধান",
      heading: "সাধারণ জিজ্ঞাসিত প্রশ্নোত্তর",
      desc: "গয়া জী-তে পিণ্ডদান, বিধি, দক্ষিণা, তিথি ও যাতায়াত সংক্রান্ত যাবতীয় প্রশ্নের উত্তর।",
      moreQuestions: "আপনার কি এমন কোনো প্রশ্ন আছে যার উত্তর এখানে পাননি?",
      askOnWhatsApp: "সরাসরি পণ্ডিত জীকে WhatsApp-এ জিজ্ঞাসা করুন →",
    },
    finalCta: {
      eyebrow: "পবিত্র সংকল্প",
      heading: "আপনার পিতৃপুরুষের মুক্তির জন্য গয়া জী আসুন।",
      desc: "পিণ্ডদান বিধি, শুভ তিথি ও যাত্রা সম্পর্কে সরাসরি পন্ডিত আনন্দ কুমার গুপ্ত জীর সাথে কথা বলুন।",
      whatsappBtn: "WhatsApp Pandit Ji",
      callBtn: "Call Pandit Ji",
      bookBtn: "অনলাইন ফর্ম পূরণ করুন",
      footerNote: "পন্ডিত আনন্দ কুমার গুপ্ত · বিষ্ণুপাদ মন্দির রোড, গয়া জী",
    },
    footer: {
      desc: "একজন পণ্ডিত জী। একটি ঐতিহ্য। আপনার পরিবারের জন্য পরম শ্রদ্ধার সাথে। গয়া জী তীর্থ পুরোহিত পন্ডিত আনন্দ কুমার গুপ্ত জীর সরাসরি সান্নিধ্য।",
      purohitTitle: "তীর্থ পুরোহিত:",
      quickLinks: "মূল পৃষ্ঠা",
      vedicServices: "বৈদিক সেবাসমূহ",
      contactInfo: "সরাসরি যোগাযোগ (Gaya Ji)",
      rights: "সর্বস্বত্ব সংরক্ষিত।",
      terms: "শর্তাবলী",
      privacy: "গোপনীয়তা নীতি",
    },
    mobileBar: {
      callPandit: "Call Pandit Ji",
      whatsappPandit: "WhatsApp Pandit Ji",
    },
    bookingForm: {
      modalEyebrow: "GAYA JI PIND DAAN CONSULTATION",
      modalTitle: "পিণ্ডদান ও পূজা পরামর্শ",
      modalSubtitle: "সরাসরি তীর্থ পুরোহিত পন্ডিত আনন্দ কুমার গুপ্ত জীর কাছ থেকে তিথি, বিধি ও দক্ষিণার পরামর্শ নিন।",
      nameLabel: "আপনার নাম (Yajman Name) *",
      namePlaceholder: "উদা. রাজেশ শর্মা / বিকাশ মুখার্জী",
      phoneLabel: "ফোন / WhatsApp নম্বর *",
      phonePlaceholder: "উদা. 9876543210",
      cityLabel: "আপনার শহর / রাজ্য (City / State)",
      cityPlaceholder: "উদা. কলকাতা / ঢাকা / শিলিগুড়ি",
      dateLabel: "সম্ভাব্য তিথি (Estimated Date)",
      serviceLabel: "প্রয়োজনীয় পূজা / বিধি (Ritual Service)",
      membersLabel: "পরিবারের সদস্য সংখ্যা",
      gotraLabel: "গোত্র (যদি জানা থাকে)",
      gotraPlaceholder: "উদা. শাণ্ডিল্য / কাশ্যপ / জানা নেই",
      notesLabel: "কোনো বিশেষ প্রশ্ন বা আবাসন প্রয়োজন",
      notesPlaceholder: "উদা. থাকার ব্যবস্থা, বিশেষ তিথি ইত্যাদি",
      submitBtn: "পণ্ডিত জীকে তথ্য পাঠান (WhatsApp-এ কথা বলুন)",
      privacyNote: "🔒 আপনার তথ্য সম্পূর্ণ নিরাপদ এবং সরাসরি পন্ডিত আনন্দ কুমার গুপ্ত জীর কাছে পৌঁছাবে।",
      successTitle: "তথ্য সফলভাবে প্রস্তুত হয়েছে!",
      successDesc: "পণ্ডিত জীর সাথে সরাসরি WhatsApp উইন্ডো খুলছে...",
      newFormBtn: "নতুন ফর্ম পূরণ করুন",
    },
  },
};
