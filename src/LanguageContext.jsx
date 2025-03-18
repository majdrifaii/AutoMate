import React, { createContext, useState, useContext, useRef } from 'react';
import Robot from './assets/Robot.png';
import Manage from './assets/Manage.png';
import Content from './assets/Content.png';

// Create the context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const isRTL = currentLang === 'ar';
  const AboutRef = useRef(null);

  const scrollToAbout = () => {
    AboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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

  const whyChooseUsCards = [
    {
      title: 'AI Expertise',
      description: 'Leading-edge artificial intelligence solutions tailored for enterprise needs',
      image: Robot
    },
    {
      title: 'Custom Automation',
      description: 'Streamlined workflow automation designed for your specific business processes',
      image: Manage
    },
    {
      title: 'Proven Results',
      description: '95% efficiency increase for our enterprise clients through smart automation',
      image: Content
    }
  ];

  const portfolioSlides = {
    "en": [
      "/src/assets/english portfolio/1.png", "/src/assets/english portfolio/2.png", "/src/assets/english portfolio/3.png", "/src/assets/english portfolio/4.png", "/src/assets/english portfolio/5.png"
    ],
    "ar": [
      "/src/assets/arabic portfolio/1.png", "/src/assets/arabic portfolio/2.png", "/src/assets/arabic portfolio/3.png", "/src/assets/arabic portfolio/4.png", "/src/assets/arabic portfolio/5.png"
    ]
  }

  const faqs = {
    "en": [
      {
        question: 'What services does autoMATE offer?',
        answer: 'We provide comprehensive AI and automation solutions including process automation, machine learning implementation, and custom AI development for enterprises.'
      },
      {
        question: 'How can automation benefit my business?',
        answer: 'Automation can significantly reduce operational costs, improve efficiency, minimize errors, and allow your team to focus on strategic tasks rather than repetitive processes.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including manufacturing, finance, healthcare, retail, and technology sectors with customized automation solutions.'
      },
      {
        question: 'How long does implementation typically take?',
        answer: 'Implementation timeline varies based on project scope, typically ranging from 2-6 months. We ensure minimal disruption to your existing operations.'
      }
    ],
    "ar": [
      {
        question: 'ما هي الخدمات التي تقدمها autoMATE؟',
        answer:
          'نقدم حلولاً شاملة للذكاء الاصطناعي والأتمتة تشمل أتمتة العمليات وتنفيذ التعلم الآلي وتطوير الذكاء الاصطناعي المخصص للمؤسسات.',
      },
      {
        question: 'كيف يمكن للأتمتة أن تفيد عملي؟',
        answer:
          'يمكن للأتمتة أن تقلل بشكل كبير من تكاليف التشغيل وتحسن الكفاءة وتقلل الأخطاء وتسمح لفريقك بالتركيز على المهام الاستراتيجية بدلاً من العمليات المتكررة.',
      },
      {
        question: 'ما هي القطاعات التي تخدمونها؟',
        answer:
          'نخدم مجموعة واسعة من القطاعات بما في ذلك التصنيع والمالية والرعاية الصحية والتجزئة وقطاعات التكنولوجيا مع حلول أتمتة مخصصة.',
      },
      {
        question: 'كم من الوقت يستغرق التنفيذ عادةً؟',
        answer:
          'تختلف مدة التنفيذ بناءً على نطاق المشروع، وتتراوح عادةً بين 2-6 أشهر. نحن نضمن الحد الأدنى من التعطيل لعملياتك الحالية.',
      }
    ] 
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, isRTL, translations, whyChooseUsCards, portfolioSlides, faqs, scrollToAbout, AboutRef }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);