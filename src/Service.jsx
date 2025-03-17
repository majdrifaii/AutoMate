import { Link, useParams } from "react-router-dom";
import services from '../public/data/services.json';
import { FaArrowRight } from 'react-icons/fa';

const Service = () => {
    const { name } = useParams();
    const service = services.find((service) => service.name.toLowerCase() === name.toLowerCase());

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
        <div className="pt-20">
           <section className="bg-white">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-10 lg:px-6">
                <img className="w-full rounded-md" src={service.image} alt={service.name} />
                <div className="mt-4 md:mt-0">
                    <h1 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900">{service.name}</h1>
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-secondary">{service.title}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg">{service.description}</p>
                    <button className="inline-flex items-center text-white bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">
                        Get started
                        <FaArrowRight className="ml-2 -mr-1 w-5 h-4" />
                    </button>
                </div>
            </div>
        </section>
        <div className="w-11/12 xl:max-w-screen-xl mx-auto mt-5 mb-10">
        <h1 className="title text-3xl mb-10 font-bold">Related Services</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {services.filter((service) => service.name.toLowerCase() != name.toLowerCase()).slice(0, 4).map((service) => (
                <div key={service.id} className=" bg-white border border-gray-200 rounded-lg shadow-sm"> 
                    <div className="px-5 pt-5">
                        <img className="w-full rounded-md" src={service.image} alt={service.name} />
                    </div>
                    <div className="p-5">
                        <h5 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900">{service.name}</h5>
                        <Link to={`/service/${service.name}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            Read more
                            <FaArrowRight className="ml-2 -mr-1 w-5 h-4" />
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