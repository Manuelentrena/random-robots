import { renderWithProviders } from './__utils__/renderWithProviders';
import { screen } from '@testing-library/react';
import Header from '@/src/components/Header';
import { act } from 'react';

test('muestra el texto Random Robots', async () => {
  await act(async () => {
    renderWithProviders(<Header />);
  });
  expect(screen.getByText('Random Robots')).toBeInTheDocument();
});
