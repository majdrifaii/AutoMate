// Layout.jsx
import React, { useRef, useState } from 'react';
import Logo from '../public/icon/autoMATE.png';
import { useLanguage } from './LanguageContext';
import { FaBars, FaChevronUp, FaChevronDown, FaFacebook, FaInstagram, FaLinkedin, FaPen, FaBullhorn, FaRobot, FaShareAlt, FaClipboardList, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const { currentLang, setCurrentLang, isRTL, translations, scrollToAbout} = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceIcons = {
    'Content Creation': <FaPen className="inline w-5 h-5 mr-2" />,
    'إنشاء المحتوى': <FaPen className="inline w-5 h-5 mr-2" />,
    'Marketing Campaigns': <FaBullhorn className="inline w-5 h-5 mr-2" />,
    'حملات تسويقية': <FaBullhorn className="inline w-5 h-5 mr-2" />,
    'AI Customer Service Bot': <FaRobot className="inline w-5 h-5 mr-2" />,
    'روبوت خدمة العملاء الذكي': <FaRobot className="inline w-5 h-5 mr-2" />,
    'Social Media Management': <FaShareAlt className="inline w-5 h-5 mr-2" />,
    'إدارة وسائل التواصل الاجتماعي': <FaShareAlt className="inline w-5 h-5 mr-2" />,
    'Startup Business Plans': <FaClipboardList className="inline w-5 h-5 mr-2" />,
    'خطط الأعمال للشركات الناشئة': <FaClipboardList className="inline w-5 h-5 mr-2" />,
    'Web Development': <FaCode className="inline w-5 h-5 mr-2" />,
    'تطوير المواقع الإلكترونية': <FaCode className="inline w-5 h-5 mr-2" />,
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 ${currentLang === 'en' ? 'font-english' : 'font-arabic'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img src={Logo} alt="autoMATE" className="h-44" />
            </div>
            <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-10'}`}>
                <Link
                  to={'/'}
                  className="text-gray-700 hover:text-[#01C38D] transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap px-2"
                >
                  {currentLang === 'en' ? 'Home' : 'الرئيسية'}
                </Link>
                <button
                  className="text-gray-700 hover:text-[#01C38D] transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap px-2"
                  onClick={scrollToContact}
                >
                  {currentLang === 'en' ? 'Contact Us' : 'اتصل بنا'}
                </button>
                <button
                  className="text-gray-700 hover:text-[#01C38D] transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap px-2"
                  onClick={scrollToAbout}
                >
                  {currentLang === 'en' ? 'About Us' : 'من نحن'}
                </button>

                <div className='relative'>
                <button
                  className="text-gray-700 hover:text-[#01C38D] transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap px-2"
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                >
                  {currentLang === 'en' ? 'Services' : 'الخدمات'}
                </button>
                {isServiceDropdownOpen && (
                  <div
                    className="absolute -left-28 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50"
                    // onMouseLeave={() => setIsServiceDropdownOpen(false)}
                  >
                    {translations[currentLang].services.map((service, index) => (
                    <Link
                    key={index}
                    to={`/service/${service}`}
                      onClick={() => {
                        setIsServiceDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-[#01C38D] transition-colors duration-200 cursor-pointer`}
                    >
                      {serviceIcons[service]}
                      {service}
                    </Link>
                    ))}
                  </div>
                )}
                </div>





              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-gray-700 hover:text-[#01C38D] transition-colors duration-200 font-medium cursor-pointer mx-5"
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                >
                  <span>{currentLang === 'en' ? 'ENG' : 'عربي'}</span>
                  {isLangDropdownOpen ? <FaChevronUp className='text-sm transition-transform duration-200' /> : <FaChevronDown className='text-sm transition-transform duration-200' />}
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
              className="md:hidden text-accent hover:scale-110 transition-all duration-300 cursor-pointer mx-7"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden fixed top-20 left-0 right-0 bg-white z-40 border-b border-gray-200 ${currentLang === 'en' ? 'font-english' : 'font-arabic'}`}>
          <div className="py-5">
              <Link
                  to={'/'}
                  className="w-full block py-4 text-gray-700 hover:text-[#01C38D] hover:bg-gray-50 transition-colors duration-200 font-medium cursor-pointer px-4"
                >
                  {currentLang === 'en' ? 'Home' : 'الرئيسية'}
                </Link>
                <button
                  className="w-full block py-4 text-left text-gray-700 hover:text-[#01C38D] hover:bg-gray-50 transition-colors duration-200 font-medium cursor-pointer px-4"
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                >
                  {currentLang === 'en' ? 'Services' : 'الخدمات'}
                </button>
                {isServiceDropdownOpen && (
                  <>
                  {translations[currentLang].services.map((service, index) => (
                    <Link
                    key={index}
                    to={`/service/${service}`}
                      onClick={() => {
                        setIsServiceDropdownOpen(false);
                        setIsMenuOpen(false)
                      }}
                      className={`block w-full text-left px-10 py-2 hover:bg-gray-50 hover:text-[#01C38D] transition-colors duration-200 cursor-pointer`}
                    >
                      {serviceIcons[service]}
                      {service}
                    </Link>
                    ))}
                  </>
                )}
            <div className="py-3 px-4 border-t border-gray-100">
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

      <main className="">{children}</main>

      <footer className={`bg-[#0051B6] text-white py-16 ${currentLang === 'en' ? 'font-english' : 'font-arabic'}`} ref={contactRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={Logo} alt="autoMATE" className="h-44 mb-6" />
              <p className={`text-gray-300 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {translations[currentLang].footer.description}
              </p>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-4 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {translations[currentLang].footer.quickLinks}
              </h3>
              <ul className="space-y-2">
                {(currentLang === 'ar' ? ['الرئيسية', 'الخدمات'] : ['Home', 'Services']).map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer ${currentLang === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-4 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
                {translations[currentLang].footer.contact}
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
                {translations[currentLang].footer.followUs}
              </h3>
              <div className="flex space-x-6">
                  <a
                    href=''
                    className="text-white hover:text-[#01C38D] transition-colors duration-200 cursor-pointer"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href=""
                    className="text-white hover:text-[#01C38D] transition-colors duration-200 cursor-pointer"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href=""
                    className="text-white hover:text-[#01C38D] transition-colors duration-200 cursor-pointer"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
            <p className="whitespace-nowrap">© 2025 autoMATE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;