function ListProduc(props) {
  if (props.Productos.length === 0) {
    return <h1>No hay productos</h1>;
  }
  return (
    
    <div className=" flex flex-row max-w-sm rounded   ">
      {props.Productos.map((Productos) => (
        <div key={Productos.id}>
          <img className="w-full"  alt="Imagen del Producto" src={Productos.Image}></img>
          <div className="px-6 py-4">
 
    <div className="font-bold text-xl mb-2">{Productos.title}</div>
 
    <p className="text-gray-700 text-base">
    {Productos.descripcion}
    </p>
  </div>

  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Baratico</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#LoMejordeLoMejor</span>
  </div>
  <div className="px-6 pt-4 pb-2">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Añadir al Carrito
    </button>
  </div>

        </div>
      ))}
    </div>
  );
}

export default ListProduc;
