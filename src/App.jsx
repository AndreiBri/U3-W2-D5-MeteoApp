import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AllWorldMap from "./components/AllWorldMap";
import MyNavbar from "./components/MyNavbar";
import Welcome from "./components/Welcome";
import SearchBar from "./components/SearchBar";
import WeatherPanel from "./components/WeatherPanel";
import Footer from "./components/Footer";

function App() {
  const [weather, setWeather] = useState(null);
  const [position, setPosition] = useState(null);

  const API_KEY = "54a5b511cab0a50f87dcdc9a0a134242";

  //  Fetch da coordinate (click mappa)
  const fetchWeatherByCoords = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        if (!res.ok) throw new Error("Errore API");
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setPosition({ lat: data.coord.lat, lng: data.coord.lon });
      })
      .catch((err) => console.error(err));
  };

  //  Fetch da città (searchbar)
  const fetchWeatherByCity = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        if (!res.ok) throw new Error("Città non trovata");
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setPosition({ lat: data.coord.lat, lng: data.coord.lon });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNavbar />

      <main className="flex-grow-1 bg-dark text-light">
        <Welcome className="text-center my-5" />

        <div className="container-fluid">
          <div className="row">
            {/* LEFT */}
            <div className="col-md-3">
              <SearchBar onSearch={fetchWeatherByCity} />
            </div>

            {/* CENTER */}
            <div className="col-md-6">
              <AllWorldMap position={position} weather={weather} onMapClick={fetchWeatherByCoords} />
            </div>

            {/* RIGHT */}
            <div className="col-md-3">
              <WeatherPanel weather={weather} />
            </div>
          </div>
        </div>
      </main>

      <Footer className="text-center py-2" />
    </div>
  );
}

export default App;
