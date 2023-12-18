import React from 'react';
import Image from 'next/image';
import ProviderCard from '../components/provider-card';
import IdeaCard from '../components/idea-card';

export default function ProfileUser({
    name,
    job,
    address,
    image,
  }: {
    name: string;
    job: string;
    address: string;
    image: string;
  }) {
  
    return (
    <div className="profile-card bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="profile-image w-24 h-24 rounded-full overflow-hidden">
      <Image
          className="h-full w-auto"
          src={image}
          alt="Proveedor"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="profile-details m-3 p-3 mt-6">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg">{job}</p>
        <p className="text-lg">{address}</p>
      </div>
      <section className="p-2 m-2 mt-auto">
        <div className="flex justify-center md:justify-start w-screen">
          <button className="p-2 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Editar Perfil
          </button>
          <button className="p-2 m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Agregar tarjeta de Proveedor
          </button>
        </div>
      </section>
        <h3 className="p-1 m-1 shadow-lg border-1 w-screen text-xl font-bold">Proveedores Favoritos</h3>
      <section className="mt-auto">
        <ProviderCard
            name="El viejo Gepetto"
            job="Carpintero"
            address="Maipú, Santiago"
            image="/images/providers/carpintero.jpeg"
          />
          <ProviderCard
            name="Jhon Smith"
            job="Fontanero"
            address="Lampa, Santiago"
            image="/images/providers/fontanero.jpeg"
          />
          <ProviderCard
            name="Jardines Babilonios"
            job="Jardinero"
            address="Lampa, Santiago"
            image="/images/providers/jardinero.jpeg"
          />
          <ProviderCard
            name="La Pinturería"
            job="Pintor"
            address="Santiago, Santiago"
            image="/images/providers/pintor.jpeg"
          />
      </section>
      <h3 className="p-1 m-1 shadow-lg border-1 w-screen text-xl font-bold">Ideas Guardadas</h3>

      <section className="mt-auto">
        <section id="ideas" className="mt-10 flex flex-wrap justify-center">
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
      </section>
    </div>
  );
};