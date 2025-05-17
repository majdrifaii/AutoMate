import React, { useEffect, useRef, useState } from 'react';
import Logo from '../public/icon/autoMATE.png';
import { useLanguage } from './LanguageContext';
import { FaBars, FaChevronDown, FaFacebook, FaInstagram, FaLinkedin, FaBullhorn, FaRobot, FaShareAlt, FaClipboardList, FaCode } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { MdLocationPin } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { AiOutlineCloudServer } from 'react-icons/ai';

const Layout = ({ children }) => {
  const { currentLang, setCurrentLang, isRTL, translations } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const contactRef = useRef(null);
  let langDropdownTimeout;
  let serviceDropdownTimeout;
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-JYCY89H1PF', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceIcons = {
    'AI Automation': <AiOutlineCloudServer className="inline w-5 h-5 mr-2" />,
    'اتمتة الاعمال بالذكاء الاصطناعي': <AiOutlineCloudServer className="inline w-5 h-5 mr-2" />,
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
      <ScrollToTop />
      <header
        className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 ${isRTL ? "font-family-arabic" : "font-family-english"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to={"/"} className="flex items-center">
              <img src={Logo} alt="autoMATE" className="h-50" />
            </Link>

            {/* NAVIGATION - Centered & Evenly Spaced */}
            <div>
              <nav
                dir={isRTL ? "rtl" : "ltr"}
                className="hidden lg:flex flex-1 justify-between gap-6 mr-[120px]"
              >
                <Link
                  to="/"
                  className="text-secondary hover:text-accent transition-colors duration-200 font-medium cursor-pointer px-4"
                >
                  {isRTL ? "الرئيسية" : "Home"}
                </Link>
                <Link
                  to="/blogs"
                  className="text-secondary hover:text-accent transition-colors duration-200 font-medium cursor-pointer px-4"
                >
                  {isRTL ? "مقالات" : "Blogs"}
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                    clearTimeout(serviceDropdownTimeout);
                    setIsServiceDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    serviceDropdownTimeout = setTimeout(
                      () => setIsServiceDropdownOpen(false),
                      200
                    );
                  }}
                >
                  <button
                    className="text-secondary hover:text-accent transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap px-2 flex items-center"
                  >
                    {currentLang === "en" ? "Services" : "الخدمات"}
                    <FaChevronDown
                      className={`ml-1 w-3 h-3 transition-transform duration-200 ${isServiceDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isServiceDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-50 z-50">
                      {translations[currentLang].services.map((service, index) => (
                        <Link
                          key={index}
                          to={`/service/${service}/${index + 1}`}
                          className="block w-full text-left px-4 py-3 text-secondary hover:bg-gray-50 hover:text-accent transition-colors duration-200 cursor-pointer"
                        >
                          {serviceIcons[service]} {service}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  className="text-secondary hover:text-accent transition-colors duration-200 font-medium cursor-pointer px-4"
                  onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {isRTL ? "اتصل بنا" : "Contact Us"}
                </button>
              </nav>
            </div>

            {/* LANGUAGE SWITCHER - Always on the Right */}
            <div className="relative flex items-center justify-end w-[50px]" dir="ltr">
              <div
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(langDropdownTimeout);
                  setIsLangDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  langDropdownTimeout = setTimeout(() => setIsLangDropdownOpen(false), 200);
                }}
              >
                <button
                  className="hidden lg:block mr-[70px] text-secondary hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
                >
                  <span className="inline-flex items-center">
                    <FaGlobe className="text-xl mx-3" />
                    <FaChevronDown
                      className={`ml-1 w-3 h-3 transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </span>
                </button>

                {/* Language Dropdown */}
                <div
                  className={`absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50 ${isLangDropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    } transition-opacity duration-200`}
                >
                  <button
                    onClick={() => {
                      setCurrentLang("en");
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 ${currentLang === "en" ? "text-accent bg-gray-50" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-accent transition-colors duration-200`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setCurrentLang("ar");
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 ${currentLang === "ar" ? "text-accent bg-gray-50" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-accent transition-colors duration-200`}
                  >
                    العربية
                  </button>
                </div>
              </div>
              <button
                className="lg:hidden text-secondary hover:scale-105 hover:text-accent transition-all duration-300 cursor-pointer mx-7"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaBars className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden fixed top-20 left-0 right-0 bg-white z-50 border-b border-gray-200 ${currentLang === "en" ? "font-english" : "font-arabic"
              }`}
          >
            <div className="py-5">
              <Link
                to={"/"}
                className="w-full block py-4 text-secondary hover:text-accent hover:bg-gray-50 transition-colors duration-200 font-medium cursor-pointer px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentLang === "en" ? "Home" : "الرئيسية"}
              </Link>
              <Link
                to={"/blogs"}
                className="w-full block py-4 text-secondary hover:text-accent hover:bg-gray-50 transition-colors duration-200 font-medium cursor-pointer px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentLang === "en" ? "Blogs" : "مقالات"}
              </Link>
              <button
                className="w-full block py-4 text-left text-secondary hover:text-accent hover:bg-gray-50 transition-colors duration-200 font-medium cursor-pointer px-4"
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
              >
                {currentLang === "en" ? "Services" : "الخدمات"}
              </button>
              {isServiceDropdownOpen && (
                <>
                  {translations[currentLang].services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/service/${service}/${index + 1}`}
                      onClick={() => {
                        setIsServiceDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-10 py-2 text-secondary hover:bg-gray-50 hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      {serviceIcons[service]}
                      {service}
                    </Link>
                  ))}
                </>
              )}
              <div className="py-3 px-4 border-t border-gray-100">
                <div className="flex items-center ">
                  <span className="text-secondary ml-2 mr-5 font-medium"><FaGlobe /></span>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => {
                        setCurrentLang("en");
                        setIsMenuOpen(false);
                      }}
                      className={`${currentLang === "en" ? "text-accent" : "text-secondary"
                        } font-medium hover:text-accent transition-colors duration-200`}
                    >
                      ENG
                    </button>
                    <button
                      onClick={() => {
                        setCurrentLang("ar");
                        setIsMenuOpen(false);
                      }}
                      className={`${currentLang === "ar" ? "text-accent" : "text-secondary"
                        } font-medium hover:text-accent transition-colors duration-200`}
                    >
                      عربي
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="">{children}</main>

      <footer
  id="footer"
  className={`bg-white text-black text-center items-center py-16 ${currentLang === 'en' ? 'font-english' : 'font-arabic'}`}
  ref={contactRef}
>
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      <div className="flex flex-col justify-start items-center">
        <img src={Logo} alt="autoMATE" className="h-56 mb-3" />
      </div>
      <div>
        <h3
          className={`text-xl font-bold mb-4 ${currentLang === 'ar' ? 'font-arabic' : ''}`}
        >
          {translations[currentLang].footer.quickLinks}
        </h3>
        <ul className="space-y-2">
          {(currentLang === 'ar'
            ? ['الرئيسية','مقالات']
            : ['Home', 'Blogs']
          ).map((item, index) => (
            <li key={index}>
              <a
                href={
                  item === 'Home' || item === 'الرئيسية'
                    ? '/' // Link to services section
                    : item === 'Blogs' || item === 'مقالات'
                    ? '/blogs' // Link to blogs route
                    : '' // Default for Home
                }
                className={`text-gray-500 hover:text-accent transition-colors duration-200 cursor-pointer ${currentLang === 'ar' ? 'font-arabic' : ''}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3
          className={`text-xl font-bold mb-4 ${currentLang === 'ar' ? 'font-arabic' : ''}`}
        >
          {translations[currentLang].footer.contact}
        </h3>
        <ul className="space-y-2 text-gray-500">
          <li className={currentLang === 'ar' ? 'font-arabic' : ''}>
            <MdLocationPin className={`inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {currentLang === 'ar' ? ' سوريا، دمشق' : 'Syria, Damascus'}
          </li>
          <li>
            <FaPhoneVolume className={`inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
            +971 (055) 323-3469
          </li>
          <li>
            <FaPhoneVolume className={`inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
            +963 (095) 929-6714
          </li>
          <li>
            <MdEmail className={`inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
            Support@automate-sy.com
          </li>
        </ul>
      </div>
      <div>
        <h3
          className={`text-xl font-bold mb-4 ${currentLang === 'ar' ? 'font-arabic' : ''}`}
        >
          {translations[currentLang].footer.followUs}
        </h3>
        <div className="flex justify-center items-center space-x-10 mt-10">
          <a
            href=""
            className="text-gray-500 hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href=""
            className="text-gray-500 hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href=""
            className="text-gray-500 hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-500">
      <p className="whitespace-nowrap">© 2025 autoMATE. All rights reserved.</p>
    </div>
  </div>
</footer>
    </>
  );
};

export default Layout;