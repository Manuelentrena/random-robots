import { RobotContainer } from './RobotContainer';
import { initialConfig } from '@/config/initial';
import packageJson from '../../package.json';

export default function Header() {
  return (
    <RobotContainer>
      <div className="flex flex-col sm:flex-row justify-between mb-4 items-end">
        {/* Logo y título */}
        <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
          <div className="flex flex-row items-center sm:items-start gap-2 w-full">
            <section className="icon-list">
              <i className="snes-jp-logo"></i>
            </section>
            <h1 className="text-sm sm:text-2xl font-bold m-0 mt-3">Random Robots</h1>
          </div>
          <div className="w-full flex items-center justify-start">
            <div className="nes-badge is-splited">
              <span className="is-dark">npm</span>
              <span className="is-primary">{packageJson.version}</span>
            </div>
          </div>
        </div>

        {/* Redes sociales (solo visible en desktop) */}
        <div className="hidden sm:flex flex-col items-end gap-2">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold m-0">Social Media</h1>
          </div>
          <div className="flex items-center justify-end gap-3 transform w-full">
            <a
              href={initialConfig.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <i className="nes-icon instagram is-medium hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.6)] nes-pointer"></i>
            </a>

            <a
              href={initialConfig.socialMedia.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <i className="nes-icon github is-medium hover:drop-shadow-[0_0_8px_rgba(26,26,26,0.6)] nes-pointer"></i>
            </a>

            <a
              href={initialConfig.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <i className="nes-icon linkedin is-medium hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.6)] nes-pointer"></i>
            </a>
          </div>
        </div>
      </div>
    </RobotContainer>
  );
}
