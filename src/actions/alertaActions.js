import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';


// Muestra alerta
export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch(crearAlerta(alerta));
    }
}

const crearAlerta = (alerta) => {
    return ({
        type: MOSTRAR_ALERTA,
        payload: alerta
    })
}