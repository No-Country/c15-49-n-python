import Banner from './components/banner';
import Card from './components/card';

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <section id="main__content" className="mx-auto max-w-7xl mt-5">
        <h2 className="text-2xl font-medium">¿Con qué podemos ayudarte hoy?</h2>
        <div id="cards" className="mt-10 flex flex-wrap justify-center">
          <Card>Proveedor 1</Card>
          <Card>Proveedor 2</Card>
          <Card>Proveedor 3</Card>
          <Card>Proveedor 4</Card>
          <Card>Proveedor 5</Card>
          <Card>Proveedor 6</Card>
        </div>
      </section>
    </>
  );
}
