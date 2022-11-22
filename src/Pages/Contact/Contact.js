import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className="p-6 mt-36 text-gray-100"
        style={{
            background: `url(${appointment})`
        }}
        >
	<form  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow  ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-2xl text-sky-300 text-center font-bold leading-tight">Contact us</h2>
		<h2 className="w-full text-3xl text-center font-semibold leading-tight">Stay connected with us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-00"></textarea>
		</div>
		<div className='text-center' >
			<button type="submit" className="w-1/2 mx-auto px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-sky-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-100">Send</button>
		</div>
	</form>
</section>
    );
};

export default Contact;