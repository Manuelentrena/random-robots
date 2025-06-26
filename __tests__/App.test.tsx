import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('muestra el texto Random Robots', () => {
  render(<App />);
  expect(screen.getByText('Random Robots')).toBeInTheDocument();
});
