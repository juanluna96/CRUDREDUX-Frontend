import React from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';

const EditarProducto = ({ history }) => {
    const dispatch = useDispatch();
    const producto = useSelector(state => state.productos.productoeditar);

    if (!producto) {
        // Redireccionar al home
        history.push('/');
        return null;
    }

    return (
        <div className="container mt-5 row justify-content-center">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="mb-4 text-center card-title font-weight-bold text-uppercase">Editar producto</h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre del producto</label>
                                <input value={ producto.nombre } className="form-control" type="text" name="nombre" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio</label>
                                <NumberFormat isNumericString='true' value={ producto.precio } className="form-control" name="precio" id="precio" thousandSeparator={ true } prefix={ 'COP $' } />
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
