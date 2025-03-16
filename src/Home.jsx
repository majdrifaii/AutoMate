import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import Banner from './assets/banner.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { currentLang, isRTL, translations, whyChooseUsCards, portfolioSlides, faqs } = useLanguage();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
     
      {/* Hero Section */}
      <section
        className="pt-20 relative bg-cover bg-center min-h-[600px] flex items-center"
        style={{ backgroundImage: `url(${Banner})` }}
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
              <button className="bg-[#01C38D] hover:bg-[#00A677] text-white px-8 py-3 rounded-md transition-colors duration-200 cursor-pointer whitespace-nowrap">
                <i className={`fas fa-calendar-check ${isRTL ? 'ml-2' : 'mr-2'}`}></i>
                {translations[currentLang].hero.bookButton}
              </button>
              <button className="bg-white text-[#0051B6] px-8 py-3 rounded-md transition-colors duration-200 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
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
        <div className="w-11/12 mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Portfolio</h2>
          <Slider {...Settings}>
            {portfolioSlides.map((slide, index) => (
                <div className="items-center" key={index}>
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
            ))}
          </Slider>
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
              <button className="bg-white text-[#0051B6] px-6 py-4 rounded-md hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold whitespace-nowrap cursor-pointer">
                <i className={`fas fa-calendar-check ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                {currentLang === 'ar' ? 'احجز استشارة مجانية' : 'Book a Free Consultant'}
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-4 rounded-md hover:bg-white/10 transition-colors duration-200 text-lg font-semibold whitespace-nowrap cursor-pointer">
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
      {(currentLang === 'ar'
        ? [
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
            },
          ]
        : faqs
      ).map((faq, index) => (
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
</section>
    </div>
  );
};

export default Home;