import React from 'react';
import Image from 'next/image';

export default function UserCard({
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
<div className="flex items-center">
<div className=" profile-image w-24 h-24 rounded-full overflow-hidden">
<Image
  className="h-full w-auto"
  src={avatar}
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
</div>

  )}