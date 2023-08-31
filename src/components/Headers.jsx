import { useState } from "react";

export const Headers=({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
    })=>{

        const [active, setActive] = useState(false);

        const onDeleteProduct = product => {

            const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar el libro ${product.title} del carrito?`);

            if(confirmacion){

                const results = allProducts.filter(
                    item => item.id !== product.id
                );
                setTotal(total - product.price * product.quantity);
                setCountProducts(countProducts - product.quantity);
                setAllProducts(results);
            }
        };

        const onCleanCart = () => {

            const confirmacion = window.confirm('Estas seguro que deseas vaciar todo el carrito?');

            if(confirmacion){   
                setAllProducts([]);
                setTotal(0);
                setCountProducts(0);
            }
        };
        
    return(
        <header>
            <h1>Tienda de Libros</h1>
            <div className='container-icon'>
                <div className='container-cart-icon' onClick={()=>setActive(!active)}>
                    <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png" alt="carrito" className="icon-cart" />
                    <div className='count-products'>
                        <span id='contador-productos'>{countProducts}</span>
                    </div>
                </div>

                <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                    {allProducts.length ? (
                        <>
                            <div className='row-product'>
                                {allProducts.map(product=>(
                                    <div className='cart-product'key={product.id}>
                                        <div className='info-cart-product'>
                                            <span className='cantidad-producto-carrito'>
                                                {product.quantity}
                                            </span>
                                            <span><img src={product.urlImage}/></span>
                                            <p className='titulo-producto-carrito'>
                                                {product.title}
                                            </p>
                                            <span className='precio-producto-carrito'>
                                                ${product.price}
                                            </span>

                                        </div>
                                        
                                        <img src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png" alt="cerrar" className="icon-close" onClick={() => onDeleteProduct(product)}/>
                                        
                                    </div>
                                ))}
                            </div>
                            <div className='cart-total'>
                                <h3>Total:</h3>
                                <span className='total-pagar'>${total}</span>
                            </div>
                            <button className='btn-clear-all' onClick={onCleanCart}>Vaciar Carrito</button>
                        </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};