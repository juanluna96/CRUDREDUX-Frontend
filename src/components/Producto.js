import React, { Fragment } from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'
import FA from 'react-fontawesome';

// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productosActions';
import Swal from 'sweetalert2';

const Producto = ({ producto }) => {

    const dispatch = useDispatch();

    // Confirmar si desea eliminarlo
    const confirmarEliminarProducto = (id) => {
        // Preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Una vez eliminado el producto no podrás recuperarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#78c2ad',
            cancelButtonColor: '#ff7851',
            confirmButtonText: 'Si, borrar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Pasarlo al action
                dispatch(borrarProductoAction(id));
            }
        })
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
