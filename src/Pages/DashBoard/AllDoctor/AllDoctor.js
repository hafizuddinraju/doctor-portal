import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../../compontents/ConfirmationModal/ConfirmationModal';
import Spinner from '../../../compontents/Loading/Spinner';

const AllDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const {data:doctors, isLoading, refetch }= useQuery({
        queryKey:['doctors'],
        queryFn:async ()=>{
            try{
                const res = await fetch('https://server-doctor.vercel.app/doctors',{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('doctor-token')}`
                    }
                })
                const data = await res.json();
                return data.data;

            }
            catch(error){
                toast.error(error.message, {autoClose:500})
            }
        }
    })
    
    
    const closeModal = () => {
        setDeletingDoctor(null);
    }
    const handleDeleteDoctor = (doctor)=>{
        fetch(`https://server-doctor.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('doctor-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.data.deletedCount > 0){
                refetch()
                toast.success(`Doctor ${doctor.name} deleted successfully`, {autoClose:500})
            }
        })
    }
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div className='py-10'>
            <h2 className="text-3xl">All Doctors: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={doctor.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
                    successAction = {handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData = {deletingDoctor}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllDoctor;