import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importa la imagen del logo (asegúrate de que la ruta sea correcta)
import logoIcon from '../assets/logo.png'; // Ajusta la ruta según tu estructura de archivos

// Define el ícono del marcador usando Leaflet
const icon = L.icon({
  iconUrl: logoIcon,
  iconSize: [50, 50], // Tamaño del icono
  iconAnchor: [15, 30], // Punto de anclaje del icono (donde está el puntero)
  popupAnchor: [0, -30], // Punto donde se abre el popup (arriba del icono)
});



const LogoMarker = ({ position }) => (
  <Marker position={position} icon={icon}>
    <Popup>
      Ubicación de la mutual.
    </Popup>
  </Marker>
);

export default LogoMarker;
