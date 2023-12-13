'use client';

export default function LoginPage() {
  const handleLogin = () => {
    alert('Login');
  };

  return (
    <div className="h-screen mx-auto max-w-7xl mt-5">
      <div className="border-2 rounded-xl p-10">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Iniciar Sesión
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-5">
          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Usuario
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith@arreglosya.com"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Clave
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="************"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <button
              type="submit"
              className="w-64 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleLogin}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
