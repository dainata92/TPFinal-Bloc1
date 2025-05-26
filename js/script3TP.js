/*
Contexte :
Tu gères l’historique de navigation d’un navigateur. Chaque nouvelle page visitée est ajoutée à la fin de l’historique.

Consigne :
Crée un tableau historique = []
Crée une fonction ajouterPage(url) qui ajoute une URL à la fin avec push()
Ajoute 3 pages, puis affiche tout l’historique dans la console.
*/

let historique = [];
function ajouterPage(url){
    historique.push("www.google.com");
    historique.push("www.facebook.com");
    historique.push("www.instagram.com");
}
ajouterPage();
console.log(historique);





/*Contexte :
Tu construis une playlist musicale. L’utilisateur ajoute des morceaux au début de la liste (fonction unshift()).

Consigne :
Crée un tableau playlist
Crée une fonction ajouterMorceauDebut(morceau) qui ajoute au début de la liste
Ajoute quelques morceaux, puis utilise une boucle pour afficher la playlist avec une numérotation.
*/

let playlist = [];
function ajouterMorceauDebut(morceau){
    playlist.unshift("Joseph Kamel - Celui qui part");
    playlist.unshift("David Kushner - Daylight");
    playlist.unshift("Jennifer Lopez - Let's get loud");
    playlist.unshift("Lola Young - Messy");
    playlist.unshift("Taylor Swift - AntiHero");
}
ajouterMorceauDebut();
for(let i = 0; i<playlist.length; i++){
    console.log("Le morceau n°"+(i+1)+": "+playlist[i]);
}


/*
Contexte :
Tu gères une liste de fichiers récemment supprimés. Le plus ancien doit être supprimé en premier (FIFO 🡪 First In First Out).

Consigne :
Crée un tableau corbeille = ["photo1.png", "doc2.pdf", "image3.jpg"]
Crée une fonction viderCorbeille() qui supprime le premier élément avec shift() et affiche ce qui reste
Appelle la fonction 2 fois et affiche la corbeille après chaque suppression.
*/

let corbeille = ["photo1.png", "doc2.pdf", "image3.jpg"];
function viderCorbeille(){
    corbeille.shift();
    console.log(corbeille);
}
viderCorbeille();
console.log(corbeille);
viderCorbeille();
console.log(corbeille);



/*
Contexte :
Un utilisateur peut mettre à jour ou compléter ses informations via un formulaire.

Consigne :
Crée un objet utilisateur = { nom: "Sarah", ville: "Lyon" }
Crée une fonction mettreAJourProfil(cle, valeur) :
Si la propriété existe, la mettre à jour
Sinon, l’ajouter
Teste avec : mettreAJourProfil("email", "sarah@mail.com") puis mettreAJourProfil("ville", "Paris")
Affiche l’objet après chaque modification
*/

let utilisateur = {
    nom: "Sarah",
    ville: "Lyon"
}
function mettreAJourProfil(cle, valeur){
    if (utilisateur[cle]){ // on test si la clé reçu on utilise [] car variable, on utilise . si valeur connue
        utilisateur[cle] = valeur;
    }else{
        utilisateur[cle] = valeur;
    }
    console.log(utilisateur);
}
mettreAJourProfil("email", "sarah@mail.com");
mettreAJourProfil("ville", "Paris");




/*
Contexte :
Tu veux anonymiser un objet avant de l’envoyer à un service externe.

Consigne :
Crée un objet client = { nom: "Jean", email: "jean@mail.com", tel: "0600000000" }
Crée une fonction supprimerPropriete(obj, propriete) :
Vérifie si la propriété existe (in)
Si oui, supprime-la (delete) et affiche un message
Sinon, affiche un message d’erreur
Teste avec supprimerPropriete(client, "tel") puis avec "adresse"
*/

let client = { nom: "Jean", email: "jean@mail.com", tel: "0600000000" }
function supprimerPropriete(obj, propriete){
    if (propriete in client){
            delete client[propriete];
            console.log("À été supprimé");
    }else{
        console.log("Erreur");
    }
}
supprimerPropriete(client, "tel");
console.log(client);
supprimerPropriete(client, "adresse");


/*
Contexte :
Tu veux gérer les commandes clients avec un tableau d’objets.

Consigne :
Crée un tableau commandes contenant 3 objets avec : client, produit, quantite
Crée une fonction totalArticles() qui retourne la quantité totale commandée
Crée une fonction ajouterCommande(client, produit, quantite) qui ajoute une commande à la fin du tableau
Teste l’ajout et affiche la quantité totale après chaque ajout.
*/
let commandes = [
    {client: "Dainata", produit: "jupe", quantite: 3},
    {client: "Aurelien", produit: "pantalon", quantite: 5},
    {client: "Anastasia", produit: "manteau", quantite: 7}
];
let total = 0
function totalArticles(){
    for (let i = 0;i < commandes.length; i++ ){
        total += commandes[i].quantite;
    }
}
function ajouterCommande(client, produit, quantite){
    let commande = {client,produit,quantite};
    commandes.push(commande);
}
//totalArticles();
console.log(total);
ajouterCommande("Chloe","robe",6);
console.log(commandes);
totalArticles();
console.log(total);
