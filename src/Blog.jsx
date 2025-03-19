import blogs from '../public/data/blogs.json';
import { useLanguage } from './LanguageContext';

const Blog = () => {
    const { currentLang, isRTL} = useLanguage();

    return ( 
        <section className={`bg-slate-50 py-20 ${currentLang == 'en' ? 'font-family-english' : 'font-family-arabic'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {blogs[currentLang].map((blog, index) => (
                <div key={index} className='max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-7xl px-5 mx-auto mt-10 mb-10 items-center'>
                        <h1 className='w-2/3 text-secondary text-2xl md:text-4xl mb-5 font-semibold font-sans'>{blog.title}</h1>
                        <img src={blog.image} alt="" className="w-full h-[400px] object-cover rounded-lg" />
                        <div className='flex justify-between items-center mt-5 mb-2.5'>
                            <h4 className='text-sm md:text-[17px]'>
                            {currentLang === 'en' ? (
                                <>Posted by <span className="text-secondary">{blog.author}</span> on {blog.date}</>
                            ) : (
                                <>كتب من قبل <span className="text-secondary">{blog.author}</span> في {blog.date}</>
                            )}
                            </h4>
                            <p className='bg-light px-2 md:px-4 py-1 rounded-lg text-xs md:text-sm'>{blog.type}</p>
                        </div>
                        <p className='text-lg font-semibold text-gray-700'>{blog.description[0]}</p>
                    {blog.description.slice(1).map((desc, index) => (
                        <div className='h-full' key={index}>
                            <h1 className='text-secondary my-4 text-3xl font-semibold font-sans'>{desc.header}</h1>
                            {desc.bio.map((b, index) => (
                                <p key={index} className='text-base mb-2 font-light text-gray-700'>{b}</p>
                            ))}
                        </div>
                        
                    ))}
                {blogs[currentLang].length != index + 1 ? (
                    <div className='h-[2px] bg-dark'></div>
                ) : (
                    <></>
                )}
                </div>
            ))}
        </section>
     );
}
 
export default Blog;