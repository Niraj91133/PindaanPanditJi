export interface FAQItem {
  id: string;
  question: { hi: string; en: string; bn: string };
  answer: { hi: string; en: string; bn: string };
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: {
      hi: "गया जी में पिंडदान कितने दिन का होता है?",
      en: "How many days does Pind Daan take in Gaya Ji?",
      bn: "গয়া জী-তে পিণ্ডদান কত দিনের হয়?",
    },
    answer: {
      hi: "सामान्यतः अधिकांश परिवार १ दिन का 'त्रिवेदी पिंडदान' (फल्गु नदी, विष्णुपद एवं अक्षयवट) संपन्न करते हैं, जिसमें लगभग ३ से ४ घंटे का समय लगता है। विशेष परिस्थितियों में ३ दिन, ७ दिन अथवा १७ दिवसीय विधान भी होता है। आप अपनी सुविधानुसार १ दिन का विधान भी पूर्ण श्रद्धा से कर सकते हैं।",
      en: "Most families perform the complete 1-day 'Trivedi Pind Daan' across Falgu River, Vishnupad Temple, and Akshayavat Dham, which takes approximately 3 to 4 hours. Extended 3-day or 17-day rituals are also conducted as per family tradition.",
      bn: "সাধারণত অধিকাংশ পরিবার ১ দিনের 'ত্রিবেদী পিণ্ডদান' (ফল্গু নদী, বিষ্ণুপাদ মন্দির ও অক্ষয়বট) সম্পন্ন করেন, যাতে প্রায় ৩ থেকে ৪ ঘণ্টা সময় লাগে। বিশেষ তিথিতে ৩ দিন বা ১৭ দিনের বিধানও শাস্ত্রসম্মত।",
    },
  },
  {
    id: "faq-2",
    question: {
      hi: "पिंडदान की दक्षिणा कितनी है?",
      en: "What is the dakshina (fee) for Pind Daan?",
      bn: "পিণ্ডদানের দক্ষিণা কত?",
    },
    answer: {
      hi: "हम पूरी पारदर्शिता में विश्वास रखते हैं। आपके परिवार की आवश्यकता, विधि के प्रकार (१ दिन का त्रिवेदी पिंडदान, त्रिपिंडी या नारायण बलि) और सामग्री के अनुसार दक्षिणा पहले ही स्पष्ट बता दी जाती है। कोई भी छिपा हुआ शुल्क नहीं होता।",
      en: "We believe in total transparency. The dakshina is pre-determined and communicated upfront based on your chosen ritual (1-day Trivedi, Tripindi, or Narayan Bali) and materials. There are zero hidden charges.",
      bn: "আমরা সম্পূর্ণ স্বচ্ছতায় বিশ্বাস করি। আপনার পরিবারের পছন্দসই আচার (১ দিনের ত্রিবেদী পিণ্ডদান, ত্রিপিন্ডী বা নারায়ণ বলি) ও সামগ্রী অনুসারে দক্ষিণা আসার আগেই স্পষ্ট জানিয়ে দেওয়া হয়। কোনো গোপন খরচ নেই।",
    },
  },
  {
    id: "faq-3",
    question: {
      hi: "पिंडदान के लिए कौन-सी जानकारी चाहिए?",
      en: "What ancestral details are needed for Pind Daan?",
      bn: "পিণ্ডদানের জন্য কোন তথ্যের প্রয়োজন হয়?",
    },
    answer: {
      hi: "मुख्य रूप से आपके पूर्वजों के नाम (पिता, पितामह, प्रपितामह, माता आदि), अपना गोत्र, और आने की तिथि की आवश्यकता होती है। यदि किसी पूर्वज का नाम या गोत्र ठीक से ज्ञात न हो, तो भी शास्त्रोक्त 'कश्यप गोत्र' व अज्ञात पितृ संकल्प द्वारा विधि पूर्ण की जाती है।",
      en: "Primarily the names of your departed ancestors (parents, grandparents, maternal lineage), your gotra, and your arrival date. If exact names or gotra are unknown, the ritual is completed under the scriptural Kashyapa gotra.",
      bn: "মূলত আপনার পূর্বপুরুষদের নাম (পিতা, পিতামহ, প্রপিতামহ, মাতা ইত্যাদি), নিজের গোত্র এবং আগমনের তারিখ। যদি গোত্র বা সঠিক নাম জানা না থাকে, তবে শাস্ত্রীয় কাশ্যপ গোত্রের মাধ্যমে সম্পূর্ণ সংকল্প সম্পন্ন করা হয়।",
    },
  },
  {
    id: "faq-4",
    question: {
      hi: "क्या पहले से बुकिंग करनी होती है?",
      en: "Is prior booking or communication necessary?",
      bn: "আগে থেকে বুকিং বা যোগাযোগ করা কি প্রয়োজন?",
    },
    answer: {
      hi: "हाँ, अपनी यात्रा की तिथि से कम से कम २ से ४ दिन पहले संपर्क करना उत्तम रहता है, ताकि पंडित जी उस दिन का समय और आवश्यक पूजा सामग्री पूर्व निर्धारित कर सकें और आपको पहुँचते ही शांतिपूर्वक विधि संपन्न कराई जा सके।",
      en: "Yes, connecting 2 to 4 days before your visit ensures Pandit Ji schedules the auspicious muhurta, arranges all sacred samagri, and receives you personally without delays.",
      bn: "হ্যাঁ, ভ্রমণের ২ থেকে ৪ দিন আগে যোগাযোগ করা শ্রেয়, যাতে পণ্ডিত জী শুভ সময় নির্ধারণ ও সমস্ত পূজা সামগ্রী প্রস্তুত রাখতে পারেন।",
    },
  },
  {
    id: "faq-5",
    question: {
      hi: "क्या गोत्र की जानकारी आवश्यक है?",
      en: "Is knowing the Gotra strictly necessary?",
      bn: "গোত্রের তথ্য কি আবশ্যক?",
    },
    answer: {
      hi: "गोत्र ज्ञात होना श्रेष्ठ है, किंतु यदि आपको अपना गोत्र ज्ञात नहीं है, तो शास्त्रों के अनुसार 'कश्यप' गोत्र के अंतर्गत संपूर्ण संकल्प और पिंडदान विधि मान्य एवं फलदायी होती है। पं. आनंद कुमार गुपुत जी स्वयं इसका मार्गदर्शन करेंगे।",
      en: "Knowing your gotra is ideal, but if not known, Hindu scriptures explicitly recognize the Kashyapa gotra for universal ancestral peace.",
      bn: "গোত্র জানা থাকলে ভালো, তবে যদি গোত্র জানা না থাকে তবে শাস্ত্রীয় বিধান অনুসারে 'কাশ্যপ' গোত্রের অধীনে সম্পূর্ণ সংকল্প ফলদায়ী হয়।",
    },
  },
  {
    id: "faq-6",
    question: {
      hi: "क्या परिवार के अन्य सदस्य भी साथ आ सकते हैं?",
      en: "Can family members and children accompany?",
      bn: "পরিবারের অন্যান্য সদস্যরা কি সাথে আসতে পারেন?",
    },
    answer: {
      hi: "बिल्कुल। मुख्य कर्ता के साथ परिवार के अन्य सदस्य, माताएं-बहनें और बच्चे भी उपस्थित रहकर दर्शन व आशीर्वाद प्राप्त कर सकते हैं।",
      en: "Absolutely. Along with the primary performer, family members, elders, and children can attend the sacred rituals and receive divine blessings.",
      bn: "অবশ্যই। প্রধান যজমানের সাথে পরিবারের অন্যান্য সদস্য, মা-বোনেরা ও সন্তানরাও উপস্থিত থেকে পবিত্র দর্শন ও আশীর্বাদ লাভ করতে পারেন।",
    },
  },
  {
    id: "faq-7",
    question: {
      hi: "गया जी कैसे पहुँचें?",
      en: "How to reach Gaya Ji?",
      bn: "গয়া জী কিভাবে পৌঁছাবেন?",
    },
    answer: {
      hi: "गया जंक्शन (GAYA) देश के सभी प्रमुख शहरों से रेल मार्ग द्वारा सीधे जुड़ा हुआ है। इसके अलावा गया अंतर्राष्ट्रीय हवाई अड्डा (GAY) और पटना हवाई अड्डा (PAT - 100 किमी) से टैक्सी व ट्रेन द्वारा सुगमता से पहुँचा जा सकता है।",
      en: "Gaya Junction (GAYA) is a major railway hub directly connected to New Delhi, Kolkata, Mumbai, Varanasi, and Patna. Gaya International Airport (GAY) and Patna Airport (PAT) also provide quick access.",
      bn: "গয়া জংশন (GAYA) কলকাতা, দিল্লি, মুম্বাই ও সমস্ত প্রধান শহরের সাথে সরাসরি রেলপথে যুক্ত। এছাড়া গয়া বিমানবন্দর (GAY) ও পাটনা বিমানবন্দর (PAT) থেকে ট্যাক্সিতে সহজেই আসা যায়।",
    },
  },
  {
    id: "faq-8",
    question: {
      hi: "क्या Pandit Ji से पहले WhatsApp पर बात कर सकते हैं?",
      en: "Can we talk to Pandit Ji directly on WhatsApp?",
      bn: "পণ্ডিত জীর সাথে কি আগে WhatsApp-এ কথা বলা যাবে?",
    },
    answer: {
      hi: "हाँ, बिल्कुल। आप वेबसाइट पर दिए गए WhatsApp बटन पर क्लिक करके सीधे पं. आनंद कुमार गुपुत जी से अपनी तिथि, विधि और किसी भी शंका का समाधान प्राप्त कर सकते हैं।",
      en: "Yes, absolutely. You can click the WhatsApp button on the website to discuss auspicious dates, dakshina, and ritual guidelines directly with Pt. Anand Kumar Guput.",
      bn: "হ্যাঁ, নিশ্চয়ই। ওয়েবসাইটে দেওয়া WhatsApp বাটনে ক্লিক করে সরাসরি পন্ডিত আনন্দ কুমার গুপ্ত জীর সাথে কথা বলে সমস্ত পরামর্শ নিতে পারেন।",
    },
  },
];
