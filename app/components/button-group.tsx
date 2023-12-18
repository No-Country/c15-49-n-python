import React from 'react';

const ButtonGroup = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="m-2 p-2 bg-white rounded-lg shadow-md">
      <button className="flex flex-col items-center justify-center w-24 h-24 bg-white-100 text-white rounded-lg">
          <img src="images/icons/martillo.png" alt="martillo" className="w-20 h-20" />
          <span className="text-center text-black">Albañileria</span>
        </button>
      </div>
      <div className="m-2 p-2 bg-white rounded-lg shadow-md">
      <button className="flex flex-col items-center justify-center w-24 h-24 bg-white-100 text-white rounded-lg">
          <img src="images/icons/arquitecto.png" alt="arquitecto" className="w-20 h-20" />
          <span className="text-center text-black">Arquitectura</span>
        </button>
      </div>
      <div className="m-2 p-2 bg-white rounded-lg shadow-md">
      <button className="flex flex-col items-center justify-center w-24 h-24 bg-white-100 text-white rounded-lg">
          <img src="images/icons/jardinero.png" alt="jardinero" className="w-20 h-20" />
          <span className="text-center text-black">Jardineria</span>
        </button>
      </div>
      <div className="m-2 p-2 bg-white rounded-lg shadow-md">
      <button className="flex flex-col items-center justify-center w-24 h-24 bg-white-100 text-white rounded-lg">
          <img src="images/icons/pintor.png" alt="pintor" className="w-20 h-20" />
          <span className="text-center text-black">Pintura</span>
        </button>
      </div>
      <div className="m-2 p-2 bg-white rounded-lg shadow-md">
      <button className="flex flex-col items-center justify-center w-24 h-24 bg-white-100 text-white rounded-lg">
          <img src="images/icons/plomero.png" alt="plomero" className="w-20 h-20" />
          <span className="text-center text-black">Plomeria</span>
        </button>
      </div>
      <div className="m-2 p-2 bg-white rounded-lg shadow-md">
      <button className="flex flex-col items-center justify-center w-24 h-24 bg-white-100 text-white rounded-lg">
          <img src="images/icons/carpintero.png" alt="carpintero" className="w-20 h-20" />
          <span className="text-center text-black">Carpinteria</span>
        </button>
      </div>
      <div className="m-2 p-2 bg-white rounded-lg shadow-md">
      <button className="flex flex-col items-center justify-center w-24 h-24 bg-white-100 text-white rounded-lg">
          <img src="images/icons/otros.png" alt="otros" className="w-20 h-20" />
          <span className="text-center text-black"></span>
        </button>
      </div>
      <div className="m-2 p-2 bg-white rounded-lg shadow-md">
      <button className="flex flex-col items-center justify-center w-24 h-24 bg-white-100 text-white rounded-lg">
          <img src="favicon.ico" alt="logo" className="w-20 h-20" />
          <span className="text-center text-black"></span>
        </button>
      </div>
      <div className="m-2 p-2 bg-white rounded-lg shadow-md">
      </div>    
          
    </div>
  );
};

export default ButtonGroup;