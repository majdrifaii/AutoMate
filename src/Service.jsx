import { useParams } from "react-router-dom";
import services from '../public/data/services.json';
import { useEffect, useState } from "react";

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
            <h1 className="font-alexandria">{service.name}</h1>
            <img src={service.image} alt={service.name} />
            <p className="font-alexandria">{service.description}</p>
        </div>
     );
}
 
export default Service;