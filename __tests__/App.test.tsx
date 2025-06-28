import { renderWithProviders } from './__utils__/renderWithProviders';
import { screen } from '@testing-library/react';
import { act } from 'react';
import { server } from './__mocks__/server';
import { robotsMock } from '@/core/infrastructure/mocks/robots.mock';
import { Home } from '@/src/pages/Home';
import Header from '@/src/components/Header';
import { initialConfig } from '@/config/initial';
import { adapterToPhone } from '@/core/infrastructure/adapters/random-user.adapter';

let callCount = 0;

describe('HomePage - Robots List', () => {
  beforeAll(() => {
    server.listen();
    server.events.on('request:start', async () => {
      callCount++;
    });
  });

  beforeEach(() => {
    callCount = 0;
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  test('🔄 Debe realizar una llamada a la API al cargar la página', async () => {
    await act(async () => {
      renderWithProviders(<Home />);
    });

    // Verificar que se ha llamado a la API exactamente una vez
    expect(callCount).toBe(1);
  });

  test('📜 Debe mostrar 10 robots en una lista', async () => {
    await act(async () => {
      renderWithProviders(<Home />);
    });

    // Verificar que hay 10 elementos con rol "listitem" (cada robot)
    expect(screen.getAllByRole('listitem')).toHaveLength(10);

    // Verificar que solo hay una lista (elemento con rol "list")
    expect(screen.getAllByRole('list')).toHaveLength(1);
  });

  test('🔍 Cada robot debe mostrar su nombre y email correctamente', async () => {
    await act(async () => {
      renderWithProviders(<Home />);
    });

    robotsMock.forEach((robot) => {
      const fullName = `${robot.name.title} ${robot.name.first} ${robot.name.last}`;
      // Verificar que el nombre completo está en el DOM
      expect(screen.getByText(fullName)).toBeInTheDocument();
      // Verificar que el email está en el DOM
      expect(screen.getByText(robot.email)).toBeInTheDocument();
      // Verificar que el email está en el DOM
      expect(screen.getByText(adapterToPhone(robot.phone))).toBeInTheDocument();
    });
  });

  test('🎨 Cada robot debe tener un avatar con la URL esperada', async () => {
    await act(async () => {
      renderWithProviders(<Home />);
    });

    robotsMock.forEach((robot) => {
      const fullName = `${robot.name.title} ${robot.name.first} ${robot.name.last}`;
      const item = screen.getByTestId(`robot-item-${robot.login.uuid}`);
      // Verificar que el estilo backgroundImage usa la URL esperada
      expect(item).toHaveStyle({
        backgroundImage: `url(${initialConfig.avatarUrl}${encodeURIComponent(fullName)})`,
      });
    });
  });

  test('📌 El Header debe mostrar el texto "Random Robots"', async () => {
    await act(async () => {
      renderWithProviders(<Header />);
    });
    // Verificar que el texto está en el Header
    expect(screen.getByText('Random Robots')).toBeInTheDocument();
  });
});
