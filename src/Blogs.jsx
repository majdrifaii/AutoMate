import { Link } from "react-router-dom";
import blogs from '../public/data/blogs.json';
import { useLanguage } from "./LanguageContext";
import { FaArrowLeft, FaArrowRight, FaRobot } from "react-icons/fa";

const Blogs = () => {
      const { currentLang, isRTL } = useLanguage();

    return ( 
        <section className="bg-slate-50" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="px-4 mx-auto max-w-screen-xl py-28 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-secondary">{currentLang == 'en' ? 'Our Blogs' : 'مقالاتنا'}</h2>
                </div> 
                <div className="grid gap-8 lg:grid-cols-2">
                    {blogs[currentLang].map((blog, index) => (
                    <article key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-light text-primary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                                <FaRobot className={`${currentLang == 'en' ? 'mr-1' : 'ml-1'}`} />
                                {blog.type}
                            </span>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-secondary">{blog.title}</h2>
                        <p className="mb-5 font-light text-gray-500">{blog.description[0]}</p>
                        <div className="flex justify-between items-center gap-4">
                            <div className="flex items-center">
                                <span className="text-sm">
                                {currentLang === 'en' ? (
                                    <>Posted by <span className="text-secondary">{blog.author}</span> on {blog.date}</>
                                ) : (
                                    <>كتب من قبل <span className="text-secondary">{blog.author}</span> في {blog.date}</>
                                )}
                                </span>
                            </div>
                            <Link to={`/blogs/${blog.id}`} className="inline-flex items-center font-medium text-secondary hover:text-accent transition-colors duration-200">
                                {currentLang === 'en' ? (
                                    <>
                                    Read more
                                    <FaArrowRight className="w-5 h-4" />
                                    </>
                                ) : (
                                    <>
                                    اقرأ المزيد
                                    <FaArrowLeft className="w-5 h-4" />
                                    </>
                                )}
                            </Link>
                        </div>
                    </article>   
                    ))}               
                </div>  
            </div>
            </section>
     );
}
 
export default Blogs;