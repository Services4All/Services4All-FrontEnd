import { render, screen } from '@testing-library/react';
import App from './App';
import Servicios from './components/servicios';
import Main from "./components/main";
import Vendedor from "./components/vendedor";
import Principal from './components/principal/index.js'
import Informacion from './components/principal/Informacion.js'

test('renders Principal', () => {
  render(<App />);
  const linkElement = screen.getByText(/Categorías de servicios/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders EnhancedTable inside index of principal', () => {
  render(<Principal />);
  const linkElement = screen.getByText(/Servicios prestados el último año/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders EnhancedTable inside index of principal', () => {
  render(<Principal />);
  const linkElement = screen.getByText(/Editar datos personales/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders EnhancedTable inside index of principal', () => {
  render(<Principal />);
  const linkElement = screen.getByText(/Nombre/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders EnhancedTable inside index of principal', () => {
  render(<Principal />);
  const linkElement = screen.getByText(/Descripción/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders EnhancedTable inside index of principal', () => {
  render(<Principal />);
  const linkElement = screen.getByText(/Categoría/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders EnhancedTable inside index of principal', () => {
  render(<Principal />);
  const linkElement = screen.getByText(/Fecha de creación/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Informacion', () => {
  render(<Informacion />);
  const linkElement = screen.getByText(/Si eres comprador/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Informacion', () => {
  render(<Informacion />);
  const linkElement = screen.getByText(/Puedes contratar servicios/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Informacion', () => {
  render(<Informacion />);
  const linkElement = screen.getByText(/Mala experiencia/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Informacion', () => {
  render(<Informacion />);
  const linkElement = screen.getByText(/Si eres vendedor/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Informacion', () => {
  render(<Informacion />);
  const linkElement = screen.getByText(/Ofrece tus servicios/i);
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


