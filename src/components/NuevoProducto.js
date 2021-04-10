import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

// Actions de redux
import { crearNuevoProductoAction } from '../actions/productosActions';

const NuevoProducto = () => {
    // Utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    // Cuando el usuario haga submit
    const submitNuevoProducto = (e) => {
        e.preventDefault();

        // Validar formulario

        // Si no hay errores

        // Crear nuevo producto
        dispatch(crearNuevoProductoAction());
    }

    return (
        <div className="container mt-5 row justify-content-center">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="mb-4 text-center card-title font-weight-bold text-uppercase">Agregar nuevo producto</h5>
                        <p className="card-text">
                            <form onSubmit={ submitNuevoProducto }>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre del producto</label>
                                    <input className="form-control" type="text" name="nombre" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="precio">Precio</label>
                                    <input className="form-control" type="text" name="precio" />
                                </div>
                                <button className="btn btn-primary font-weight-bold text-uppercase d-block w-100" type="submit">Agregar</button>
                            </form>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
