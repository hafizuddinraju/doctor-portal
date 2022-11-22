import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../../compontents/Loading/Spinner';

const AllUser = () => {
    

    const {data: alluser = [], refetch, isLoading} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await fetch('https://server-doctor.vercel.app/users');
            const data = await res.json();
            return data.data;
        }

    })
    const handlesubmit = (id)=>{
        fetch(`https://server-doctor.vercel.app/users/admin/${id}`,{
            method:'PUT',
            headers:{
                authorization: `bearer ${localStorage.getItem('doctor-token')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.success){
                toast.success(data.message, {autoClose:500})
                refetch()
            }
        })

    }
    if(isLoading){
        return <Spinner></Spinner>
    }
    

    return (
        <div className='mt-5'>
            <h3 className="text-3xl mb-5">All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alluser?.map((user, i) => <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user?.role !== 'admin' && <button onClick={()=>handlesubmit(user._id)} className='btn bg-sky-400 btn-xs border-none'>Make Admin</button>}</td>
                                <td><button className='btn bg-red-600 btn-xs border-none'>Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;