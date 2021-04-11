import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO } from '../types';
// Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: '',
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case AGREGAR_PRODUCTO:
            return { ...state, loading: payload }
        case AGREGAR_PRODUCTO_EXITO:
            return { ...state, loading: false, productos: [...state.productos, payload] }
        default:
            return state
    }
}
