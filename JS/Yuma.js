let sectionComidas = document.getElementById('comidas');
let sectionBebidas = document.getElementById('bebidas');
let sectionHome = document.getElementById('home');
let clickHome = document.getElementById('sect-home');
let clickComidas = document.getElementById('sect-comidas');
let clickBebidas = document.getElementById('sect-bebidas');


Inicio = ()=> {
    sectionComidas.style.display = 'none';

    sectionBebidas.style.display = 'none';

    clickHome.addEventListener('click', seccionHome);

    clickComidas.addEventListener('click', seccionComidas);

    clickBebidas.addEventListener('click', seccionBebidas);
}

seccionComidas = ()=> {
    sectionHome.style.display = 'none';

    sectionBebidas.style.display = 'block';

    sectionComidas.style.display = 'flex';
}

seccionHome = ()=> {
    sectionComidas.style.display = 'none';
    sectionBebidas.style.display = 'none';
    seccionHome.style.display = 'flex';
}

seccionBebidas = ()=> {

    sectionComidas.style.display = 'none';

    seccionHome.style.display = 'none';

    sectionBebidas.style.display = 'block';
}



window.addEventListener('load', Inicio);