import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITOSA,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_ELIMINADO_EXITO,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: '',
    loading: false,
    productoeliminar: null,
    productoeditar: null
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case COMENZAR_EDICION_PRODUCTO:
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return { ...state, loading: payload }
        case AGREGAR_PRODUCTO_EXITO:
            return { ...state, loading: false, productos: [...state.productos, payload] }
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
        case PRODUCTO_EDITADO_ERROR:
            return { ...state, loading: false, error: payload }
        case DESCARGA_PRODUCTOS_EXITOSA:
            return { ...state, loading: false, error: null, productos: payload }
        case OBTENER_PRODUCTO_ELIMINAR:
            return { ...state, productoeliminar: payload }
        case PRODUCTO_ELIMINADO_EXITO:
            return { ...state, productos: state.productos.filter((producto) => producto.id !== state.productoeliminar), productoeliminar: null }
        case OBTENER_PRODUCTO_EDITAR:
            return { ...state, productoeditar: payload }
        case PRODUCTO_EDITADO_EXITO:
            return { ...state, productoeditar: null, productos: state.productos.map((producto) => producto.id === payload.id ? producto = payload : producto) }
        default:
            return state
    }
}
