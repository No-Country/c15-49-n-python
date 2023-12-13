'use client';

import { useState } from 'react';
import Link from 'next/link';

function MenuItem({
  label,
  link,
  onClick,
}: {
  label: string;
  link: string;
  onClick: () => any;
}) {
  return (
    <div
      className="block px-4 py-2 text-sm text-gray-700 active:bg-gray-100"
      role="menuitem"
    >
      <Link href={link} onClick={onClick}>
        {label}
      </Link>
    </div>
  );
}

export default function ProfileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (): void => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="relative ml-3">
      <button
        type="button"
        className="relative flex rounded-full bg-gray-100 text-sm active:outline-none active:bg-gray-200"
        id="user-menu-button"
        onClick={toggleMenu}
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Abrir menú</span>
        <img
          className="h-8 w-8 rounded"
          src="/imagotype.png"
          alt="Profile menu"
        ></img>
      </button>

      <div
        className={`${
          showMenu ? '' : 'hidden'
        } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
      >
        <MenuItem
          label="Mi Cuenta"
          link="/login"
          onClick={toggleMenu}
        ></MenuItem>
        <MenuItem
          label="Solicitudes"
          link="/login"
          onClick={toggleMenu}
        ></MenuItem>
        <MenuItem
          label="Iniciar Sessión"
          link="/login"
          onClick={toggleMenu}
        ></MenuItem>
      </div>
    </div>
  );
}
