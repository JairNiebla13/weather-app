import React from 'react'
import paisaje from '../assets/paisaje.jpg';
import hometext from '../assets/homepage/hometext.png';
function HomePage() {
    return (
        <div className="bg-slate-800 flex flex-col h-screen">
            <div className="flex flex-col md:flex-row h-screen">
                <div className="flex-1 flex items-center justify-center flex-col font-sans-mono">
                    <img src={hometext} alt="texto" className='w-44' />
                </div>
                <div className="flex items-center justify-center flex-1">
                    <img src={paisaje} alt="imagen de un paisaje" />
                </div>
            </div>

            <div className="bg-slate-700 flex items-end ml-1">
                <footer>
                    <nav>
                        <a href="" className="text-slate-50">Home</a>
                        <a href="" className="text-slate-50">About</a>
                    </nav>
                </footer>
            </div>
        </div>
    )
}

export default HomePage