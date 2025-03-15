import React, { createContext, useState, useContext } from 'react';
import Robot from './assets/Robot.png';
import Manage from './assets/Manage.png';
import Content from './assets/Content.png';

// Create the context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const isRTL = currentLang === 'ar';

  const translations = {
    en: {
      nav: ['Home', 'Services'],
      footer: {
        quickLinks: 'Quick Links',
        contact: 'Contact',
        followUs: 'Follow Us',
        description: 'Transforming businesses through intelligent automation and AI solutions.',
      },
      hero: {
        title: 'Let the work be done autoMATE',
        subtitle: 'Empower your business with cutting-edge AI and automation solutions that drive efficiency and innovation.',
        consultation: 'Get a FREE personalized automation consultation',
        consultationDesc: 'Our experts will analyze your business processes and design a custom automation strategy - No commitment required',
        bookButton: 'Book Free Consultation',
        exploreButton: 'Explore Our Services'
      }
    },
    ar: {
      nav: ['الرئيسية', 'الخدمات'],
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
      }
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

  const portfolioSlides = [
    {
      title: 'Enterprise AI Integration',
      description: 'Implemented AI-driven analytics for Fortune 500 company',
      image: 'https://public.readdy.ai/ai/img_res/29ed0293f5959ad198b5c0c8f3d06345.jpg'
    },
    {
      title: 'Smart Factory Automation',
      description: 'Reduced operational costs by 40% through intelligent automation',
      image: 'https://public.readdy.ai/ai/img_res/bdef1af01cb1bc5ed6a1fde946a1ee3f.jpg'
    },
    {
      title: 'Data Processing Optimization',
      description: 'Streamlined data processing for major financial institution',
      image: 'https://public.readdy.ai/ai/img_res/4a65c734ed3b5030f1156ffe0eef7294.jpg'
    }
  ];

  const faqs = [
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
  ];

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, isRTL, translations, whyChooseUsCards, portfolioSlides, faqs }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);