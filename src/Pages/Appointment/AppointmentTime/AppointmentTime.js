import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Spinner from '../../../compontents/Loading/Spinner';
import Modal from '../Modal/Modal';
import TreatmentCard from '../TreatmentCard/TreatmentCard';

const AppointmentTime = ({selected, setSelected}) => {
    // const [treatments, setTreatments] = useState([]);
    const [modal, setModal] = useState({});
    console.log(modal);
    const date = format(selected, 'PP');
    const {data:treatments = [], refetch, isLoading} = useQuery({
        queryKey:['treatments', date],
        queryFn: ()=> fetch(`https://server-doctor.vercel.app/services?date=${date}`).then(res => res.json())
           
        
    })
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <p className='text-center text-sky-400 font-semibold'>Available Appointments on {format(selected, 'PP')}.</p>
            <div className='grid grid-cols-1 mt-24 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
                {
                    treatments?.data?.map(treatment => <TreatmentCard
                    key={treatment._id}
                    treatment={treatment}
                    setModal={setModal}
                    ></TreatmentCard>)
                }

            </div>
            {
                modal &&
                <Modal
            selected={selected}
            modal={modal}
            setModal={setModal}
            refetch={refetch}
            ></Modal>
            }
            
        </div>
    );
};

export default AppointmentTime;