// Seleccionamos el formulario de búsqueda
let searchForm = document.querySelector('.search-form');

// Cuando se hace clic en el botón de búsqueda, se añade la clase "active" al formulario de búsqueda
// y se elimina la clase "active" de los otros dos elementos
document.querySelector('#search-btn').onclick = () =>{
	searchForm.classList.toggle('active')
	cartItem.classList.remove('active');
	navbar.classList.remove('active');
}

// Seleccionamos el elemento de carrito
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
	cartItem.classList.toggle('active')
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}

// Seleccionamos la barra de navegación
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active')
	cartItem.classList.remove('active');
	searchForm.classList.remove('active');
}

// Cuando se desplaza la página, se elimina la clase "active" de todos los elementos
// Esto parece ser para cerrar cualquier elemento que esté abierto al desplazar la página
window.onscroll = () =>{
	searchForm.classList.remove('active');
	cartItem.classList.remove('active');
	navbar.classList.remove('active');
}



