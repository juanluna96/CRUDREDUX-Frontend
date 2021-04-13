import React, { Fragment } from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'
import FA from 'react-fontawesome';

// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productosActions';

const Producto = ({ producto }) => {

    const dispatch = useDispatch();

    // Confirmar si desea eliminarlo
    const confirmarEliminarProducto = (id) => {
        // Preguntar al usuario
        // Pasarlo al action
        dispatch(borrarProductoAction(id));
    }

    return (
        <Fragment>
            <tr>
                <td>{ producto.nombre }</td>
                <td><NumberFormat className="font-weight-bold text-primary" value={ producto.precio } displayType={ 'text' } thousandSeparator={ true } prefix={ '$' } /></td>
                <td className="text-center acciones">
                    <Link to={ `/productos/editar/${producto.id}` } className="mr-2 btn btn-primary"><FA name="edit" /></Link>
                    <button className="btn btn-danger" type="button" onClick={ () => confirmarEliminarProducto(producto.id) }><FA name="trash" /></button>
                </td>
            </tr>
        </Fragment >
    )
}

export default Producto
