import CallWeather from './components/CallWeather'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='bg-slate-800 min-h-screen flex items-center justify-center'>
      <div className='text-white'>
        <h1 className='text-3xl mb-4 uppercase'>Current Weather</h1>
        <CallWeather />
      </div>
    </div>
  )
}

export default App
