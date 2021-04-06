import React, { Fragment } from 'react'

const Productos = () => {
    return (
        <Fragment>
            <h2 className="my-5 text-center">Listado de productos</h2>
            <table className="table table-light">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Producto 1</td>
                        <td>20.000</td>
                        <td>Acciones</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Productos
