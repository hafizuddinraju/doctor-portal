import { useEffect, useState } from "react";


const ApiToken = email => {
    // console.log(email);
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://server-doctor.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then( data => {
                  
                    if ( data.accessToken) {
                        localStorage.setItem('doctor-token', data.accessToken);
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default ApiToken;