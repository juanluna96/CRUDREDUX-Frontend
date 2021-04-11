import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITOSA
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: '',
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return { ...state, loading: payload }
        case AGREGAR_PRODUCTO_EXITO:
            return { ...state, loading: false, productos: [...state.productos, payload] }
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return { ...state, loading: false, error: payload }
        case DESCARGA_PRODUCTOS_EXITOSA:
            return { ...state, loading: false, error: null, productos: payload }
        default:
            return state
    }
}
