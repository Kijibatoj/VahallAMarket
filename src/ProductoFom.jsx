import { useState } from "react";
import './index.css'
export default function ProductoFom({CrearProducto}) {
  const [productInfo, setProducto] = useState({
    title: '',
    descripcion: '',
    Image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...productInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CrearProducto(productInfo);
    console.log('Producto creado:', productInfo);
  };

  return (
    <div className="App p-4">
      <h2 className="text-2xl font-bold mb-4">Crear Producto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Titulo:</label>
          <input
            type="text"
            name="title"
            value={productInfo.nombre}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={productInfo.descripcion}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"

          />
        </div>
        <div>
        <label className="block text-sm font-medium text-gray-700">URL de la Imagen:</label>
          <input
            type="text"
            name="Image"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Imagen URL"
            value={productInfo.Image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Crear Producto</button>
      </form>
    </div>
  );
}
