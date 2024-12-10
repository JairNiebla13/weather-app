import React, { useState } from 'react'
import Registro from '../assets/Registro.png'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/login")
                })
        } catch (err) {
            alert("Error Register in:", err);
            setError(err.message);
        }
    }

    return (
        <div className='bg-slate-800 flex-col align-center h-screen'>
            <div className='flex flex-col items-center'>
                <img src={Registro} alt="imagen-registro" className='w-40 rounded-full' />
                <div className='bg-slate-800 p-6 rounded-lg shadow-lg mt-6'>
                    <form onSubmit={handleRegister}>
                        <div className='mb-4'>
                            <label htmlFor="email" className="block text-white">Correo Electrónico:</label>
                            <input
                                type="email"
                                id='user_email'
                                required
                                className='mt-1 p-2 rounded border border-gray-300 w full'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="user_password" className='block text-white'>Contraseña:</label>
                            <input
                                type="password"
                                id='user_password'
                                name='user_password'
                                required
                                className='mt-1 p-2 rounded border border-gray-300 w-full' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="user_password" className="block text-white">Confirmar Contraseña:</label>
                            <input
                                type="password"
                                id='user_password_confirmed'
                                name='user_password_confirmed'
                                required
                                className='mt-1 p-2  rounded border border-gray-300 w-full'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button type='submit' className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700'>
                                Registrarte
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register