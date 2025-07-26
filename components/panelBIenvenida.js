import { inscripcion } from "./inscripcion.js";
export function crearContenido() {
    const div = document.createElement('div');
    div.className = 'content';

    const img = document.createElement('img');
    img.src = 'images/LogoInicial.png';
    img.alt = '';
    img.className = 'img1';

    const pTitulo = document.createElement('p');
    pTitulo.className = 'Titulo';
    pTitulo.textContent = '¡𝙸𝚗𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘𝚗𝚎𝚜 𝟸𝟶𝟸𝟼!';

    const pSubtitulo = document.createElement('p');
    pSubtitulo.className = 'Subtitulo';
    pSubtitulo.textContent = '¡𝙱𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚘!';

    const boton = document.createElement('button');
    boton.textContent = '𝙸𝚗𝚜𝚌𝚛𝚒𝚋𝚒𝚛𝚖𝚎';
    boton.className = 'btn-inscribirme';

    // Al hacer clic en el botón, cargar la vista de inscripción
    boton.addEventListener('click', () => {
        document.body.innerHTML = '';
        document.body.appendChild(inscripcion());
    });

    div.appendChild(img);
    div.appendChild(pTitulo);
    div.appendChild(pSubtitulo);
    div.appendChild(boton);

    return div;
}
