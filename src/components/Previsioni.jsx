import { useState } from "react";
import SearchBar from "./SearchBar";

function Previsioni() {
  const [forecast, setForecast] = useState(null);
  const API_KEY = "54a5b511cab0a50f87dcdc9a0a134242";

  const fetchForecastByCity = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => res.json())
      .then((data) => setForecast(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container my-4 px-5">
      <h2 className="text-center mb-4">Previsioni 5 Giorni</h2>
      <SearchBar onSearch={fetchForecastByCity} />
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
