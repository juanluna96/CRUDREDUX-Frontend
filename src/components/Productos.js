import React, { Fragment, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosActions';
import Producto from './Producto';
import Spinner from './Spinner/Spinner';

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
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return (
        <Fragment>
            <h2 className="my-5 text-center">Listado de productos</h2>
            {error ? <p className="my-2 text-center font-weight-bold alert alert-danger">Hubo un error</p> : null }
            {cargando ? <Spinner></Spinner> : null }
            <table className="table table-light table-striped">
                <thead className="thead-light">
                    <tr>
                        <th scope="col" className="text-white bg-success">Nombre</th>
                        <th scope="col" className="text-white bg-success">Precio</th>
                        <th scope="col" className="text-white bg-success">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos.length === 0 ? (<tr><td colspan="3" className="text-center">No hay productos</td></tr>) : (
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
