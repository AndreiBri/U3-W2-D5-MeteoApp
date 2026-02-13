import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import MapClickHandler from "./MapClickHandler";

function ChangeView({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView([position.lat, position.lng], 10);
    }
  }, [position, map]);

  return null;
}

function AllWorldMap({ position, onMapClick }) {
  return (
    <div style={{ height: "500px" }}>
      <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />

        <ChangeView position={position} />

        <MapClickHandler onClick={(latlng) => onMapClick(latlng.lat, latlng.lng)} />
      </MapContainer>
    </div>
  );
}

export default AllWorldMap;
