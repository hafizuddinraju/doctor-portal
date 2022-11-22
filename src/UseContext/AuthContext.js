import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthDataContext = createContext();
const auth = getAuth(app)
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [sign, setSign] = useState({});
    const [loading, setLoading] = useState(true);

    const UserLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const CreateSignUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LogOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const profileUpdate = (profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    const googleLogin = (Provider)=>{
        setLoading(true)
        return signInWithPopup(auth, Provider)
    }
    const githubLogin = (Provider)=>{
        setLoading(true)
        return signInWithPopup(auth, Provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    },[sign])

    const authInfo = {UserLogin, user,CreateSignUp,LogOut,profileUpdate,googleLogin,setSign,githubLogin, loading}
    return (
        <AuthDataContext.Provider value={authInfo}>
         {children}   
        </AuthDataContext.Provider>
    );
};

export default AuthContext;