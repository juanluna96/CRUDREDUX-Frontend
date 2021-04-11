import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS
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
        case AGREGAR_PRODUCTO_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}
