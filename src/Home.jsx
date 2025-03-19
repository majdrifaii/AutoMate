import React, { useRef, useState } from 'react';
import { useLanguage } from './LanguageContext';
import Banner from './assets/banner.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import services from '../public/data/services.json';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaCalendarCheck, FaCheck, FaGift, FaPhoneAlt } from 'react-icons/fa';

const Home = () => {
  const { currentLang, isRTL, translations, whyChooseUsCards, portfolioSlides, faqs } = useLanguage();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const serviceRef = useRef(null);
  
    const scrollToService = () => {
      serviceRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl font-arabic' : 'ltr font-english'}`} dir={isRTL ? 'rtl' : 'ltr'}>
     
      {/* Hero Section */}
      <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
        className="pt-20 relative bg-cover bg-center min-h-[600px] flex items-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0051B6]/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 py-7 relative z-10">
          <div className={`max-w-2xl text-white ${isRTL ? 'mr-0 ml-auto' : ''}`}>
            <h1 className={`text-5xl font-semibold mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`}>{translations[currentLang].hero.title}</h1>
            <p className={`text-xl mb-4 ${isRTL ? 'font-arabic' : ''}`}>{translations[currentLang].hero.subtitle}</p>
            <div className="bg-white/10 border border-white/20 rounded-lg p-4 mb-8">
              <p className={`text-lg mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                <i className={`fas fa-star text-[#01C38D] ${isRTL ? 'ml-2' : 'mr-2'}`}></i>
                {translations[currentLang].hero.consultation}
              </p>
              <p className={`text-white/80 text-sm ${isRTL ? 'font-arabic' : ''}`}>{translations[currentLang].hero.consultationDesc}</p>
            </div>
            <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''}`}>
              <button className="bg-[#01C38D] hover:bg-[#00A677] text-white px-8 py-3 rounded-md transition-colors duration-200 cursor-pointer whitespace-nowrap">
                <FaCalendarCheck className={`inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {translations[currentLang].hero.bookButton}
              </button>
              <button className="bg-white text-[#0051B6] px-8 py-3 rounded-md transition-colors duration-200 hover:bg-gray-100 cursor-pointer whitespace-nowrap" onClick={scrollToService}>
                {translations[currentLang].hero.exploreButton}
              </button>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Services Section */}
      <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} 
      className="py-20 bg-white" ref={serviceRef}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
            {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[currentLang].map((service, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {index === 2 &&
                <>
              {currentLang === 'ar' && (
                <div className="absolute -left-3">
                  <span className="bg-[#01C38D] text-white px-4 py-1 rounded-full text-sm font-medium font-arabic">
                    الأكثر مبيعاً
                  </span>
                </div>
              )}
              {currentLang === 'en' && (
                <div className="absolute -left-3">
                  <span className="bg-[#01C38D] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Best Seller
                  </span>
                </div>
              )}
              </>
            }
              <div className="mb-4 h-52 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className='h-44 md:h-36'>
              <h3 className={`text-xl font-bold mb-3 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {service.name}
              </h3>
              <p className={`text-gray-600 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {service.title}
              </p>
              </div>
              <Link to={`/service/${service.name}/${service.id}`} className={`text-secondary hover:text-accent px-6 py-2 rounded-md transition-colors duration-200 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? (
                  <>
                 اعرف المزيد
                 <FaArrowLeft className="inline mr-2 -ml-1 w-5 h-4" />
                 </>
                ) : (
                  <>
                  Learn More
                  <FaArrowRight className="inline ml-2 -mr-1 w-5 h-4" />
                  </>
                 )}
              </Link>
            </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Why Choose Us Section */}
      <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
       className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
            {currentLang === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUsCards[currentLang].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>{card.title}</h3>
                  <p className={`text-gray-600 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Portfolio Section */}
      <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="lg:w-11/12 lg:mx-auto lg:px-5">
        <h2 className="text-4xl font-bold text-center mb-10">About Us</h2>
        <Slider {...Settings}>
          {portfolioSlides[currentLang].map((slide, index) => (
            <div className="rounded-lg relative w-full" key={index}>
              {/* Text container above the image */}
              <div className={`absolute top-10 w-1/2 md:w-1/4 ${index === 3 ? 'right-20' : 'left-20'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-5xl text-white font-bold">{slide.title}</h3>
                <p className={`text-white ${index === 3 ? 'text-sm sm:text-base md:text-lg lg:text-2xl' : 'text-base sm:text-lg md:text-xl lg:text-3xl'}`}>{slide.description}</p>
              </div>
              {/* Image */}
              <img
                src={slide.image}
                alt={index} // Use title as alt text if available
                className="w-full object-cover h-[500px] rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
      {/* Ready to Automate Section */}
      <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-r from-[#0051B6] to-[#01C38D]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-4xl font-bold text-white mb-6 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
              {currentLang === 'ar' ? 'هل أنت مستعد لتحويل عملك؟' : 'Ready to Transform Your Business?'}
            </h2>
            <p className={`text-xl text-white/90 mb-6 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
              {currentLang === 'ar'
                ? 'انضم إلى آلاف الشركات التي تثق في autoMATE لإحداث ثورة في عملياتها من خلال حلول مدعومة بالذكاء الاصطناعي.'
                : 'Join thousands of businesses that trust autoMATE to revolutionize their operations with AI-powered solutions.'}
            </p>
            <div className="bg-white/10 rounded-lg p-6 mb-12 max-w-2xl mx-auto">
              <div className={`flex items-start ${currentLang === 'ar' ? 'space-x-reverse' : 'space-x-4'}`}>
                <div className="text-white">
                  <FaGift className="text-3xl" />
                </div>
                <div className={`text-white ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-xl font-bold mb-2 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                    {currentLang === 'ar' ? 'استشارة مجانية لأتمتة الأعمال' : 'Free Business Automation Consultation'}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FaCheck className={`text-[#01C38D] ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {currentLang === 'ar' ? 'تحليل شامل لعمليات الأعمال' : 'Comprehensive business process analysis'}
                    </li>
                    <li className="flex items-center">
                    <FaCheck className={`text-[#01C38D] ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {currentLang === 'ar' ? 'تصميم استراتيجية أتمتة مخصصة' : 'Custom automation strategy design'}
                    </li>
                    <li className="flex items-center">
                    <FaCheck className={`text-[#01C38D] ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {currentLang === 'ar' ? 'توقعات العائد على الاستثمار وخارطة طريق التنفيذ' : 'ROI projection and implementation roadmap'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-secondary px-6 py-4 rounded-md hover:bg-gray-200 transition-colors duration-200 text-lg font-semibold whitespace-nowrap cursor-pointer">
              <FaCalendarCheck className={`inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {currentLang === 'ar' ? 'احجز استشارة مجانية' : 'Book a Free Consultant'}
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-4 rounded-md hover:bg-white/20 transition-colors duration-200 text-lg font-semibold whitespace-nowrap cursor-pointer">
              <FaPhoneAlt className={`inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {currentLang === 'ar' ? 'اتصل بالمبيعات' : 'Contact Sales'}
              </button>
            </div>
          </div>
        </div>
      </motion.section>
      {/* FAQ Section */}
      <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className={`text-4xl font-bold text-center mb-16 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
      {currentLang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
    </h2>
    <div className="max-w-5xl mx-auto">  
      {faqs[currentLang].map((faq, index) => (
        <div key={index} className="mb-4 shadow-md rounded-lg">
          <button
            className={`w-full ${currentLang === 'ar' ? 'text-right' : 'text-left'} p-6 bg-white cursor-pointer`}
            onClick={() => toggleAccordion(index)}
          >
            <div className={`flex justify-between items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <span className={`font-semibold text-lg ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {faq.question}
              </span>
              <i
                className={`fas ${activeAccordion === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-[#01C38D]`}
              ></i>
            </div>
          </button>
          {/* Answer with Transition */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              activeAccordion === index
                ? 'max-h-40 opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-2'
            }`}
          >
            <p className={`p-6 bg-white text-gray-600 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.section>
    </div>
  );
};

export default Home;