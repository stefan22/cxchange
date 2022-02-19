import { render, screen } from '@testing-library/react';
import CXchange from '../CXchange';

test('renders title', () => {
  render(<CXchange />);
  const linkEle = screen.getByText(/Exchange Rates/i);
  expect(linkEle).toBeInTheDocument();
});
