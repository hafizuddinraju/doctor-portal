import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../../compontents/Loading/Spinner';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHost = process.env.REACT_APP_IMGBB_KEY;
    const navigate = useNavigate()

    const {data: specialties, isLoading } = useQuery({
        queryKey:['specialty'],
        queryFn: async ()=>{
            const res = await fetch('https://server-doctor.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data.data;
        }
    })

    const handleAddDoctor = (data)=>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHost}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                // console.log(imgData.data.url);
                const doctor = {
                    name: data.name, 
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                fetch('https://server-doctor.vercel.app/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('doctor-token')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`, {autoClose:500});
                    navigate('/dashboard/alldoctor')
                })
            }
            })

    }
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div className='w-96 p-7 mx-auto'>
            <h2 className="text-4xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select 
                    {...register('specialty')}
                    className="select input-bordered w-full max-w-xs">
                        {
                            specialties?.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                        
                        
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered py-2 w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn bg-sky-500 border-none w-full mt-4' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;