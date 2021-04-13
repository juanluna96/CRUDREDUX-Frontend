import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO
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

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch(descargaProductosExitosa(respuesta.data));
        } catch (error) {
            console.log(error);
            dispatch(descargaProductosError(true));
        }
    }
}

const descargarProductos = () => {
    return ({
        type: COMENZAR_DESCARGA_PRODUCTOS,
        payload: true
    })
}

const descargaProductosExitosa = (productos) => {
    return ({
        type: DESCARGA_PRODUCTOS_EXITOSA,
        payload: productos
    })
}

const descargaProductosError = (estado) => {
    return ({
        type: DESCARGA_PRODUCTOS_ERROR,
        payload: estado
    })
}

// Seleccionar y eliminar el producto

export function borrarProductoAction(id) {
    return async function (dispatch) {
        dispatch(obtenerProductoEliminar(id));
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito());

            // Si se elimina, mostrar alerta
            Swal.fire(
                'Producto eliminado!',
                'El producto ha sido eliminado exitosamente.',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError());
        }
    }
}

const obtenerProductoEliminar = (id) => {
    return ({
        type: OBTENER_PRODUCTO_ELIMINAR,
        payload: id
    })
}

const eliminarProductoExito = () => {
    return ({
        type: PRODUCTO_ELIMINADO_EXITO
    })
}

const eliminarProductoError = () => {
    return ({
        type: PRODUCTO_ELIMINADO_ERROR,
        payload: true
    })
}

// Colocar producto en edición
export function obtenerProductoEditar(producto) {
    return (dispatch) => {
        dispatch(obtenerProductoAction(producto));
    }
}

const obtenerProductoAction = (producto) => {
    return ({
        type: OBTENER_PRODUCTO_EDITAR,
        payload: producto
    })
}

// Edita un registro en la api y state

export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(editarProducto(producto))

        try {
            const resultado = await clienteAxios.put(`/productos/${producto.id}`, producto);
            console.log(resultado);
        } catch (error) {

        }

    }
}

const editarProducto = (producto) => {
    return ({
        type: COMENZAR_EDICION_PRODUCTO,
        payload: producto
    })
}