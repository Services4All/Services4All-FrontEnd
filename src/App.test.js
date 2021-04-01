import { render, screen } from '@testing-library/react';
import App from './App';
import Servicios from './components/servicios';
import Main from "./components/main";
import Vendedor from "./components/vendedor";

test('renders Principal', () => {
  render(<App />);
  const linkElement = screen.getByText(/Categorías de servicios/i);
  expect(linkElement).toBeInTheDocument();
});



it('Test Servicios 1', () => {


   const { container, getByText } = render(<Servicios />);

   expect(getByText(/Consulta/i).textContent)


})

it('Test Servicios 2', () => {


   const { container, getByText } = render(<Servicios />);

   expect(getByText(/Servicio de Plomería Barrio Ciudadela Colsubsidio/i).textContent)


})

it('Test Servicios 3', () => {


   const { container, getByText } = render(<Servicios />);

   expect(getByText(/Servicio de Cerrajería Barrio Villas de Gratamira/i).textContent)


})


it('Test Main 1', () => {


   const { container, getByText } = render(<Main />);

   expect(getByText(/Categorías de servicios/i).textContent)


})

it('Test Main 2', () => {


   const { container, getByText } = render(<Main />);

   expect(getByText(/Carpintería/i).textContent)


})
it('Test Vendedor 1', () => {


   const { container, getByText } = render(<Vendedor />);

   expect(getByText(/BIENVENIDO VENDEDOR/i).textContent)


})

