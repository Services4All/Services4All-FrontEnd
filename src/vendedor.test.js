import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Vendedor from "./components/vendedor";

test('renders new component', () => {
    render(<Router><Vendedor /></Router>);
    const divElement = screen.getByText(/BIENVENIDO VENDEDOR/i);
    expect(divElement).toBeInTheDocument();
  });
  
test('renders new component 2', () => {
    render(<Router><Vendedor /></Router>);
    const divElement = screen.getByText(/Plomeria Sena/i);
    expect(divElement).toBeInTheDocument();
  });
  test('renders new component 3', () => {
    render(<Router><Vendedor /></Router>);
    const divElement = screen.getByText(/Rows per page:/i);
    expect(divElement).toBeInTheDocument();
  });
  