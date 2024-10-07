import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import login from '../assets/loginpage/login.png';
import ilustration from '../assets/loginpage/ilustration.png';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Para manejar errores de inicio de sesión

    const handleSignIn = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        setError(""); // Reiniciar error

        try {
            await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/userpage");
        } catch (err) {
            console.error("Error signing in:", err);
            setError(err.message); // Guardar el mensaje de error para mostrarlo al usuario
        }
    };

    return (
        <div className="bg-slate-800 flex flex-col md:flex-row h-screen items-center justify-center">
            <div className='flex flex-col items-center'>
                <img src={login} alt="login-image" className='w-40 rounded-full' />
                <div className="bg-slate-500 p-6 rounded-lg shadow-lg mt-6">
                    <form onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white">Correo Electrónico:</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                required
                                className="mt-1 p-2 rounded border border-gray-300 w-full"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="user_password" className="block text-white">Contraseña:</label>
                            <input
                                type="password"
                                id="user_password"
                                name="user_password"
                                required
                                className="mt-1 p-2 rounded border border-gray-300 w-full"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>} {/* Mostrar el mensaje de error */}
                        <div>
                            <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex items-end ml-8'>
                <img src={ilustration} alt="ilustration-image" className='border-collapse w-40 ml-28' />
            </div>
        </div>
    );
}

export default Login;
