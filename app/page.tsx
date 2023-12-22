import Banner from './components/banner';
import ProviderCard from './components/provider-card';
import IdeaCard from './components/idea-card';
import ButtonGroup from './components/button-group';
import SearchInput from './components/search-input';

export default function Home() {
  return (
    <>
      <Banner />
      <SearchInput />
      
      <section id="main__content" className="mx-auto max-w-7xl mt-5">
        <h2 className="m-1 p-1 text-2xl font-medium mt-2">¿Con qué podemos ayudarte hoy?</h2>
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

        <h2 className="m-1 p-1 text-2xl font-medium mt-2">Ideas para mejorar tu hogar</h2>
        <section id="ideas" className="mt-4 flex flex-wrap justify-center">
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
          <IdeaCard
            title="Domando el frió: 5 Trucos para decorar tu casa en invierno"
            description="Lorem ipsum dolor sit amet"
            image="/images/ideas/idea-3.webp"
          />
        </section>
      </section>
    </>
  );
}
