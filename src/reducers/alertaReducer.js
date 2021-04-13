import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

// Cada reducer tiene su state
const initialState = {
    alerta: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state
    }
}
