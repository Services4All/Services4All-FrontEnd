import { render, screen } from '@testing-library/react';
import App from './App';
import Servicios from './components/servicios';
import Main from "./components/main";
import Vendedor from "./components/vendedor";
import Principal from './components/principal/index.js'
import Informacion from './components/principal/Informacion.js'
import Register from './components/register.js'
import About from './components/about.js'
import Cerrajeria from './components/cerrajeria.js'



test('renders Cerrajeria', () => {
  render(<Cerrajeria />);
  const linkElement = screen.getByText(/Servicio de Cerrajería 24 horas/i);
  expect(linkElement).toBeInTheDocument();
});



test('renders About', () => {
  render(<About />);
  const linkElement = screen.getByText(/Encontraras facilidades de busqueda como servicios directos, perfiles de usuarios y configuracion de tu cuenta./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Register', () => {
  render(<Register />);
  const linkElement = screen.getByText(/Tipo de usuario/i);
  expect(linkElement).toBeInTheDocument();
});

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


