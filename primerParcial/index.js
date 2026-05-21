let hamburguesas = [
    { 'id': 1, 'nombre': 'Armonia', 'precio': 12000, 'descripcion': 'Doble medallón de carne, queso cheddar, queso roquefort, huevo frito y pan con queso gratinado.', 'img': '/assets/hamburguesas/burga-1.jpg' },
    { 'id': 2, 'nombre': 'Doble batalla', 'precio': 15000, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble beacon, cebolla caramelizada y pan con semillas de sésamo.', 'img': '/assets/hamburguesas/burga-2.jpg' },
    { 'id': 3, 'nombre': 'Clásica Law', 'precio': 9000, 'descripcion': 'Medallón de carne, queso cheddar, panceta, cebolla crispy, salsa barbacoa, tomate, lechuga y pan con semillas de sésamo.', 'img': '/assets/hamburguesas/burga-3.jpg' },
    { 'id': 4, 'nombre': 'Exotically', 'precio': 16500, 'descripcion': 'Medallón de carne, doble queso roquefort, rúcula, cebolla caramelizada, tomate, hongo portobello salteado y pan brioche con semillas.', 'img': '/assets/hamburguesas/burga-4.jpg' },
    { 'id': 5, 'nombre': 'La Bestia', 'precio': 19000, 'descripcion': 'Quíntuple medallón de carne, 5 capas de cheddar, panceta en cada piso, cheddar en cada piso, queso especial derretido y pan con queso gratinado.', 'img': '/assets/hamburguesas/burga-5.jpg' },
    { 'id': 6, 'nombre': 'Nuggy Chop', 'precio': 14500, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble panceta, cebolla caramelizada, Nuggets de muzzarella y pan con queso gratinado.', 'img': '/assets/hamburguesas/burga-6.jpg' },
]

let bebidas = [
    { 'id': 7, 'nombre': 'Agua sin gas (1L)', 'precio': 2000, 'descripcion': 'Botella 1 litro agua Villavicencio sin gas.', 'img': '/assets/bebidas/agua-con-gas.png' },
    { 'id': 8, 'nombre': 'Agua con gas (1L)', 'precio': 1500, 'descripcion': 'Botella 1 litro agua Saldan con gas.', 'img': '/assets/bebidas/agua-sin-gas.png' },
    { 'id': 9, 'nombre': 'Aquarius Manzana (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de manzana.', 'img': '/assets/bebidas/aquarius-manzana.png' },
    { 'id': 10, 'nombre': 'Aquarius Pomelo (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de pomelo.', 'img': '/assets/bebidas/aquarius-pomelo.png' },
    { 'id': 11, 'nombre': 'Aquarius Naranja (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de naranja.', 'img': '/assets/bebidas/aquarius-naranja.png' },
    { 'id': 12, 'nombre': 'Coca-Cola (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Coca-Cola.', 'img': '/assets/bebidas/coca-cola.png' },
    { 'id': 13, 'nombre': 'Sprite (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Sprite.', 'img': '/assets/bebidas/sprite.png' },
]

let tragos = [
    { 'id': 14, 'nombre': 'Campari', 'precio': 6000, 'descripcion': 'Vaso de Campari y jugo de naranja.', 'img': '/assets/tragos/campari.png' },
    { 'id': 15, 'nombre': 'Fernet', 'precio': 7000, 'descripcion': 'Vaso de Coca-Cola y Fernet.', 'img': '/assets/tragos/fernet.png' },
    { 'id': 16, 'nombre': 'Gancia', 'precio': 6000, 'descripcion': 'Vaso de Gancia y Sprite.', 'img': '/assets/tragos/gancia.png' },
    { 'id': 17, 'nombre': 'Ron Havana Club', 'precio': 9000, 'descripcion': 'Vaso de Ron y Coca-Cola.', 'img': '/assets/tragos/ron.png' },
    { 'id': 18, 'nombre': 'Daiquiri', 'precio': 7000, 'descripcion': 'Vaso de Daiquiri.', 'img': '/assets/tragos/daiquiri.png' },
]

function sumarAlCarrito(idProducto) {
    let productoSeleccionado = null;

    hamburguesas.forEach(hamburguesa => {
        if (hamburguesa.id === idProducto) {
            productoSeleccionado = hamburguesa;
        }
    })

    bebidas.forEach(bebida => {
        if (bebida.id === idProducto) {
            productoSeleccionado = bebida;
        }
    })

    tragos.forEach(trago => {
        if (trago.id === idProducto) {
            productoSeleccionado = trago;
        }
    })

    if (productoSeleccionado != null) {
        //punto f
        let carritoJson = localStorage.getItem("carrito")
        let carrito = [];

        if (carritoJson != null) {
            carrito = JSON.parse(carritoJson);
        }
        //punto d
        let existeEnCarrito = null;

        carrito.forEach(producto => {
            if (producto.id === idProducto) {
                existeEnCarrito = producto;
            }
        });

        if (existeEnCarrito !== null) {
            existeEnCarrito.cantidad = existeEnCarrito.cantidad + 1;
        } else {
            //punto c
            productoSeleccionado.cantidad = 1;

            carrito.push(productoSeleccionado);
        }
        //punto g
        console.log("carrito antes de ser guardado en el localStorage")
        console.log(carrito)

        //guardamos en el localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));

        //punto e
        alert(`un/una ${productoSeleccionado.nombre} fue agregado al carrito`)


    }
}



function restarDelCarrito(idProducto) {
    let carritoJson = localStorage.getItem("carrito");

    //punto L
    if (carritoJson == null || carritoJson === "[]") {
        alert("No hay ningún productoguardado en el carrito previamente a sersubido al LocalStorage")
    }
    else {
        let carrito = JSON.parse(carritoJson);
        let existeEnCarrito = null;

        carrito.forEach(producto => {
            if (producto.id === idProducto) {
                existeEnCarrito = producto;
            }
        });

        //punto i
        if (existeEnCarrito === null) {
            let nombreProducto = "";
            hamburguesas.forEach(hamburguesa => {
                if (hamburguesa.id === idProducto) {
                    nombreProducto = hamburguesa.nombre;
                }
            })
            bebidas.forEach(bebida => {
                if (bebida.id === idProducto) {
                    nombreProducto = bebida.nombre;
                }
            })
            tragos.forEach(trago => {
                if (trago.id === idProducto) {
                    nombreProducto = trago.nombre;
                }
            });
            alert("No hay más" + nombreProducto +" en el carrito")
        }
        //punto j
        else {
            existeEnCarrito.cantidad = existeEnCarrito.cantidad - 1;
            alert("un/una " + existeEnCarrito.nombre + " fue eliminado del carrito")

            //punto k
            let carritoActualizado = [];
            carrito.forEach(producto => {
                if (producto.cantidad > 0) {
                    carritoActualizado.push(producto);
                }
            });
            console.log("carrito despues de restar" + carritoActualizado);

            localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
        }
    }
}





// punto 2-A
function mostrarProductos() {

    let listaHamburguesas = document.getElementById("listado-hamburguesas");
    let listaBebidas = document.getElementById("listado-bebidas");
    let listadoTragos = document.getElementById("listado-tragos");

    listaHamburguesas.innerHTML = "";
    listaBebidas.innerHTML = "";
    listaBebidas.innerHTML = "";

    //muestro las hamburguesas
    hamburguesas.forEach(hamburguesa => {
        listaHamburguesas.innerHTML += `
                <li class="li-hamburguesa">
                    <img class="img-producto" src="${hamburguesa.img}" alt="${hamburguesa.nombre}">
                    <div>
                        <h3 class="nombre-producto">${hamburguesa.nombre}</h3>
                        <p class="precio-producto">${hamburguesa.precio}</p>
                        <p class="descripcion-producto">${hamburguesa.descripcion}</p>
                    </div>
                    <button class="btn-sumar-a-carrito" id ="sumar-${hamburguesa.id}" onclick="sumarAlCarrito(${hamburguesa.id})"> + </button>
                    <button class="btn-restar-a-carrito" onclick="restarDelCarrito(${hamburguesa.id})"> - </button>
                </li>
        `;
    })

    //muestro las bebidas
    bebidas.forEach(bebida => {
        listaBebidas.innerHTML += `
                <li class="li-hamburguesa">
                    <img class="img-producto" src="${bebida.img}" alt="${bebida.nombre}">
                    <div>
                        <h3 class="nombre-producto">${bebida.nombre}</h3>
                        <p class="precio-producto">${bebida.precio}</p>
                        <p class="descripcion-producto">${bebida.descripcion}</p>
                    </div>
                    <button class="btn-sumar-a-carrito" id ="sumar-${bebida.id}"onclick="sumarAlCarrito(${bebida.id})"> + </button>
                    <button class="btn-restar-a-carrito" onclick="restarDelCarrito(${bebida.id})"> - </button>
                </li>
        `;
    })

    //muestro los tragos
    tragos.forEach(trago => {
        listadoTragos.innerHTML += `
                <li class="li-hamburguesa">
                    <img class="img-producto" src="${trago.img}" alt="${trago.nombre}">
                    <div>
                        <h3 class="nombre-producto">${trago.nombre}</h3>
                        <p class="precio-producto">${trago.precio}</p>
                        <p class="descripcion-producto">${trago.descripcion}</p>
                    </div>
                    <button class="btn-sumar-a-carrito" id ="sumar-${trago.id}"  onclick="sumarAlCarrito(${trago.id})"> + </button>
                    <button class="btn-restar-a-carrito" onclick="restarDelCarrito(${trago.id})"> - </button>
                </li>
        `;

    })
}

mostrarProductos();

