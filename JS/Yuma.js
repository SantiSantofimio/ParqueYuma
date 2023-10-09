Inicio = ()=> {
    let sectionComidas = document.getElementById('comidas');
    sectionComidas.style.display = 'none';

    let sectionBebidas = document.getElementById('bebidas');
    sectionBebidas.style.display = 'none';

    let clickHome = document.getElementById('sect-home');
    clickHome.addEventListener('click', seccionHome);

    let clickComidas = document.getElementById('sect-comidas');
    clickComidas.addEventListener('click', seccionComidas);

    let clickBebidas = document.getElementById('sect-bebidas');
    clickBebidas.addEventListener('click', seccionBebidas);
}

seccionComidas = ()=> {
    let sectionHome = document.getElementById('home');
    sectionHome.style.display = 'none';

    let sectionBebidas = document.getElementById('bebidas');
    sectionBebidas.style.display = 'block';

    let sectionComidas = document.getElementById('comidas');
    sectionComidas.style.display = 'flex';
}

seccionHome = ()=> {
    let sectionComidas = document.getElementById('comidas');
    sectionComidas.style.display = 'none';

    let sectionBebidas = document.getElementById('bebidas');
    sectionBebidas.style.display = 'none';

    let seccionHome = document.getElementById('home');
    seccionHome.style.display = 'block';
}

seccionBebidas = ()=> {

    let sectionComidas = document.getElementById('comidas');
    sectionComidas.style.display = 'none';

    let seccionHome = document.getElementById('home');
    seccionHome.style.display = 'none';

    let sectionBebidas = document.getElementById('bebidas');
    sectionBebidas.style.display = 'block';
}



window.addEventListener('load', Inicio);