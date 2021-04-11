import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO } from '../types';

// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch(agregarProducto());
        try {
            dispatch(agregarProductoExito(producto));
        } catch (error) {
            dispatch(agregarProductoError(true))
        }
    }
}

const agregarProducto = () => {
    return ({
        type: AGREGAR_PRODUCTO,
        payload: true
    })
}

// Si el producto se guarda en la base de datos

const agregarProductoExito = (producto) => {
    return ({
        type: AGREGAR_PRODUCTO_EXITO,
        payload: producto
    })
}

// Si hubo un error
const agregarProductoError = () => {
    return ({

    })
}