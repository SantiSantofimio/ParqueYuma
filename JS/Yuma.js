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

seccionHome = ()=> {
    sectionComidas.style.display = 'none';
    sectionBebidas.style.display = 'none';
    sectionHome.style.display = 'flex';
}

seccionComidas = ()=> {
    sectionHome.style.display = 'none';
    sectionBebidas.style.display = 'flex';
    sectionComidas.style.display = 'flex';
}

seccionBebidas = ()=> {

    sectionComidas.style.display = 'none';
    sectionHome.style.display = 'none';
    sectionBebidas.style.display = 'flex';
}



window.addEventListener('load', Inicio);