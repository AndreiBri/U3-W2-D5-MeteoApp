import { useState } from "react";
import SearchBar from "./SearchBar";

function Previsioni() {
  const [error, setError] = useState("");
  const [forecast, setForecast] = useState(null);
  const API_KEY = "54a5b511cab0a50f87dcdc9a0a134242";

  const fetchForecastByCity = (city) => {
    setError("");
    setForecast(null);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        if (!res.ok) throw new Error("Città non trovata"); // lancia errore se 404
        return res.json();
      })
      .then((data) => setForecast(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container my-4 px-5">
      <h2 className="text-center mb-4">Previsioni 5 Giorni</h2>
      <SearchBar onSearch={fetchForecastByCity} />
      {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
      {forecast && (
        <div className="mt-4">
          {forecast.list.slice(0, 5).map((item, index) => (
            <div key={index} className="border p-2 mb-2">
              <strong>{new Date(item.dt_txt).toLocaleString()}</strong>: {item.main.temp}°C, {item.weather[0].description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Previsioni;
