import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceItem from './ServiceItem/ServiceItem';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]
    return (
        <div>
            <div className='text-center mt-20'>
                <p className='text-sky-500 text-1xl font-bold'>OUR SERVICES</p>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 mx-4 mt-20 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {servicesData.map(service => <ServiceItem
                key={service.id}
                service={service}
                ></ServiceItem>)}
            </div>
            
        </div>
    );
};

export default Services;