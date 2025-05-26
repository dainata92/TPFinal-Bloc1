const projets = [
    { titre: "Survey Form", categorie: "WebDesign", image: "images/survey.jpg",
        lien: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form" },
    { titre: "Tribute Page", categorie: "WebDesign", image: "images/tribute.jpg",
        lien: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page" },
    { titre: "Technical Documentation", categorie: "WebDesign", image: "images/doc.jpg",
        lien: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-technical-documentation-page-project/build-a-technical-documentation-page"
    },
    { titre: "Product Landing", categorie: "WebDesign", image:"images/product.jpg",
        lien: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-product-landing-page-project/build-a-product-landing-page"
     },
    {titre: "Blog", categorie: "WebDesign", image:"images/blog.jpg",
        lien: "WebDesign/Blog/pages/index.html"
    },
    {titre: "Mode", categorie: "WebDesign", image:"images/mode.jpg",
        lien:"WebDesign/Mode/pages/index.html"
    },
    {titre: "Vidéothèque", categorie: "js", image:"images/Foxtrot.gif",
            lien:"https://github.com/dainata92/Foxtrot-Aviation",
    },
    {titre: "JS Exercices", categorie: "js", image:"images/js.png",
        lien:"js/projetChoix.js"},
    {titre: "JS Exercices", categorie: "js", image:"images/js.png",
            lien:"js/script2TP.js"},
    {titre: "JS Exercices", categorie: "js", image:"images/js.png",
            lien:"js/script3TP.js"},
    {titre: "JS Exercices", categorie: "js", image:"images/js.png",
            lien:"js/TPIndiv.js"},
    
];

const afficherProjets = (liste) => {    //la fonction pour afficher les projets a partir de ma liste d'objets
    const container = document.getElementById('projets');
    container.innerHTML = "";       //pour vider son contenu

    const categories = [];

    liste.forEach(p => {        
        if (!categories.includes(p.categorie)) {        //pour créer une liste (categories) contenant les projets de chaque catégorie présente dans liste
        categories.push(p.categorie);       //pour rajouter chaque projet dans sa categorie
  }
});

    categories.forEach(categorie => {

        const ligne = document.createElement('div');    //créer un div appelé 'ligne' pour grouper tous les projets de cette catégorie
        ligne.classList.add('ligne-projets');
        container.appendChild(ligne);

        const projetsFiltres = liste.filter(p => p.categorie === categorie);    //filtre les projets appartenant à la catégorie actuelle

        projetsFiltres.forEach(projet => {
            let div = document.createElement('div');    //créer un div avec l’image, le lien, le titre et la description
            div.classList.add("projet");        

            div.innerHTML = `
                <a href="${projet.lien}" target="_blank">
                    <img src="${projet.image}" alt="${projet.titre}" class="image-projet">
                </a>
                <h3>${projet.titre}</h3>
            `;

            ligne.appendChild(div);
        });
    });
};
afficherProjets(projets);

function filtrer(categorie) {       
    if (categorie === "tous") {         //si l'utilisateur choisit "tous", on affiche tous les projets
        afficherProjets(projets);
    } else {
        const filtres = projets.filter(p => p.categorie === categorie);
        afficherProjets(filtres);       //on filtre les projets en fonction de categorie
    }
}
document.addEventListener('DOMContentLoaded', () => {
    afficherProjets(projets);
});
//dès que la page HTML est complètement chargée, la fonction afficherProjets(projets) est appelée pour afficher tous les projets