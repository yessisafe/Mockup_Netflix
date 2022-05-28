		//  ----- ----- Carousel y flechas ----- -----//

const fila = document.querySelector('.container-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda')

const flechaDerecha = document.getElementById('flecha-derecha')


		//  ----- ----- Event Listener para la flecha derecha ----- -----//

flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;
})


		//  ----- ----- Event Listener para la flecha izquierda ----- -----//

flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
})



		//  ----- ----- Hover  ----- -----//

		peliculas.forEach((pelicula) => {
			pelicula.addEventListener('mouseenter', (e) => {
				const elemento = e.currentTarget;
				setTimeout(() => {
					peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
					elemento.classList.add('hover');
				}, 300);
			});
		});
		
		fila.addEventListener('mouseleave', () => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
		});



