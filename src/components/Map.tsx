import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Configuración del icono del marcador
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface LocationMapProps {
  coordinates: {
    latitude: string;
    longitude: string;
  };
  city: string;
  country: string;
}

const LocationMap = ({ coordinates, city, country }: LocationMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  const lat = parseFloat(coordinates.latitude);
  const lng = parseFloat(coordinates.longitude);

  useEffect(() => {
    if (!mapRef.current) return;

    // Inicializar el mapa con vista satélite
    mapInstance.current = L.map(mapRef.current, {
      attributionControl: false,
      zoomControl: false,
    }).setView([lat, lng], 13);

    // Capa base (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapInstance.current);

    // Marcador personalizado
    markerRef.current = L.marker([lat, lng], {
      icon: DefaultIcon,
    })
      .addTo(mapInstance.current)
      .bindPopup(`<b>${city}, ${country}</b><br>${lat.toFixed(4)}, ${lng.toFixed(4)}`)
      .openPopup();

    // Ajustar el mapa al marcador
    mapInstance.current.fitBounds([
      [lat - 0.01, lng - 0.01],
      [lat + 0.01, lng + 0.01],
    ]);

    return () => {
      mapInstance.current?.remove();
    };
  }, [lat, lng, city, country]);

  return (
    <div className="nes-container is-rounded" style={{ marginTop: '2rem' }}>
      <h2 className="title nes-text is-primary">Mapa</h2>
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '400px',
          backgroundColor: '#e0e0e0',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '4px',
          border: '4px solid #d3d3d3',
        }}
      />
      <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>
        Ubicación en {city}, {country}
      </p>
    </div>
  );
};

export default LocationMap;
