import React, { Fragment } from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'
import FA from 'react-fontawesome';

const Producto = ({ producto }) => {
    return (
        <Fragment>
            <tr>
                <td>{ producto.nombre }</td>
                <td><NumberFormat className="font-weight-bold text-primary" value={ producto.precio } displayType={ 'text' } thousandSeparator={ true } prefix={ '$' } /></td>
                <td className="acciones">
                    <Link to={ `/productos/editar/${producto.id}` } className="mr-2 btn btn-primary"><FA name="edit" /></Link>
                    <button className="btn btn-danger" type="button"><FA name="trash" /></button>
                </td>
            </tr>
        </Fragment >
    )
}

export default Producto
