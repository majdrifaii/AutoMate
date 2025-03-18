import blogs from '../public/data/blogs.json';
import { useLanguage } from './LanguageContext';

const Blog = () => {
    const { currentLang, isRTL} = useLanguage();
    console.log(blogs);
    return ( 
        <section className='pt-20' dir={isRTL ? 'rtl' : 'ltr'}>
            {blogs.map((blog, index) => (
                <div className='w-full grid grid-cols-2 gap-4 px-5 my-10'>
                <div>
                    <img src={blog.image} alt="" />
                </div>
                <div key={index}>
                    <h1>{blog.title}</h1>
                    <h4>{blog.date}</h4>
                    <p>{blog.description}</p>
                </div>
                </div>
            ))}
        </section>
     );
}
 
export default Blog;