import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Producto from "./components/producto";


test('renders new component', () => {
    render(<Router><Producto /></Router>);	
    const divElement = screen.getAllByText(/Comentario/i);
    expect(divElement[0]).toBeInTheDocument();
  });
