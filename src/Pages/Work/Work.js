import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../../compontents/PrimaryButton';

const Work = () => {
    return (
        <div className="hero mt-40">
  <div className="hero-content flex-col lg:flex-row">
    <div className='md:w-1/2 w-full'>

    <img src={treatment} alt='' className="md:w-4/6 w-full rounded-lg shadow-2xl" />
    </div>
    <div className='md:w-1/2 w-full'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
         </div>
    );
};

export default Work;