import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NewComponent from './newComponent';

test('renders new component', () => {
    render(<Router><NewComponent /></Router>);
    const divElement = screen.getByText(/NUEVO COMPONENTE/i);
    expect(divElement).toBeInTheDocument();
  });