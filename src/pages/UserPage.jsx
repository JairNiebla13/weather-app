import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CallWeather from '../components/CallWeather'


function UserPage({ isAuth }) {
    let navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);
    return (
        <div>
            <div className='bg-slate-800 min-h-screen flex items-center justify-center'>
                <div className='text-white'>
                    <h1 className='text-3xl mb-4 uppercase'>Current Weather</h1>
                    <CallWeather />
                </div>
            </div>
        </div>
    )
}

export default UserPage