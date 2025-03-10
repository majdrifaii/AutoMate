import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const isRTL = currentLang === 'ar';
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Arabic translations would be imported from a separate file in a real application
  const translations = {
    en: {
      nav: ['Home', 'Services', 'Portfolio', 'About Us', 'Contact'],
      hero: {
        title: 'Let the work be done autoMATE',
        subtitle: 'Empower your business with cutting-edge AI and automation solutions that drive efficiency and innovation.',
        consultation: 'Get a FREE personalized automation consultation',
        consultationDesc: 'Our experts will analyze your business processes and design a custom automation strategy - No commitment required',
        bookButton: 'Book Free Consultation',
        exploreButton: 'Explore Our Services'
      }
      // ... other translations
    },
    ar: {
      nav: ['الرئيسية', 'الخدمات', 'المشاريع', 'من نحن', 'اتصل بنا'],
      hero: {
        title: 'دع العمل يتم بواسطة autoMATE',
        subtitle: 'قم بتمكين عملك من خلال حلول الذكاء الاصطناعي والأتمتة المتطورة التي تدفع الكفاءة والابتكار.',
        consultation: 'احصل على استشارة مجانية مخصصة للأتمتة',
        consultationDesc: 'سيقوم خبراؤنا بتحليل عمليات عملك وتصميم استراتيجية أتمتة مخصصة - لا يلزم الالتزام',
        bookButton: 'احجز استشارة مجانية',
        exploreButton: 'استكشف خدماتنا'
      }
      // ... other translations
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const heroImage = 'https://public.readdy.ai/ai/img_res/dcd8c4f96bc0707c9568a71c38e0c019.jpg';

  const whyChooseUsCards = [
    {
      title: 'AI Expertise',
      description: 'Leading-edge artificial intelligence solutions tailored for enterprise needs',
      image: 'https://readdy.ai/api/search-image?query=futuristic artificial intelligence visualization with glowing neural networks and data streams, blue and teal color scheme on clean background&width=400&height=300&seq=2&orientation=landscape'
    },
    {
      title: 'Custom Automation',
      description: 'Streamlined workflow automation designed for your specific business processes',
      image: 'https://readdy.ai/api/search-image?query=modern robotic automation system with mechanical arms and digital interface, professional industrial setting with blue lighting&width=400&height=300&seq=3&orientation=landscape'
    },
    {
      title: 'Proven Results',
      description: '95% efficiency increase for our enterprise clients through smart automation',
      image: 'https://readdy.ai/api/search-image?query=business analytics dashboard with 3D charts and graphs showing positive growth, professional corporate style&width=400&height=300&seq=4&orientation=landscape'
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
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img src="/automate-logo.png" alt="autoMATE" className="h-12" />
            </div>
            <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
              {translations[currentLang].nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#01C38D] transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap px-2"
                >
                  {item}
                </a>
              ))}
              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-gray-700 hover:text-[#01C38D] transition-colors duration-200 font-medium cursor-pointer !rounded-button"
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                >
                  <span>{currentLang === 'en' ? 'ENG' : 'عربي'}</span>
                  <i className={`fas fa-chevron-${isLangDropdownOpen ? 'up' : 'down'} text-sm transition-transform duration-200`}></i>
                </button>
                {isLangDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50"
                    onMouseLeave={() => setIsLangDropdownOpen(false)}
                  >
                    <button
                      onClick={() => {
                        setCurrentLang('en');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 ${currentLang === 'en' ? 'text-[#01C38D] bg-gray-50' : 'text-gray-700'} hover:bg-gray-50 hover:text-[#01C38D] transition-colors duration-200`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setCurrentLang('ar');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 ${currentLang === 'ar' ? 'text-[#01C38D] bg-gray-50' : 'text-gray-700'} hover:bg-gray-50 hover:text-[#01C38D] transition-colors duration-200`}
                    >
                      العربية
                    </button>
                  </div>
                )}
              </div>
            </nav>
            <button
              className="md:hidden text-gray-600 hover:text-gray-900 cursor-pointer !rounded-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-white z-40 border-b border-gray-200">
          <div className="px-4 py-2">
            {['Home', 'Services', 'Portfolio', 'About Us', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-gray-700 hover:text-[#01C38D] transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="py-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Language</span>
                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      setCurrentLang('en');
                      setIsMenuOpen(false);
                    }}
                    className={`${currentLang === 'en' ? 'text-[#01C38D]' : 'text-gray-700'} font-medium hover:text-[#01C38D] transition-colors duration-200`}
                  >
                    ENG
                  </button>
                  <button
                    onClick={() => {
                      setCurrentLang('ar');
                      setIsMenuOpen(false);
                    }}
                    className={`${currentLang === 'ar' ? 'text-[#01C38D]' : 'text-gray-700'} font-medium hover:text-[#01C38D] transition-colors duration-200`}
                  >
                    عربي
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section
        className="pt-20 relative bg-cover bg-center min-h-[600px] flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0051B6]/90 to-transparent rtl:bg-gradient-to-l"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`max-w-2xl text-white ${isRTL ? 'mr-0 ml-auto' : ''}`}>
            <h1 className={`text-5xl font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}>{translations[currentLang].hero.title}</h1>
            <p className={`text-xl mb-4 ${isRTL ? 'font-arabic' : ''}`}>{translations[currentLang].hero.subtitle}</p>
            <div className="bg-white/10 border border-white/20 rounded-lg p-4 mb-8">
              <p className={`text-lg mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                <i className={`fas fa-star text-[#01C38D] ${isRTL ? 'ml-2' : 'mr-2'}`}></i>
                {translations[currentLang].hero.consultation}
              </p>
              <p className={`text-white/80 text-sm ${isRTL ? 'font-arabic' : ''}`}>{translations[currentLang].hero.consultationDesc}</p>
            </div>
            <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''}`}>
              <button className="bg-[#01C38D] hover:bg-[#00A677] text-white px-8 py-3 rounded-button transition-colors duration-200 cursor-pointer whitespace-nowrap">
                <i className={`fas fa-calendar-check ${isRTL ? 'ml-2' : 'mr-2'}`}></i>
                {translations[currentLang].hero.bookButton}
              </button>
              <button className="bg-white text-[#0051B6] px-8 py-3 rounded-button transition-colors duration-200 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                {translations[currentLang].hero.exploreButton}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
            {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Customer Service Bot Card */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
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
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/9de32b0c481375965df8fe596dad35f5.jpg"
                  alt={currentLang === 'ar' ? 'روبوت خدمة العملاء الذكي' : 'AI Customer Service Bot'}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'روبوت خدمة العملاء الذكي' : 'AI Customer Service Bot'}
              </h3>
              <p className={`text-gray-600 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar'
                  ? 'دعم عملاء ذكي على مدار الساعة مع معالجة اللغة الطبيعية وقدرات تكامل سلسة.'
                  : '24/7 intelligent customer support with natural language processing and seamless integration capabilities.'}
              </p>
              <button className={`mt-4 bg-[#0051B6] text-white px-6 py-2 rounded-button hover:bg-[#003E8C] transition-colors duration-200 whitespace-nowrap ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
            {/* Marketing Campaigns Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/9326f3e0672ce529ee70dc3103181e3b.jpg"
                  alt={currentLang === 'ar' ? 'حملات تسويقية' : 'Marketing Campaigns'}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'حملات تسويقية' : 'Marketing Campaigns'}
              </h3>
              <p className={`text-gray-600 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar'
                  ? 'استراتيجيات تسويقية قائمة على البيانات مع استهداف وتحسين مدعوم بالذكاء الاصطناعي لتحقيق أقصى عائد على الاستثمار.'
                  : 'Data-driven marketing strategies with AI-powered targeting and optimization for maximum ROI.'}
              </p>
              <button className={`mt-4 bg-[#0051B6] text-white px-6 py-2 rounded-button hover:bg-[#003E8C] transition-colors duration-200 whitespace-nowrap ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
            {/* Social Media Management Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/dc33de7106e78c4f4ef31fa1354447ee.jpg"
                  alt={currentLang === 'ar' ? 'إدارة وسائل التواصل الاجتماعي' : 'Social Media Management'}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'إدارة وسائل التواصل الاجتماعي' : 'Social Media Management'}
              </h3>
              <p className={`text-gray-600 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar'
                  ? 'استراتيجية شاملة لوسائل التواصل الاجتماعي مع جدولة المحتوى وتحليلات المشاركة المدعومة بالذكاء الاصطناعي.'
                  : 'Comprehensive social media strategy with AI-powered content scheduling and engagement analytics.'}
              </p>
              <button className={`mt-4 bg-[#0051B6] text-white px-6 py-2 rounded-button hover:bg-[#003E8C] transition-colors duration-200 whitespace-nowrap ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
            {/* Startup Business Plans Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/eb957365196a5fcdf7064c4b66cad664.jpg"
                  alt={currentLang === 'ar' ? 'خطط الأعمال للشركات الناشئة' : 'Startup Business Plans'}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'خطط الأعمال للشركات الناشئة' : 'Startup Business Plans'}
              </h3>
              <p className={`text-gray-600 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar'
                  ? 'تخطيط استراتيجي للأعمال مع تحليل السوق ورؤى مدفوعة بالذكاء الاصطناعي للشركات الناشئة.'
                  : 'Strategic business planning with AI-driven market analysis and insights for startups.'}
              </p>
              <button className={`mt-4 bg-[#0051B6] text-white px-6 py-2 rounded-button hover:bg-[#003E8C] transition-colors duration-200 whitespace-nowrap ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
            {/* Web Development Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/58b63728bb5fcf827c08164b4632d70d.jpg"
                  alt={currentLang === 'ar' ? 'تطوير المواقع الإلكترونية' : 'Web Development'}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'تطوير المواقع الإلكترونية' : 'Web Development'}
              </h3>
              <p className={`text-gray-600 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar'
                  ? 'حلول ويب مخصصة مع تصميم متجاوب ووظائف متقدمة للشركات الحديثة.'
                  : 'Custom web solutions with responsive design and advanced functionality for modern businesses.'}
              </p>
              <button className={`mt-4 bg-[#0051B6] text-white px-6 py-2 rounded-button hover:bg-[#003E8C] transition-colors duration-200 whitespace-nowrap ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
            {/* Content Creation Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/b89b76f1659adb1bff50b2746859fc55.jpg"
                  alt={currentLang === 'ar' ? 'إنشاء المحتوى' : 'Content Creation'}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'إنشاء المحتوى' : 'Content Creation'}
              </h3>
              <p className={`text-gray-600 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar'
                  ? 'إنشاء وتحسين المحتوى المدعوم بالذكاء الاصطناعي للمحتوى الرقمي الجذاب والمتوافق مع محركات البحث.'
                  : 'AI-powered content creation and optimization for engaging, SEO-friendly digital content.'}
              </p>
              <button className={`mt-4 bg-[#0051B6] text-white px-6 py-2 rounded-button hover:bg-[#003E8C] transition-colors duration-200 whitespace-nowrap ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
            {currentLang === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {(currentLang === 'ar' ? whyChooseUsCards.map(card => ({
              ...card,
              title: card.title === 'AI Expertise' ? 'خبرة الذكاء الاصطناعي' :
                card.title === 'Custom Automation' ? 'أتمتة مخصصة' :
                'نتائج مثبتة',
              description: card.title === 'AI Expertise' ? 'حلول ذكاء اصطناعي متطورة مصممة خصيصاً لاحتياجات المؤسسات' :
                card.title === 'Custom Automation' ? 'أتمتة سير العمل المبسطة المصممة لعملياتك التجارية المحددة' :
                'زيادة الكفاءة بنسبة 95٪ لعملائنا من المؤسسات من خلال الأتمتة الذكية'
            })) : whyChooseUsCards).map((card, index) => (
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
      </section>
      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Portfolio</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="portfolio-slider"
          >
            {portfolioSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-gray-600 text-lg mb-6">{slide.description}</p>
                    <button className="bg-[#0051B6] text-white px-6 py-3 rounded-button hover:bg-[#003E8C] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                      Learn More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Ready to Automate Section */}
      <section className="py-20 bg-gradient-to-r from-[#0051B6] to-[#01C38D]">
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
                <div className="text-[#01C38D]">
                  <i className="fas fa-gift text-3xl"></i>
                </div>
                <div className={`${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-xl font-bold mb-2 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                    {currentLang === 'ar' ? 'استشارة مجانية لأتمتة الأعمال' : 'Free Business Automation Consultation'}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className={`fas fa-check text-[#01C38D] ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                      {currentLang === 'ar' ? 'تحليل شامل لعمليات الأعمال' : 'Comprehensive business process analysis'}
                    </li>
                    <li className="flex items-center">
                      <i className={`fas fa-check text-[#01C38D] ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                      {currentLang === 'ar' ? 'تصميم استراتيجية أتمتة مخصصة' : 'Custom automation strategy design'}
                    </li>
                    <li className="flex items-center">
                      <i className={`fas fa-check text-[#01C38D] ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                      {currentLang === 'ar' ? 'توقعات العائد على الاستثمار وخارطة طريق التنفيذ' : 'ROI projection and implementation roadmap'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-[#0051B6] px-8 py-4 rounded-button hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold whitespace-nowrap">
                <i className={`fas fa-calendar-check ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                {currentLang === 'ar' ? 'احجز استشارة مجانية' : 'Book a Free Consultant'}
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-button hover:bg-white/10 transition-colors duration-200 text-lg font-semibold whitespace-nowrap">
                <i className={`fas fa-phone-alt ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                {currentLang === 'ar' ? 'اتصل بالمبيعات' : 'Contact Sales'}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
            {currentLang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <div className="max-w-3xl mx-auto">
            {(currentLang === 'ar' ? [
              {
                question: 'ما هي الخدمات التي تقدمها autoMATE؟',
                answer: 'نقدم حلولاً شاملة للذكاء الاصطناعي والأتمتة تشمل أتمتة العمليات وتنفيذ التعلم الآلي وتطوير الذكاء الاصطناعي المخصص للمؤسسات.'
              },
              {
                question: 'كيف يمكن للأتمتة أن تفيد عملي؟',
                answer: 'يمكن للأتمتة أن تقلل بشكل كبير من تكاليف التشغيل وتحسن الكفاءة وتقلل الأخطاء وتسمح لفريقك بالتركيز على المهام الاستراتيجية بدلاً من العمليات المتكررة.'
              },
              {
                question: 'ما هي القطاعات التي تخدمونها؟',
                answer: 'نخدم مجموعة واسعة من القطاعات بما في ذلك التصنيع والمالية والرعاية الصحية والتجزئة وقطاعات التكنولوجيا مع حلول أتمتة مخصصة.'
              },
              {
                question: 'كم من الوقت يستغرق التنفيذ عادةً؟',
                answer: 'تختلف مدة التنفيذ بناءً على نطاق المشروع، وتتراوح عادةً بين 2-6 أشهر. نحن نضمن الحد الأدنى من التعطيل لعملياتك الحالية.'
              }
            ] : faqs).map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className={`w-full ${currentLang === 'ar' ? 'text-right' : 'text-left'} p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer !rounded-button`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={`flex justify-between items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span className={`font-semibold text-lg ${currentLang === 'ar' ? 'font-arabic' : ''}`}>{faq.question}</span>
                    <i className={`fas ${activeAccordion === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-[#01C38D]`}></i>
                  </div>
                  {activeAccordion === index && (
                    <p className={`mt-4 text-gray-600 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>{faq.answer}</p>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0051B6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/automate-logo-white.png" alt="autoMATE" className="h-12 mb-6" />
              <p className={`text-gray-300 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar'
                  ? 'تحويل الأعمال من خلال الأتمتة الذكية وحلول الذكاء الاصطناعي.'
                  : 'Transforming businesses through intelligent automation and AI solutions.'}
              </p>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-4 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="space-y-2">
                {(currentLang === 'ar' ? ['الرئيسية', 'الخدمات', 'المشاريع', 'من نحن', 'اتصل بنا'] : ['Home', 'Services', 'Portfolio', 'About Us', 'Contact']).map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase()}`} className={`text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-4 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'اتصل بنا' : 'Contact'}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className={currentLang === 'ar' ? 'font-arabic' : ''}>
                  <i className={`fas fa-map-marker-alt ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                  {currentLang === 'ar' ? '123 شارع الابتكار، مدينة التقنية' : '123 Innovation Drive, Tech City'}
                </li>
                <li>
                  <i className={`fas fa-phone ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                  +1 (555) 123-4567
                </li>
                <li>
                  <i className={`fas fa-envelope ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                  info@automate.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-4 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {currentLang === 'ar' ? 'تابعنا' : 'Follow Us'}
              </h3>
              <div className={`flex ${currentLang === 'ar' ? 'space-x-reverse' : 'space-x-4'}`}>
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="text-white hover:text-[#01C38D] transition-colors duration-200 cursor-pointer"
                  >
                    <i className={`fab fa-${social} text-2xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
            <p className="whitespace-nowrap">© 2025 autoMATE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;