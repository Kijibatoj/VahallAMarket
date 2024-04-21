
import Header from './Header';
import ListProduc from './ListProduc'
import ProductoFom from './ProductoFom'
import { Productos as data } from "./Productos";
import { useState, useEffect } from "react";
function MaketplaceApp() {
  const [Productos, setproductos] = useState([]);
  useEffect(()=>{
    setproductos(data)
  }, [])
  function CrearProducto(productInfo){
   setproductos( [...Productos, {
    title: productInfo.title,
    id: Productos.length,
    descripcion: productInfo.descripcion,
    Image: productInfo.Image
   }])
  }

  return (
    <>
    <Header/>
   <ListProduc Productos={Productos}/>
   <ProductoFom CrearProducto={CrearProducto}/>
    </>
  )
}

export default MaketplaceApp
