function ajouterIndex(){
    let sectionAbout = document.getElementById('about');
    let h2About = document.createElement('h2');
    h2About.textContent="Hey, I am Dainata";
    sectionAbout.appendChild(h2About);
    let pAbout = document.createElement('p');
    pAbout.textContent="a web developer from Paris";
    sectionAbout.appendChild(pAbout);
    pAbout.setAttribute('id','webDev');
    let paraAccueil = document.createElement('p');
    paraAccueil.setAttribute('id','paraAccueil');
    paraAccueil.textContent=("Passionée par le developpement web, je me spécialise dans la création d’applications web responsives avec HTML, CSS, JavaScript et une touche de design")
    sectionAbout.appendChild(paraAccueil);
    let divBoutons = document.createElement('div');
    divBoutons.setAttribute('id','blocBoutons')
    sectionAbout.appendChild(divBoutons);
    let boutonAbout = document.createElement('a');
    boutonAbout.textContent = "About";
    divBoutons.appendChild(boutonAbout);
    boutonAbout.setAttribute('href','about.html');
    boutonAbout.setAttribute('class','boutons')
    let boutonProjet = document.createElement('a');
    boutonProjet.textContent="Projets";
    divBoutons.appendChild(boutonProjet);
    boutonProjet.setAttribute('href','work.html');
    boutonProjet.setAttribute('class','boutons');
}
ajouterIndex();

let image = document.getElementById('photoAccueil');
function change(){
    image.setAttribute('src', 'images/photoAccueilPxMoins.png');
}
image.addEventListener('mouseover', change );

function reset() {
    image.setAttribute('src', 'images/photoAccueilPx.png');
}

image.addEventListener('mouseout', reset);





