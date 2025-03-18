import React, { createContext, useState, useContext, useRef } from 'react';
import Custom from './assets/WhyChooseUs/Customized Automation Solutions .png';
import Trust from './assets/WhyChooseUs/Building Lasting Trust with Our Clients..png';
import Scale from './assets/WhyChooseUs/Scalable Solutions.png';

// Create the context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const isRTL = currentLang === 'ar';


  const translations = {
    en: {
      footer: {
        quickLinks: 'Quick Links',
        contact: 'Contact',
        followUs: 'Follow Us',
        description: 'Transforming businesses through intelligent automation and AI solutions.',
      },
      hero: {
        title: 'Let the work be done by autoMATE',
        subtitle: 'Empower your business with cutting-edge AI and automation solutions that drive efficiency and innovation.',
        consultation: 'Get a FREE personalized automation consultation',
        consultationDesc: 'Our experts will analyze your business processes and design a custom automation strategy - No commitment required',
        bookButton: 'Book Free Consultation',
        exploreButton: 'Explore Our Services'
      },
      services: ['Content Creation', 'Marketing Campaigns', 'AI Customer Service Bot', 'Social Media Management', 'Startup Business Plans', 'Web Development']
    },
    ar: {
      footer: {
        quickLinks: 'روابط سريعة',
        contact: 'اتصل بنا',
        followUs: 'تابعنا',
        description: 'تحويل الأعمال من خلال الأتمتة الذكية وحلول الذكاء الاصطناعي.',
      },
      hero: {
        title: 'دع العمل يتم بواسطة autoMATE',
        subtitle: 'قم بتمكين عملك من خلال حلول الذكاء الاصطناعي والأتمتة المتطورة التي تدفع الكفاءة والابتكار.',
        consultation: 'احصل على استشارة مجانية مخصصة للأتمتة',
        consultationDesc: 'سيقوم خبراؤنا بتحليل عمليات عملك وتصميم استراتيجية أتمتة مخصصة - لا يلزم الالتزام',
        bookButton: 'احجز استشارة مجانية',
        exploreButton: 'استكشف خدماتنا'
      },
      services: ['إنشاء المحتوى', 'حملات تسويقية', 'روبوت خدمة العملاء الذكي', 'إدارة وسائل التواصل الاجتماعي', 'خطط الأعمال للشركات الناشئة', 'تطوير المواقع الإلكترونية']
    }
  };

  const whyChooseUsCards = {
    "en": [
      {
        title: "Customized Automation Solutions",
        description: "We provide tailored automation solutions powered by artificial intelligence, designed to meet your business's specific needs.",
        image: Custom
      },
      {
        title: "Building Lasting Trust with Our Clients.",
        description: " Your success is our mission, and your trust is our greatest achievement.",
        image: Trust
      },
      {
        title: "Scalable Solutions",
        description: "We offer flexible services that grow with your business, ensuring sustainable and long-term success.",
        image: Scale
      }
    ],
    "ar": [
      {
        title: "حلول أتمتة مخصصة",
        description: " نحن نقدم حلول أتمتة مدعومة بالذكاء الاصطناعي ومصممة خصيصًا لتلبية احتياجات عملك المحددة.",
        image: Custom
      },
      {
        title: "بناء ثقة طويلة الأمد مع عملائنا",
        description: " نجاحك هو مهمتنا، وثقتك هي أعظم إنجازاتنا.",
        image: Trust
      },
      {
        title: "حلول قابلة للتوسع",
        description: "نقدم خدمات مرنة تنمو مع عملك، مما يضمن النجاح المستدام والطويل الأمد.",
        image: Scale
      }
    ]
  }

  const portfolioSlides = {
    "en": [
      {
        title: "let the work be done autoMATE.",
        description: "",
        image: "/src/assets/portfolio/1.png"
      },
      {
        title: "",
        description: "The leading company in Syria for providing integrated marketing solutions using advanced artificial intelligence technologies.",
        image:  "/src/assets/portfolio/2.png"
      },
      {
        title: "Our vision:",
        description: "We aim to develop the job market through automation and artificial intelligence, believing that this vision will contribute to sustainable growth and economic prosperity for businesses.",
        image: "/src/assets/portfolio/3.png"
      },
      {
        title: "Our Mission:",
        description: "Providing innovative automation solutions to enhance business performance and profitability through artificial intelligence technologies and operational cost reduction, while adhering to the highest quality standards to ensure customer satisfaction and sustainable success.",
        image: "/src/assets/portfolio/4.png"
      },
      {
        title: "",
        description: "Recent studies have shown that automation can boost sales by up to 30% At autoMATE, we are here to help you achieve this growth with our expertise.",
        image: "/src/assets/portfolio/5.png"
      }
    ],
    "ar": [
      {
        title: "let the work be done autoMATE.",
        description: "",
        image: "/src/assets/portfolio/1.png"
      },
      {
        title: "",
        description: "الشركة الرائدة الأولى في سوريا في تقديم حلول التسويق المتكاملة باستخدام تقنيات الذكاء الاصطناعي المتقدمة.",
        image:  "/src/assets/portfolio/2.png"
      },
      {
        title: "رؤيتنا:",
        description: "نسعى الى تطوير سوق العمل من خلال الأتمتة والذكاء الإصطناعي, نؤمن بأن هذه الرؤية ستساهم في تحقيق نمو مستدام وازدهار اقتصادي الشركات.",
        image: "/src/assets/portfolio/3.png"
      },
      {
        title: "مهمتنا:",
        description: "تقديم حلول أتمتة مبتكرة لتحسين أداء الشركات وزيادة ربحيتها، من خلال تقنيات الذكاء الاصطناعي وتقليل التكاليف التشغيلية، مع الالتزام . بأعلى معايير الجودة لتحقيق رضا العملاء ونجاح مستدام",
        image: "/src/assets/portfolio/4.png"
      },
      {
        title: "",
        description: "دراسات حديثة أثبتت أن الأتمتة يمكن أن تزيد من المبيعات بنسبة تصل إلى 30%، ونحن هنا لنساعدك على تحقيق هذه الزيادة بفضل خبرتنا.",
        image: "/src/assets/portfolio/5.png"
      }
    ]
  }

  const faqs = {
    "en": [
      {
        question: 'Are automation services customizable to suit my business needs?',
        answer: 'Absolutely! We tailor our services to meet each client\'s unique needs, ensuring comprehensive solutions that align with your goals.'
      },
      {
        question: 'What industries can benefit from your smart solutions?',
        answer: 'Our services are flexible and suitable for all industries.'
      },
      {
        question: 'How long does it take to implement the services?',
        answer: 'Typically, implementation takes 3 to 7 working days, depending on the size and complexity of the service.'
      },
      {
        question: 'Do I need technical skills to benefit from your services?',
        answer: ' Not at all! You don\'t need any technical experience; our dedicated team will handle everything to ensure a smooth and hassle-free experience.'
      },
      {
        question: 'Can you develop solutions for specific problems in my business?',
        answer: 'Yes, we specialize in creating custom solutions for unique challenges your business may face.'
      },
      {
        question: 'Do you offer a warranty for your services?',
        answer: 'Yes, our services include a warranty throughout the subscription period, ensuring customer satisfaction and ongoing support.'
      }
    ],
    "ar": [
      {
        question: 'هل خدمات الأتمتة قابلة للتخصيص لتناسب احتياجات عملي؟ ',
        answer: 'بالتأكيد! نحن نُخصص خدماتنا لتناسب احتياجات كل عميل بشكل دقيق، مما يضمن حلولًا متكاملة تلائم أهدافك ومتطلباتك.'
      },
      {
        question: 'ما هي القطاعات التي تخدمها حلولكم الذكية؟',
        answer: ' خدماتنا مرنة وشاملة وتتناسب مع جميع القطاعات.'
      },
      {
        question: 'كم من الوقت يستغرق تنفيذ الخدمات؟',
        answer: ' عادةً، يستغرق التنفيذ ما بين 3 إلى 7 أيام عمل، وذلك حسب حجم وتعقيد الخدمة المطلوبة.'
      },
      {
        question: 'هل أحتاج إلى مهارة تقنية للاستفادة من خدماتكم؟',
        answer: 'على الإطلاق! لا تحتاج لأي خبرة تقنية؛ فريقنا المختص سيتولى كل شيء، مما يضمن تجربة مريحة وخالية من التعقيدات.'
      },
      {
        question: 'هل يمكنكم تطوير حلول خاصة لمشاكل محددة في عملي؟',
        answer: ' نعم، نحن متخصصون في تصميم حلول مخصصة للتحديات الفريدة التي تواجه أعمالك.'
      },
      {
        question: 'هل تقدمون كفالة على الخدمات؟',
        answer: ' نعم، خدمتنا تشمل الكفالة طوال فترة الاشتراك، لضمان راحة العملاء وتوفير الدعم المطلوب باستمرار.'
      }
    ] 
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, isRTL, translations, whyChooseUsCards, portfolioSlides, faqs }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);