//Lista de productos
var productos = [
    {
        id: 1, 
        nombre: "MacBook",
        precio : 1210.00,
        categoria: []
    },
    {
        id: 2, 
        nombre: "Tv 30 Pulgadas",
        precio : 560
    },
    {
        id: 3, 
        nombre: "Escritorio",
        precio : 130
    },
    {
        id: 4, 
        nombre: "Zapatos",
        precio : 100
    },
    {
        id: 5, 
        nombre: "Cocina",
        precio : 190
    },
    {
        id: 6, 
        nombre: "Reloj Fossil",
        precio : 380
    }
]

var categorias = [
    {
        id : 1,
        descripcion : "Electronica"
    },{
        id : 2,
        descripcion : "Ropa"
    },{
        id : 3,
        descripcion : "Zapatos"
    },{
        id : 4,
        descripcion : "Hogar"
    },{
        id : 5,
        descripcion : "Telefonia"
    }
]

var carritoProductos = []

function mostrarProductos(){
    for(var i = 0; i < productos.length; i++){
        agregarProducto(productos[i]);
    }
}

function agregarProducto(producto){
    //seleciono el div donde estaran los productos listado
    var _tablaProductos = document.querySelector("#tablaProductos");

    var divNombre = document.createElement('p');
    divNombre.innerText = "Nombre: " + producto.nombre;

    var divPrecio = document.createElement('p');
    divPrecio.innerHTML = "Precio: <b>" + producto.precio + "</b>";

    var divContenedor = document.createElement('div');

    divContenedor.classList.add('panel-productos')

  

    var button = document.createElement('button')
    button.innerText = 'Agregar +';
    button.type = 'button';
    button.classList.add('button');
    button.onclick = function(){
        actualizarCarrito(producto);
    };

    divContenedor.append(divNombre);
    divContenedor.append(divPrecio);
    divContenedor.append(button);

    
    _tablaProductos.append(divContenedor);

}

function eliminarItem(producto){
    var index = carritoProductos.findIndex(x => x.id == producto.id);
    carritoProductos.splice(index,1);   

    var _carritoItems = document.querySelector("#carritoItems");
    _carritoItems.innerHTML = '';

    for(var i = 0; i < carritoProductos.length; i++){
       agregarItem(carritoProductos[i]);
    }   

    agregarTotal(carritoProductos);
}


function eliminarTodo(){
    carritoProductos = [];
    var _carritoItems = document.querySelector("#carritoItems");
    _carritoItems.innerHTML = '';
    agregarTotal(carritoProductos);
}

function agregarItem(producto){
    var _carritoItems = document.querySelector("#carritoItems");

    var button = document.createElement('button')
    button.innerText = 'Eliminar';
    button.type = 'button';
    button.classList.add('button');
    button.classList.add('button-danger');
    button.onclick = function(){
        eliminarItem(producto);
    };

    var divNombre = document.createElement('label');
    divNombre.innerText = producto.nombre;

    var divPrecio = document.createElement('label');
    divPrecio.innerText = producto.precio;

    var div = document.createElement('div');


    div.append(button);
    div.append(divNombre);
    div.append(divPrecio);

    _carritoItems.append(div)
}

function agregarTotal(productos)
{
    var _carritoItems = document.querySelector("#carritoItems");

    var button = document.createElement('button')
    button.innerText = 'Eliminar Todos';
    button.type = 'button';
    button.classList.add('button');
    button.classList.add('button-danger');
    button.onclick = function(){
        eliminarTodo();
    };

    var divNombre = document.createElement('label');
    divNombre.innerText = "Total :";

    var divPrecio = document.createElement('label');
    var total = productos.reduce(function(valorAnterior, valorActual){      
        return valorAnterior + valorActual.precio;
    }, 0);

    divPrecio.innerText = total;

    var div = document.createElement('div');


    div.append(button);
    div.append(divNombre);
    div.append(divPrecio);

    _carritoItems.append(div)
}

function actualizarCarrito(producto){
    //Agregar un producto a la lista
    carritoProductos.push(producto);
    var _carritoItems = document.querySelector("#carritoItems");
    _carritoItems.innerHTML = '';

    for(var i = 0; i < carritoProductos.length; i++){
       agregarItem(carritoProductos[i]);
    }
    agregarTotal(carritoProductos);
}

mostrarProductos();