import Image from 'next/image';

export default function ProviderCard({
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
    <div className="shadow-lg border-2 m-4 rounded-md w-64 h-64">
      <div className="h-40">
        <Image
          className="h-full w-auto"
          src={image}
          alt="Proveedor"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="p-2 ">
        <div className="font-medium text-lg">{name}</div>
        <div className="text-sm">{job}</div>
        <div className="text-sm">{address}</div>
      </div>
    </div>
  );
}
