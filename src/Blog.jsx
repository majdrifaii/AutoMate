import { useParams } from 'react-router-dom';
import blogs from '../public/data/blogs.json';
import { useLanguage } from './LanguageContext';
import { FaRobot } from 'react-icons/fa';

const Blog = () => {
    const { id } = useParams();
    const { currentLang, isRTL, importImages } = useLanguage();
    const blog = blogs[currentLang].find((blog) => blog.id == id);

    
    if(!blog){
        return (
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                    Blog Not Available
                </h1>
            </main>
        )
    }

    return ( 
        <section className={`bg-slate-50 py-20 ${currentLang == 'en' ? 'font-family-english' : 'font-family-arabic'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                <div key={blog.id} className='max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-7xl px-5 mx-auto mt-10 mb-10 items-center'>
                        <h1 className='w-full md:w-2/3 text-secondary text-2xl md:text-4xl mb-5 font-semibold font-sans'>{blog.title}</h1>
                        <img src={importImages(blog.image)} alt={blog.title} className="w-full h-[400px] object-cover rounded-lg" />
                        <div className='flex justify-between items-center mt-5 mb-2.5'>
                            <h4 className='text-sm md:text-[17px]'>
                            {currentLang === 'en' ? (
                                <>Posted by <span className="text-secondary">{blog.author}</span> on {blog.date}</>
                            ) : (
                                <>كتب من قبل <span className="text-secondary">{blog.author}</span> في {blog.date}</>
                            )}
                            </h4>
                            <p className='bg-light px-2 md:px-4 py-1 rounded-lg flex justify-center items-center text-xs md:text-sm'>
                                <FaRobot className={`${currentLang == 'en' ? 'mr-1' : 'ml-1'}`} />
                                {blog.type}
                            </p>
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
                </div>
        </section>
     );
}
 
export default Blog;