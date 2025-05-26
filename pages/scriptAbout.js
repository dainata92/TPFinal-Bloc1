function ajouterAboutMePage(){
    let aboutPage = document.getElementById('aboutMe');
    let divPara = document.createElement('div');
    aboutPage.appendChild(divPara);
    divPara.setAttribute('class','text');
    let textAbout1 = document.createElement('p');
    divPara.appendChild(textAbout1);
    textAbout1.textContent="Passionnée par le web et les nouvelles technologies, je me suis reconvertie dans le développement web après plusieurs années dans un autre domaine. Curieuse, déterminée et toujours en quête de nouveaux défis, j’ai appris à coder en HTML, CSS, JavaScript et Java, avec l’envie constante de créer des interfaces modernes, accessibles et fonctionnelles.";
    let textAbout2 = document.createElement('p');
    divPara.appendChild(textAbout2);
    textAbout2.textContent="Chaque ligne de code est pour moi une opportunité de créer, de résoudre un problème ou de donner vie à une idée. J’aime transformer une maquette en une application fluide et intuitive, tout en veillant à la qualité du code et à l’expérience utilisateur. Le développement web me permet d’exprimer à la fois ma rigueur technique et ma sensibilité créative.";
    let textAbout3 = document.createElement('p');
    divPara.appendChild(textAbout3);
    textAbout3.textContent="Mon parcours personnel m’a permis de développer une grande capacité d’adaptation, de la persévérance et un réel sens du travail en équipe. J’ai voyagé dans de nombreux pays, ce qui m’a ouvert l’esprit et donné une grande curiosité culturelle. Aujourd’hui, je suis prête à m’investir dans des projets innovants et à continuer à apprendre au quotidien.";
    let divImage = document.createElement('div');
    aboutPage.appendChild(divImage);
    divImage.setAttribute('class','photo');
    let imageAbout = document.createElement('img');
    divImage.appendChild(imageAbout);
    imageAbout.setAttribute('src','images/photoAbout.png');
}
ajouterAboutMePage();