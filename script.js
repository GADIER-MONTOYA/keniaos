// Capturas de Elementos del DOM
const botonMenu = document.getElementById('palanca-menu');
const menuNavegacion = document.getElementById('menu-navegacion');
const botonReproducir = document.getElementById('boton-reproducir');
const iconoControl = document.getElementById('icono-control');
const lineaTiempo = document.querySelector('.linea-tiempo');

const audio = document.getElementById('reproductor-audio');
const botonAnterior = document.getElementById('boton-anterior');
const botonSiguiente = document.getElementById('boton-siguiente');
const imagenPortada = document.getElementById('imagen-portada');

// Arreglo actualizado con tu lista real de canciones de 'kdekarma'
const listaCanciones = [
    {
        archivo: 'kdekarma/Kenia Os - Belladona (SPOTISAVER).mp3',
        portada: 'imagenes/VinilRojo.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Boom In Your Face (SPOTISAVER).mp3',
        portada: 'imagenes/VinilAmarillo.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Boys (SPOTISAVER).mp3',
        portada: 'imagenes/VinilAzul.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Breaking News (Interlude) (SPOTISAVER).mp3',
        portada: 'imagenes/VinilRojo.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Love Bombing (SPOTISAVER).mp3',
        portada: 'imagenes/VinilAmarillo.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Problemática (SPOTISAVER).mp3',
        portada: 'imagenes/VinilAzul.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Rojo Versace (SPOTISAVER).mp3',
        portada: 'imagenes/VinilRojo.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Ruleta Rusa (SPOTISAVER).mp3',
        portada: 'imagenes/VinilAmarillo.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Slay (SPOTISAVER).mp3',
        portada: 'imagenes/VinilAzul.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Tarde (SPOTISAVER).mp3',
        portada: 'imagenes/VinilRojo.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Tú y Yo X Siempre (SPOTISAVER).mp3',
        portada: 'imagenes/VinilAmarillo.png'
    },
    {
        archivo: 'kdekarma/Kenia Os - Una y Otra Vez (SPOTISAVER).mp3',
        portada: 'imagenes/VinilAzul.png'
    },
    {
        archivo: 'kdekarma/Kenia Os, Carla Morrison - Días Tristes (SPOTISAVER).mp3',
        portada: 'imagenes/VinilRojo.png'
    },
    {
        archivo: 'kdekarma/Kenia Os, Lola Indigo - Fifty Fifty (SPOTISAVER).mp3',
        portada: 'imagenes/VinilAmarillo.png'
    }
];

let indiceCancionActiva = 0;

// Inicializa el reproductor con la primera canción de la lista sin reproducirla automáticamente
cargarCancion(listaCanciones[indiceCancionActiva]);
lineaTiempo.classList.add('pausado');

// Cargar pista en el reproductor HTML5
function cargarCancion(cancion) {
    audio.src = cancion.archivo;
    imagenPortada.src = cancion.portada;
}

// Activar audio y animación
function encenderReproductor() {
    audio.play();
    lineaTiempo.classList.remove('pausado');
    iconoControl.className = 'fas fa-pause';
    iconoControl.style.paddingLeft = "0px";
}

// Pausar audio y congelar ondas
function apagarReproductor() {
    audio.pause();
    lineaTiempo.classList.add('pausado');
    iconoControl.className = 'fas fa-play';
    iconoControl.style.paddingLeft = "5px";
}

apagarReproductor()

// Desplegar y contraer el menú izquierdo
botonMenu.addEventListener('click', () => {
    menuNavegacion.classList.toggle('activo');
    const icono = botonMenu.querySelector('i');
    icono.className = menuNavegacion.classList.contains('activo') ? 'fas fa-times' : 'fas fa-bars';
});

// Interruptor Play/Pause principal
botonReproducir.addEventListener('click', () => {
    if (audio.paused) {
        encenderReproductor();
    } else {
        apagarReproductor();
    }
});

// Botón de Siguiente pista
botonSiguiente.addEventListener('click', () => {
    indiceCancionActiva++;
    if (indiceCancionActiva >= listaCanciones.length) {
        indiceCancionActiva = 0;
    }
    cargarCancion(listaCanciones[indiceCancionActiva]);
    encenderReproductor();
});

// Botón de Pista anterior
botonAnterior.addEventListener('click', () => {
    indiceCancionActiva--;
    if (indiceCancionActiva < 0) {
        indiceCancionActiva = listaCanciones.length - 1;
    }
    cargarCancion(listaCanciones[indiceCancionActiva]);
    encenderReproductor();
});

// Salto automático al terminar una pista
audio.addEventListener('ended', () => {
    botonSiguiente.click();
});