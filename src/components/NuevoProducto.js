import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// Actions de redux
import { crearNuevoProductoAction } from '../actions/productosActions';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';
import Spinner from './Spinner/Spinner';
import FA from 'react-fontawesome';

const NuevoProducto = ({ history }) => {
    // State del componente
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    // Utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);

    // Cuando el usuario haga submit
    const submitNuevoProducto = (e) => {
        e.preventDefault();

        // Validar formulario
        if (nombre.trim() === '' || precio <= 0) {
            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3 font-weight-bold',
                icono: 'ban'
            }

            dispatch(mostrarAlerta(alerta));
            return;
        }

        // Si no hay errores
        dispatch(ocultarAlertaAction());

        // Crear nuevo producto
        dispatch(crearNuevoProductoAction({
            nombre,
            precio
        }));

        // Redireccionar al home
        history.push('/');
    }

    return (
        <div className="container mt-5 row justify-content-center">
            <div className="col-md-5">
                { alerta ? <p className={ alerta.classes }><FA name={ alerta.icono } className="mr-1 " style={ { fontSize: '18px' } } />   { alerta.msg }</p> : null }
                <div className="card">
                    <div className="card-body">
                        <h5 className="mb-4 text-center card-title font-weight-bold text-uppercase">Agregar nuevo producto</h5>
                        <p className="card-text">
                            <form onSubmit={ submitNuevoProducto }>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre del producto</label>
                                    <input className="form-control" type="text" name="nombre" value={ nombre } onChange={ e => setNombre(e.target.value) } />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="precio">Precio</label>
                                    <input className="form-control" type="text" name="precio" value={ precio } onChange={ e => setPrecio(Number(e.target.value)) } />
                                </div>
                                { cargando ? <Spinner></Spinner> : <button className="btn btn-primary font-weight-bold text-uppercase d-block w-100" type="submit">Agregar</button> }
                            </form>
                        </p>
                    </div>
                </div>
                { error ? <div className="p-2 mt-4 text-center alert alert-danger" role="alert">Hubo un error</div> : null }
            </div>
        </div>
    )
}

export default NuevoProducto
