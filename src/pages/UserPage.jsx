import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CallWeather from "../components/CallWeather";
import WeatherSaved from "../components/WeatherSaved";

function UserPage({ isAuth, auth }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-slate-800 min-h-screen flex items-center justify-center">
      <div className="flex w-full max-w-4xl justify-between text-white">
        <div className="w-1/2 pr-4">
          <WeatherSaved auth={auth} />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl mb-4 uppercase">Current Weather</h1>
          <CallWeather />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
