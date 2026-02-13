import { Card } from "react-bootstrap";

function WeatherPanel({ weather }) {
  if (!weather) {
    return (
      <div className="p-3 bg-secondary rounded text-center">
        <p>Seleziona una città o clicca sulla mappa</p>
      </div>
    );
  }

  return (
    <Card bg="secondary" text="light">
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
        <Card.Text>🌡 Temperatura: {weather.main.temp}°C</Card.Text>
        <Card.Text>🌥 {weather.weather[0].description}</Card.Text>
        <Card.Text>💨 Vento: {weather.wind.speed} m/s</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherPanel;
