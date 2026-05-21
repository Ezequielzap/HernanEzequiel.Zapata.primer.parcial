function obtenerCarrito() {
    let carritoJSon = localStorage.getItem("carrito");
    return carritoJSon;
}

function cargarProductosCarrito() {

    let carritoJson = localStorage.getItem("carrito");
    let tabla = document.getElementById("tabla-carrito");



}


function limpiarCarrito() {
    localStorage.removeItem("carrito");
    alert("carrito limpiado correctamente")
}

