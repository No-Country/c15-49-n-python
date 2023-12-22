import React from 'react';
import UserCard from '../components/user-card';
import ProviderCard from '../components/provider-card';

export default function TaskWork() {
  return (
    <section id="main__content" className="mx-auto max-w-7xl mt-4">
      <br />
      <br />
    <section className="mt-4 bg-white py-6 max-w-md mx-auto shadow-lg">
      <h2 className="text-3xl text-center mb-4">Coordinar Trabajo <br></br><span className="text-gradient">Usuario ---- Proveedor </span></h2>
      <p className="text-center">
        Aqui podrá ver los detalles del servicio a realizar.
      </p>
    </section>
      <div className="flex justify-center">
        <div className="flex justify-center bg-white shadow-lg rounded-lg p-6">
        <div className="border-2">
        {/* 
        .trapecio1{
          height: 0px;
          width: 200px;
          border-right: solid 50px transparent;
          border-top: solid 0px transparent;
        border-bottom: solid 100px #FF00FF;
        border-left: solid 0px transparent; */}

        <UserCard 
          name="El viejo Gepetto"
          address="Maipú, Santiago"
          job="Carpintero"
          image="/images/providers/carpintero.jpeg"
          avatar='/images/providers/avatar.png'
          />
          </div>
          <div className="border-2">
          <ProviderCard
            name="El viejo Gepetto"
            job="Carpintero"
            address="Maipú, Santiago"
            avatar='/images/providers/avatar.png'
            image="/images/providers/carpintero.jpeg"
          />
          </div>
          </div>
          </div>
        <div className="justify-center bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Detalle del Servicio</h3>
          <ul className="text-sm">
            <li className="mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam provident in ipsa delectus, voluptatum distinctio asperiores iusto explicabo velit voluptatibus sunt, ab ipsum molestias deserunt quam, quae mollitia. Quas, iste?
            </li>
          </ul>
          <div className="flex items-center justify-center mb-4">
            
            <span className="text-2xl font-semibold">Precio: $9400.00</span>
            </div>
            <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-semibold">Fecha: 15-10-2024</span>
            </div>
          <a
            className="block bg-blue-500 text-white text-center py-2 max-w-200 rounded hover:bg-blue-600 transition duration-300"
            title="Confirmar Ahora"
            target="_blank"
            rel="noopener"
            href=""
          >
            Confirmar Ahora
          </a>
          <div className="border-b mt-6 mb-4"></div>
          <ul className="text-sm">
            <li className="mb-2">
              Los detalles de la confirmacion del trabajo se pueden ver en: Http//arreglosYa/AcuerdoDeServicio 👇🏼
            </li>
          </ul>
        </div>
      
    
  </section>
  )
}

