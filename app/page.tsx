import Banner from './components/banner';
import ProviderCard from './components/provider-card';
import IdeaCard from './components/idea-card';

export default function Home() {
  return (
    <>
      <Banner />
      <section id="main__content" className="mx-auto max-w-7xl mt-5">
        <h2 className="text-2xl font-medium">¿Con qué podemos ayudarte hoy?</h2>
        <section id="providers" className="mt-10 flex flex-wrap justify-center">
          {/* ToDo: Get providers from API */}
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
          <ProviderCard
            name="Pedro Perez"
            job="Reparaciones"
            address="Vitacura, Santiago"
            image="/images/providers/reparaciones.jpeg"
          />
          <ProviderCard
            name="Juan Mecanico"
            job="Mecanica Automotríz"
            address="Providencia, Santiago"
            image="/images/providers/mecanico.jpeg"
          />
        </section>

        <h2 className="text-2xl font-medium">Ideas para mejorar tu hogar</h2>
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
