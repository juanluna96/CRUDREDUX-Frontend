import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS
} from '../types';
import { clienteAxios } from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            // Insertar en la api
            await clienteAxios.post('/productos', producto);

            // Si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto));

            // Alerta
            Swal.fire(
                'Correcto',
                `El producto ${producto.nombre} se agrego correctamente`,
                'success'
            )

        } catch (error) {
            console.log(error);
            // Si hay un error cambiar el state
            dispatch(agregarProductoError(true));

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Se ha presentado un error,porfavor intenta de nuevo'
            })
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
const agregarProductoError = (estado) => {
    return ({
        type: AGREGAR_PRODUCTO_ERROR,
        payload: estado
    })
}

// Función que descarga los productos de la base de datos

export function obtenerProductosAction() {
    return async function (dispatch) {
        dispatch(descargarProductos())
    }
}

const descargarProductos = () => {
    return ({
        type: COMENZAR_DESCARGA_PRODUCTOS,
        payload: true
    })
}