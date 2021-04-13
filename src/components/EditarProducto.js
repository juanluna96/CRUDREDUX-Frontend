import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productosActions';

const EditarProducto = ({ history }) => {
    // Nuevo state de producto
    const [producto, setProducto] = useState({
        nombre: '',
        precio: 0
    });

    const productoeditar = useSelector(state => state.productos.productoeditar);


    // Llenar el state automáticamente
    useEffect(() => {
        setProducto(productoeditar);
    }, [productoeditar])

    const dispatch = useDispatch();

    if (!producto) {
        // Redireccionar al home
        history.push('/');
        return null;
    }

    // Leer los datos del formulario
    const onChangeFormulario = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }


    const onSubmitEditarProducto = (e) => {
        e.preventDefault();

        editarProductoAction();
    }

    return (
        <div className="container mt-5 row justify-content-center">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="mb-4 text-center card-title font-weight-bold text-uppercase">Editar producto</h5>
                        <form onSubmit={ onSubmitEditarProducto }>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre del producto</label>
                                <input value={ producto.nombre } className="form-control" type="text" name="nombre" onChange={ onChangeFormulario } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio</label>
                                <NumberFormat isNumericString='true' value={ producto.precio } className="form-control" name="precio" id="precio" thousandSeparator={ true } prefix={ 'COP $' } onChange={ onChangeFormulario } />
                            </div>
                            <button className="btn btn-primary font-weight-bold text-uppercase d-block w-100" type="submit">Guardar cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
