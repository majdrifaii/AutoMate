import { Link, useParams } from "react-router-dom";
import services from '../public/data/services.json';
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from "./LanguageContext";

const Service = () => {
    const { currentLang, isRTL } = useLanguage();
    const { id } = useParams();
    const service = services[currentLang].find((service) => service.id == id);

    if(!service){
        return (
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                    Service Not Available
                </h1>
            </main>
        )
    }

    return ( 
        <div className={`pt-20 bg-slate-50 ${isRTL ? 'rtl font-arabic' : 'ltr font-english'}`} dir={isRTL ? 'rtl' : 'ltr'}>
           <section className="bg-white">
            <div className="gap-8 items-center py-8 px-4 mx-auto w-11/12 xl:gap-16 grid lg:grid-cols-2 sm:py-10 lg:px-6">
                <img className="w-full lg:h-full object-cover rounded-md" src={service.image} alt={service.name} />
                <div className="mt-4 md:mt-0">
                    <h1 className="mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-secondary">{service.name}</h1>
                    {service.description.map((des, index) => (
                        <p key={index} className="my-1.5 font-light text-gray-500 md:text-lg">{des}</p>
                    ))}
                    <button className="inline-flex items-center text-white bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer mt-5 hover:bg-accent transition-colors duration-300">
                    {currentLang === 'en' ? (
                            <>
                            Get Started
                            <FaArrowRight className="ml-2 -mr-1 w-5 h-4" />
                            </>
                        ) : (
                            <>
                            ابدأ الآن
                            <FaArrowLeft className="mr-2 -ml-1 w-5 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
        <div className="w-11/12 xl:max-w-screen-xl mx-auto mt-5 mb-10 py-10">
        <h1 className="title text-3xl mb-10 font-bold">{currentLang === 'en' ? "Related Services" : "الخدمات ذات الصلة"}</h1>
        <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 lg:grid-cols-4">
            {services[currentLang].filter((service) => service.id != id).slice(0, 4).map((service) => (
                <div key={service.id} className=" bg-white border border-gray-200 rounded-lg shadow-sm"> 
                    <div className="">
                        <img className="w-full rounded-tl-md rounded-tr-md" src={service.image} alt={service.name} />
                    </div>
                    <div className="p-5">
                        <div className="h-20">
                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900">{service.name}</h5>
                        </div>
                        <Link to={`/service/${service.name}/${service.id}`} className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-secondary rounded-lg hover:text-accent">
                        {currentLang === 'en' ? (
                            <>
                            Read more
                            <FaArrowRight className="ml-2 -mr-1 w-5 h-4" />
                            </>
                        ) : (
                            <>
                            اقرأ المزيد
                            <FaArrowLeft className="mr-2 -ml-1 w-5 h-4" />
                            </>
                        )}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </div>
        </div>
     );
}
 
export default Service;