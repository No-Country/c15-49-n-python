import React from 'react';
import ProviderCard from '../components/provider-card';
import IdeaCard from '../components/idea-card';
import UserCard from '../components/user-card';


export default function ProfileUser({
  name,
  job,
  address,
  avatar,
  image,
}: {
  name: string;
  job: string;
  address: string;
  avatar: string;
  image: string;
}) {
  
    return (
    <div className="profile-card bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <UserCard
      name="El viejo Gepetto"
      job="Carpintero"
      address="Maipú, Santiago"
      avatar='/images/providers/avatar.png'
      image="/images/providers/carpintero.jpeg"
      />

      
      <section className="p-2 m-2 mt-auto shadow-lg">
        <div className="flex justify-center w-screen">
          <button className="p-2 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Editar Perfil
          </button>
          <button className="p-2 m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Agregar tarjeta de Proveedor
          </button>
        </div>
      </section>
        {/* <h3 className="p-1 m-1 border-1 w-screen text-xl font-bold"></h3> */}
        <h1 className="m-1 p-1 text-2xl w-screen text-xl font-bold mt-2">Proveedores Favoritos</h1>

        <section id="providers" className="mt-4 flex flex-wrap justify-center shadow-lg">
        <ProviderCard
            name="El viejo Gepetto"
            job="Carpintero"
            address="Maipú, Santiago"
            avatar='/images/providers/avatar.png'
            image="/images/providers/carpintero.jpeg"
          />
          <ProviderCard
            name="Jhon Smith"
            job="Fontanero"
            address="Lampa, Santiago"
            avatar='/images/providers/avatar.png'
            image="/images/providers/fontanero.jpeg"
          />
          <ProviderCard
            name="Jardines Babilonios"
            job="Jardinero"
            address="Lampa, Santiago"
            avatar='/images/providers/avatar.png'
            image="/images/providers/jardinero.jpeg"
          />
          <ProviderCard
            name="La Pinturería"
            job="Pintor"
            address="Santiago, Santiago"
            avatar='/images/providers/avatar.png'
            image="/images/providers/pintor.jpeg"
          />
      </section>
      <h1 className="m-1 p-1 text-2xl w-screen text-xl font-bold mt-2">Proveedores Favoritos</h1>

      <section id="ideas" className="mt-4 flex flex-wrap justify-center shadow-lg">
          {/* ToDo: Get providers from API */}
          <IdeaCard
            title="Domando el frió: 5 Trucos para decorar tu casa en invierno"
            description="Lorem ipsum dolor sit amet"
            image="/images/ideas/idea-1.webp"
          />
          <IdeaCard
            title="¡Reenamórate de tu casa! 7 razones por las que vale la pena contratar un ..."
            description="Lorem ipsum dolor sit amet"
            image="/images/ideas/idea-2.webp"
          />
          <IdeaCard
            title="Living pequeño, grandes posibilidades: 10 trucos de decoración"
            description="Lorem ipsum dolor sit amet"
            image="/images/ideas/idea-1.webp"
          />
        </section>
    </div>
  );
};