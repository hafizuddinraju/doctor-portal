import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';

const Info = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-gray-700'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
    ]
    return (
        <div className='grid grid-cols-1 gap-7 mx-4 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard
                key={card.id}
                card= {card}
                ></InfoCard>)
            }
            
        </div>
    );
};

export default Info;