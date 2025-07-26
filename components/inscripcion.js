export function inscripcion() {
    const div = document.createElement('div');
    div.className = 'div-content';

    // Contenedor para imágenes y elementos superiores
    const imagenesContenedor = document.createElement('div');
    imagenesContenedor.className = 'imagenes-contenedor';

    const img = document.createElement('img');
    img.src = 'images/fondo.png';
    img.alt = '';
    img.className = 'img2';

    const imgIcono = document.createElement('img');
    imgIcono.src = 'images/icono.png';
    imgIcono.alt = 'Icono';
    imgIcono.className = 'img-icono';

    const parrafo = document.createElement('p');
    parrafo.textContent = '𝙷𝚎𝚛𝚖𝚊𝚗𝚍𝚊𝚍 𝚍𝚎 𝙹𝚎𝚜𝚞𝚜 𝚍𝚎𝚕 𝙰𝚙𝚘𝚜𝚎𝚗𝚝𝚘 𝚢 𝚂𝚎ñ𝚘𝚛 𝚂𝚎𝚙𝚞𝚕𝚝𝚊𝚍𝚘';
    parrafo.className = 'descripcion';

    // Agregar todo al contenedor superior
    imagenesContenedor.appendChild(imgIcono);
    imagenesContenedor.appendChild(parrafo);
    imagenesContenedor.appendChild(img);

    // Contenedor de botones
    const contenedorBotones = document.createElement('div');
    contenedorBotones.className = 'contenedor-botones';

    const botones = [
        '𝙸𝚗𝚜𝚌𝚛𝚒𝚙𝚌𝚒ó𝚗 𝟺𝚝𝚘 𝙳𝚘𝚖𝚒𝚗𝚐𝚘',
        '𝙸𝚗𝚜𝚌𝚛𝚒𝚙𝚌𝚒ó𝚗 𝙼𝚒é𝚛𝚌𝚘𝚕𝚎𝚜 𝚂𝚊𝚗𝚝𝚘',
        '𝙸𝚗𝚜𝚌𝚛𝚒𝚙𝚌𝚒ó𝚗 𝚂𝚊𝚗𝚝𝚘 𝚅𝚒𝚊𝚌𝚛𝚞𝚌𝚒𝚜',
        '𝙸𝚗𝚜𝚌𝚛𝚒𝚙𝚌𝚒ó𝚗 𝚂𝚊𝚗𝚝𝚘 𝙴𝚗𝚝𝚒𝚎𝚛𝚛𝚘'
    ];

    botones.forEach((texto) => {
        const btn = document.createElement('button');
        btn.textContent = texto;
        btn.className = 'btn-inscripcion';
        btn.addEventListener('click', () => {
            alert('Muy pronto disponible');
        });
        contenedorBotones.appendChild(btn);
    });

    div.appendChild(imagenesContenedor);
    div.appendChild(contenedorBotones);

    return div;
}
