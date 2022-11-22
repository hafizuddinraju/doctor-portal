import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthDataContext } from '../../../UseContext/AuthContext';

const TreatmentCard = ({treatment,setModal}) => {
    const{name, slots, price} = treatment
    const {user} =useContext(AuthDataContext);
    const navigate = useNavigate()
    return (
        <div className="card shadow-xl">
        <div className="card-body text-center">
            <h2 className="text-2xl text-sky-400 font-bold text-center">{name}</h2>
            <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
            <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
            <p>Price: ${price}</p>

            
            <div className="card-actions justify-center">
                <label
                    disabled={slots.length === 0}
                    htmlFor={user && user.uid? 'booking-modal' : navigate('/login') }
                    className="btn bg-sky-400 hover:bg-sky-500 border-none text-white"
                    onClick={() => setModal(treatment)}
                >Book Appointment</label>
            </div>
        </div>
    </div>
    );
};

export default TreatmentCard;