import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Comprador from './comprador';

test('renders Principal', () => {
    render(<Router><Comprador /></Router>);
    const divElement = screen.getByText(/new code/i);
    expect(divElement).toBeInTheDocument();
  });