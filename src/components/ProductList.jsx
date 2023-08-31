import React from "react";
import {data} from "../data";
import DetalleLibroModal from "./DetalleLibroModal";
import { useState } from "react";

export const ProductList=({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,    
})=>{

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [libroSeleccionado, setLibroSeleccionado] = useState(null);

    const mostrarDetalleLibro = (product) => {
        setLibroSeleccionado(product);
        setModalIsOpen(true);
    };

    const cerrarModal = () => {
        setModalIsOpen(false);
        setLibroSeleccionado(null);
    };


    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
                );
                setTotal(total + product.price * product.quantity);
                setCountProducts(countProducts + product.quantity);
                return setAllProducts([...products]);
            }
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product])
    };


    return(
        <div className="container-items">
            {data.map(product=>(
                <div className="item" key={product.id}>
                    <figure>
                        <img src={product.urlImage} alt={product.title} onClick={() => mostrarDetalleLibro(product)}/>
                    </figure>
                    <div className="info-product">
                        <h2>{product.nameProduct}</h2>
                        <p className="price">${product.price}</p>
                        <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                    </div>
                </div>
                
            ))}
                <DetalleLibroModal
                    product={libroSeleccionado}
                    isOpen={modalIsOpen}
                    onRequestClose={cerrarModal}
                />
        </div>
    );
}         