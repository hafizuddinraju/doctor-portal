import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentOption = ({selected, setSelected}) => {
    
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} alt='' className="md:w-1/2 w-full rounded-lg shadow-2xl" />
    <div className='md:w-1/2 w-full text-center ml-10'>
        

        <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      
    />
        
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;