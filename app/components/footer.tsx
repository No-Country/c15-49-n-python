import Image from 'next/image';

export default function Header() {
  return (
    <nav className="border-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-end">
          <Image
            src="/imagotype.png"
            width={50}
            height={1}
            alt="Arreglos Ya"
          ></Image>
        </div>
      </div>
    </nav>
  );
}
