import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Comprador from "./components/comprador";

test('renders new component', () => {
    render(<Router><Comprador /></Router>);
    const divElement = screen.getByText(/BIENVENIDO Comprador/i);
    expect(divElement).toBeInTheDocument();
  });
  
test('renders new component 2', () => {
    render(<Router><Comprador /></Router>);
    const divElement = screen.getByText(/Mecanica Daytona/i);
    expect(divElement).toBeInTheDocument();
  });
  test('renders new component 3', () => {
    render(<Router><Comprador /></Router>);
    const divElement = screen.getByText(/Colina/i);
    expect(divElement).toBeInTheDocument();
  });
  