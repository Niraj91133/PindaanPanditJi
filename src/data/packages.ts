export interface PackageItem {
  id: string;
  title: string;
  eyebrow: string;
  badge?: string;
  tagline: string;
  description: string;
  dakshinaText: string;
  note: string;
  inclusions: string[];
  locations: string[];
  ctaText: string;
}

export const featuredPackage: PackageItem = {
  id: "complete-pind-daan",
  eyebrow: "PIND DAAN · GAYA JI",
  title: "एक पूरी तरह guided Pind Daan journey",
  badge: "सबसे अनुशंसित (Most Recommended)",
  tagline: "फल्गु नदी · विष्णुपद मंदिर · अक्षयवट — त्रिवेदी संपूर्ण पिंडदान",
  description: "आपकी तिथि और परिवार की आवश्यकता के अनुसार पंडित जी पूरी प्रक्रिया समझाते हैं और गया जी में आवश्यक विधि में व्यक्तिगत रूप से मार्गदर्शन करते हैं।",
  dakshinaText: "पारदर्शी दक्षिणा (Transparent Dakshina)",
  note: "तिथि, परिजनों की संख्या और विशेष संकल्प के आधार पर पूर्व निर्धारित स्पष्ट विवरण। कोई छिपा हुआ शुल्क नहीं।",
  inclusions: [
    "पं. रामानुज शास्त्री जी का व्यक्तिगत वैदिक मार्गदर्शन",
    "संपूर्ण शुद्ध पूजा सामग्री (जौ का आटा, तिल, कुशा, रोली, धूप, दीप, पात्र)",
    "फल्गु नदी घाट पर तर्पण एवं प्रथम संकल्प विधि",
    "विष्णुपद मंदिर प्रांगण में चरण दर्शन व मुख्य पिंडदान",
    "अक्षयवट धाम पर अक्षय तृप्ति संकल्प व सुफल विधि",
    "गोत्र, प्रवर व पूर्वजों के नामों का शुद्ध उच्चारण संकल्प",
  ],
  locations: ["फल्गु नदी (Falgu River)", "विष्णुपद मंदिर (Vishnupad Mandir)", "अक्षयवट (Akshayavat)"],
  ctaText: "बुकिंग के लिए बात करें",
};
