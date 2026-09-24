export interface SacredSite {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  description: string;
  significance: string;
  image: string;
}

export const sacredSites: SacredSite[] = [
  {
    id: "vishnupad",
    name: "Vishnupad Temple",
    hindiName: "विष्णुपद मंदिर",
    tagline: "भगवान श्री विष्णु के चरण चिह्न का पावन धाम",
    description: "विष्णुपद मंदिर में भगवान विष्णु के पदचिह्न (चरण चिह्न) अष्टकोणीय रजत कुंड में स्थापित हैं। यहाँ पिंड अर्पण करने से पितरों को सीधे वैकुंठ लोक की प्राप्ति मानी जाती है।",
    significance: "मुख्य पिंडदान वेदी, जहाँ भगवान विष्णु ने गयासुर पर अपना पदचिह्न स्थापित किया था।",
    image: "/images/vishnupad.jpg",
  },
  {
    id: "falgu-river",
    name: "Falgu River",
    hindiName: "पवित्र फल्गु नदी (अंतःसलिला)",
    tagline: "आदि तीर्थ जहाँ प्रथम तर्पण एवं बालू पिंड अर्पण होता है",
    description: "माता सीता द्वारा बालू से पिंडदान करने की प्राचीन कथा फल्गु नदी से जुड़ी है। यहाँ सर्वप्रथम स्नान, आचमन व पितृ तर्पण किया जाता है।",
    significance: "त्रिवेदी का प्रथम तीर्थ, जहाँ प्रवाहमयी व अंतःसलिला धारा में पितरों को जलंजलि दी जाती है।",
    image: "/images/ritual.jpg",
  },
  {
    id: "akshayavat",
    name: "Akshayavat",
    hindiName: "अक्षयवट धाम",
    tagline: "अक्षय तृप्ति एवं सुफल का अमर वटवृक्ष",
    description: "अक्षयवट वह अमर वटवृक्ष है जहाँ माता सीता के आशीर्वाद से यह वृक्ष सदा अमर रहा। यहाँ पिंडदान के अंतिम चरण में 'सुफल' लिया जाता है, जिससे पितरों को अक्षय (सदा के लिए) तृप्ति मिलती है।",
    significance: "पिंडदान का समापन स्थल, जहाँ ब्राह्मण को सुफल देकर यात्रा की पूर्णता होती है।",
    image: "/images/akshayavat.jpg",
  },
];
