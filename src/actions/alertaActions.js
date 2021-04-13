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

// Ocultar alerta
export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch(ocultarAlerta());
    }
}

const ocultarAlerta = () => {
    return ({
        type: OCULTAR_ALERTA
    })
}