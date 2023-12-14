import Image from 'next/image';

export default function IdeaCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="shadow-lg border-2 m-4 rounded-md w-64 h-64">
      <div className="h-40">
        <Image
          className="h-full w-auto"
          src={image}
          alt="Idea"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="p-2">
        <div className="font-medium text-md">{title}</div>
      </div>
    </div>
  );
}
