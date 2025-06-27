import { RobotContainer } from '@/src/components/RobotContainer';
import { useRobotContext } from '@/src/hooks/useRobotContext';
import { useParams, useNavigate } from 'react-router-dom';
import LocationMap from '../components/Map';

export default function Detail() {
  const { id } = useParams();
  const { getRobotById } = useRobotContext();
  const robot = getRobotById(id || '');
  const navigate = useNavigate();

  if (!robot) {
    return (
      <RobotContainer className="min-h-screen-custom">
        <div className="nes-container with-title is-centered min-h-screen-custom">
          <p className="title">Error</p>
          <p>Robot no encontrado</p>
          <button className="nes-btn" onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>
      </RobotContainer>
    );
  }

  return (
    <RobotContainer>
      <div className="nes-container with-title is-centered is-rounded">
        <h1 className="title !bg-black text-white">Detalle del Robot</h1>

        <div className="flex flex-row items-center justify-between mb-4">
          <button className="nes-btn is-error" onClick={() => navigate(-1)}>
            &lt; Volver
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-stretch w-full gap-4">
          {/* Avatar - Mismo ancho pero altura flexible en móvil */}
          <div className="md:w-2/5 flex-shrink-0">
            <div className="flex flex-col nes-container is-rounded h-full items-center justify-center max-h-[288px]">
              <img
                src={robot.avatarUrl}
                alt={robot.name}
                className="w-full max-w-[220px] h-auto aspect-square object-cover "
              />
            </div>
          </div>

          {/* Datos - Altura adaptable con mínimo garantizado */}
          <div className="md:w-3/5 nes-container is-rounded md:overflow-y-auto min-h-[300px] md:min-h-[264px]">
            <h2 className="title nes-text is-primary">Datos personales</h2>
            <ul className="nes-list is-disc text-left space-y-2">
              <li>
                <strong>Nombre:</strong> {robot.name}
              </li>
              <li>
                <strong>Teléfono:</strong> {robot.phone}
              </li>
              <li>
                <strong>Ciudad:</strong> {robot.location.city}
              </li>
              <li>
                <strong>Estado:</strong> {robot.location.state}
              </li>
              <li>
                <strong>País:</strong> {robot.location.country}
              </li>
              <li>
                <strong>Calle:</strong> {robot.location.street.name} {robot.location.street.number}
              </li>
              <li>
                <strong>Código postal:</strong> {robot.location.postcode}
              </li>
            </ul>
          </div>
        </div>

        {/* Mapa */}
        <LocationMap
          coordinates={{
            latitude: robot.location.coordinates.latitude,
            longitude: robot.location.coordinates.longitude,
          }}
          city={robot.location.city}
          country={robot.location.country}
        />
      </div>
    </RobotContainer>
  );
}
