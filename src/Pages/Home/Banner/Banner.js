import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../compontents/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero my-20 "
        style={{
            background: `url(${bg})`,
            
        }}
        
        >
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <img src={chair} alt='chair' className="md:w-1/2 w-full rounded-lg shadow-2xl" />
    <div className='md:w-1/2 w-full'>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <PrimaryButton className='border-none'>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;