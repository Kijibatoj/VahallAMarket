function Header() {
  return (
    <div>
<div className="bg-indigo-950 text-white">
 
  <nav className="container mx-auto flex items-center justify-between p-4">
 
    <div className="font-bold text-xl">
      MakertSimple
    </div>
    <ul className="flex">
      <li className="mx-2">
        <a href="#" className="hover:text-gray-300">Inicio</a>
      </li>
      <li className="mx-2">
        <a href="#" className="hover:text-gray-300">Productos de consolas</a>
      </li>
      <li className="mx-2">
        <a href="#" className="hover:text-gray-300">Telefonos</a>
      </li>
      <li className="mx-2">
        <a href="#" className="hover:text-gray-300">Computadoras</a>
      </li>
      <li className="mx-2">
        <a href="#" className="hover:text-gray-300">Carrito</a>
      </li>
    </ul>
  </nav>
</div>
      </div>
  );
}

export default Header;
