/*
Création des données de base :
Déclarer un tableau produits contenant des objets avec nom, prix et catégorie.
Affichage des produits disponible :
Fonction afficherProduits() qui liste les produits.
Ajout au panier :
Fonction ajouterAuPanier(nomProduit) qui ajoute un produit au panier si trouvé.
Calcul du total : 
Fonction calculerTotal() qui additionne les prix du panier.
Application d’une réduction :
Si le total dépasse 100€, appliquer une réduction de 10%.
Affichage de la commande finale :
Fonction afficherCommande() qui affiche la liste des produits, le total avant et après réduction.
*/

//la declaration de mon tableau contenant les produits
let produits = [
    {nom: "stylo",
    prix: 9,
    categorie: "fournitures"
    },
    {nom: "blanc de poulet",
    prix: 17,
    categorie: "viande"
    },
    {nom: "cammembert",
    prix: 11,
    categorie: "fromage"
    },
    {nom: "spaghetti",
    prix: 21,
    categorie: "pates"
    },
    {nom: "jupe",
    prix: 25,
    categorie: "vetements"
    },
    {nom: "sac à dos",
    prix: 59,
    categorie: "voyage"
    },
    {nom: "trotinette electrique",
    prix: 189,
    categorie: "sport"
    },
    {nom: "Télé Samsung",
    prix: 259,
    categorie: "electroménager"
    }
];
let panier = [];
function afficherProduits(){
    for (let i = 0; i<produits.length; i++){
        console.log("Produit n° "+ (i+1) + ": "+ produits[i].nom + " -  " + produits[i].prix + " € - Categorie: " + produits[i].categorie);
    }
}
afficherProduits();

function ajouterAuPanier(nomProduit){
    for (let j = 0; j<produits.length; j++){
    if (produits[j].nom === nomProduit){
        panier.push(produits[j]);
    }
}
}
ajouterAuPanier("sac à dos");
ajouterAuPanier("jupe");
ajouterAuPanier("Télé Samsung");
console.log(panier);




let totalPanier = 0;
let remisePanier = 0;
function calculerTotal(){
    for (let k = 0; k<panier.length; k++){
            totalPanier += panier[k].prix;
        }
    }

calculerTotal();
console.log(totalPanier);

function reductionPanier(){
    if (totalPanier > 100){
        remisePanier = 0.9 * totalPanier;
    }
}
reductionPanier();
console.log(remisePanier);
 

function afficherCommande(){
    for (let y = 0; y<panier.length; y++){
        console.log("Voici la liste du panier: " + panier[y].nom + " Son prix est de: " + panier[y].prix)
    }
    console.log(" Voici le total avant reduction:  "+ totalPanier + " Voici le total après reduction: "+ remisePanier);
}
afficherCommande();