import React from 'react';

function TaskWork() {
  return (
    <section className="bg-gray-100 py-8 max-w-md mx-auto">
      <h2 className="text-3xl text-center mb-4">Coordinar Trabajo <br></br><span className="text-gradient">Usuario ---- Proveedor </span></h2>
      <p className="text-center mb-8">
        Aqui podrá ver los detalles del servicio a realizar.
      </p>
      <div className="flex justify-center">
        <article className="w-160 bg-white shadow-lg rounded-lg p-6">
         <div className="flex justify-center">
          {/* Aca agregar card de usuario */}
          <img
            src="assets/complete-package.svg"
            alt="Complete Package"
            className="w-12 mx-auto mb-4"
          />
          <img
            src="../conectar.png"
            alt="Conectar"
            className="w-12 mb-4"
          />
          {/* Aca agregar card de Proveedor */}
          <img
            src="assets/complete-package.svg"
            alt="Complete Package"
            className="w-12 mx-auto mb-4"
          />
          </div>
          <h3 className="text-xl font-semibold mb-2">Detalle del Servicio</h3>
          <ul className="text-sm">
            <li className="mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam provident in ipsa delectus, voluptatum distinctio asperiores iusto explicabo velit voluptatibus sunt, ab ipsum molestias deserunt quam, quae mollitia. Quas, iste?
            </li>
          </ul>
          <div className="flex items-center justify-center mb-4">
            <img
              alt="Price"
              src="assets/price.svg"
              className="w-4 mr-1"
            />
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
            href="https://learning.atheros.ai/course-detail/ux-design-process"
          >
            Confirmar Ahora
          </a>
          <div className="border-b mt-6 mb-4"></div>
          <ul className="text-sm">
            <li className="mb-2">
              Los detalles de la confirmacion del trabajo se pueden ver en: Http//arreglosYa/AcuerdoDeServicio 👇🏼
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default TaskWork;