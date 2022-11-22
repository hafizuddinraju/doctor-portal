import React, { useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import AppointmentTime from '../AppointmentTime/AppointmentTime';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentOption
            selected={selected}
            setSelected={setSelected}
            ></AppointmentOption>
            <AppointmentTime
            selected={selected}
            setSelected={setSelected}
            ></AppointmentTime>
        </div>
    );
};

export default Appointment;