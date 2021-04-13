import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

// Cada reducer tiene su state
const initialState = {
    alerta: null
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case MOSTRAR_ALERTA:
            return { ...state, alerta: payload }
        case OCULTAR_ALERTA:
            return { ...state, alerta: null }
        default:
            return state
    }
}
