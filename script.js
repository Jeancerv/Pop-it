document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Estilos para modo oscuro
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #121212; /* Fondo oscuro */
        color: white; /* Color de texto claro */
    }
    
    .dark-mode .navegacion,
    .dark-mode .contacto {
        background-color: #1F1F1F; /* Fondo de navegación y contacto oscuro */
    }

    .dark-mode a,
    .dark-mode button {
        color: white; /* Color del texto claro en enlaces y botones */
        }
    
    .dark-mode .texto button {
        color: black;
    }

    .dark-mode .productos div button{
        background-color: #FD7F20;
    }

    .dark-mode .contexto {
        background-color: white;
    }
        
    .dark-mode .catalogo,
    .dark-mode .informa {
        background-color: #1F1F1F; /* Fondo oscuro para secciones */
    }

    .dark-mode .contexto div {
        color: black;
    }
`;
document.head.appendChild(style);


// script.js

// Espera a que el documento esté completamente cargado
// script.js

// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
    
    // Define las imágenes que se cambiarán
    const images = [
        { id: 'image1', normalSrc: './imagenes/background.png', darkModeSrc: './imagenes/background2.png' }, // Imagen normal y de modo oscuro
        { id: 'image2', normalSrc: './imagenes/bg-grid.png', darkModeSrc: './imagenes/bg-grid2.png' } // Imagen normal y de modo oscuro
    ];

    toggleButton.addEventListener('click', function () {
        // Cambia las imágenes
        images.forEach(image => {
            const imgElement = document.getElementById(image.id);
            const currentSrc = imgElement.getAttribute('src');

            // Cambia la imagen según la que esté actualmente
            if (currentSrc === image.darkModeSrc) {
                imgElement.setAttribute('src', image.normalSrc); // Regresa a la imagen normal
            } else {
                imgElement.setAttribute('src', image.darkModeSrc); // Cambia a la imagen de modo oscuro
            }
        });
    });
});
