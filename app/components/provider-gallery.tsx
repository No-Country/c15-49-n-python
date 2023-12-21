import React from 'react';
import Image from 'next/image';
import ProviderCard from '../components/provider-card';
import ButtonGroup from '../components/button-group';
import SearchInput from '../components/search-input';


export default function ProviderGallery({
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
  <div>
    <SearchInput />

  <section id="providers" className="mt-4 flex flex-wrap justify-center">
          {/* ToDo: Get providers from API */}
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
          <ProviderCard
            name="Pedro Perez"
            job="Reparaciones"
            address="Vitacura, Santiago"
            avatar='/images/providers/avatar.png'
            image="/images/providers/reparaciones.jpeg"
          />
          <ProviderCard
            name="Juan Mecanico"
            job="Mecanica Automotríz"
            address="Providencia, Santiago"
            avatar='/images/providers/avatar.png'
            image="/images/providers/mecanico.jpeg"
          />
</section>
    
  <ButtonGroup />

    </div>
  );
};
        