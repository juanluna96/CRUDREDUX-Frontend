import React, { Fragment, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosActions';
import Producto from './Producto';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // Consultar la api
        const cargarProductos = () => {
            dispatch(obtenerProductosAction());
        }
        cargarProductos();
    }, []);

    // Obtener el state
    const productos = useSelector(state => state.productos.productos)

    return (
        <Fragment>
            <h2 className="my-5 text-center">Listado de productos</h2>
            <table className="table table-light table-striped">
                <thead className="thead-light">
                    <tr>
                        <th scope="col" className="text-white bg-success">Nombre</th>
                        <th scope="col" className="text-white bg-success">Precio</th>
                        <th scope="col" className="text-white bg-success">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos.lenght === 0 ? 'No hay productos' : (
                        productos.map((producto) => {
                            return (<Producto key={ producto.id } producto={ producto }></Producto>)
                        })
                    ) }
                </tbody>
            </table>
        </Fragment>
    )
}

export default Productos
