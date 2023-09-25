//navbar component

function NavBar() {
  return <>

    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Rick and Morty</span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Opciones</title>
                <path d="M0 0h20v20H0z" fill="none" />
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 5h16v2H2V5zm0 6h16v-2H2v2zm0 6h16v-2H2v2z"
                fill="white"
                />
            </svg>
            </button>
        </div>
        </nav>
        
  </>;
}

export default NavBar;
