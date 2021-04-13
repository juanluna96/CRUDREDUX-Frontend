import React, { Fragment } from 'react'
import NumberFormat from 'react-number-format'
import { useHistory } from 'react-router-dom'
import FA from 'react-fontawesome';

// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productosActions';
import Swal from 'sweetalert2';

const Producto = ({ producto }) => {

    const dispatch = useDispatch();
    const history = useHistory(); //Usar history para la redireccion

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

    // Funcion que redirige de forma programada
    const redireccionarEdicion = (producto) => {
        history.push(`/productos/editar/${producto.id}`);
        dispatch(obtenerProductoEditar(producto));
    }

    return (
        <Fragment>
            <tr>
                <td>{ producto.nombre }</td>
                <td><NumberFormat className="font-weight-bold text-primary" value={ producto.precio } displayType={ 'text' } thousandSeparator={ true } prefix={ 'COP $' } /></td>
                <td className="text-center acciones">
                    <button className="mr-2 btn btn-primary" type="button" onClick={ () => redireccionarEdicion(producto) }><FA name="edit" /></button>
                    <button className="btn btn-danger" type="button" onClick={ () => confirmarEliminarProducto(producto.id) }><FA name="trash" /></button>
                </td>
            </tr>
        </Fragment >
    )
}

export default Producto
