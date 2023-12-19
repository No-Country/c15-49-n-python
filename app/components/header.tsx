import Image from 'next/image';
import Link from 'next/link';

import NotificationsMenu from './notifications-menu';
import ProfileMenu from './profile-menu';

export default function Header() {
  return (
    <nav className="bg-white border-2 fixed top-0 left-0 w-full" style={{ zIndex: '999' }}>
      {/* Desktop menu */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Abrir menú</span>
              {/* <!--
                    Icon when menu is closed.

                    Menu open: "hidden", Menu closed: "block"
                --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
                    Icon when menu is open.

                    Menu open: "block", Menu closed: "hidden"
                --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Main menu */}
          <section
            id="main-menu__section"
            className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            {/* Logo */}
            <div
              id="logo__container"
              className="flex flex-shrink-0 items-center"
            >
              <Link href="/">
                <Image
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Arreglos Ya"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </Link>
            </div>
            {/* Buttons */}
            <div id="menu__buttons" className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Proveedores
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Ideas
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Comunidad
                </a>
              </div>
            </div>
          </section>

          <section className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NotificationsMenu></NotificationsMenu>
            <ProfileMenu></ProfileMenu>
          </section>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <section id="mobile-menu" className="hidden sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Proveedores
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Ideas
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Comunidad
          </a>
        </div>
      </section>
    </nav>
  );
}
