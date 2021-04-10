import React from 'react';

const EditarProducto = () => {
    return (
        <div className="container mt-5 row justify-content-center">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="mb-4 text-center card-title font-weight-bold text-uppercase">Editar producto</h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre del producto</label>
                                <input className="form-control" type="text" name="nombre" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio</label>
                                <input className="form-control" type="text" name="precio" />
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
