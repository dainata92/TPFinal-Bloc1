/*Contexte :
Tu travailles sur un mini système de gestion de stock pour une boutique en ligne.

Consigne :
Crée un tableau de produits contenant 3 objets avec : nom, stock, seuil.
Crée une fonction produitEnRupture qui retourne true si stock < seuil.
Parcours tous les produits avec une boucle et affiche dans la console :
“Le produit [nom] est bientôt en rupture.” si applicable.
*/


let pantalon =  {
    nom: "pantalon",
    stock : 33,
    seuil : 3
}
let jupe = {
    nom: "jupe",
    stock: 4,
    seuil: 5
}
let pull = {
    nom: "pull",
    stock: 49,
    seuil: 9
}
let liste = [pantalon, jupe, pull];
/*
let liste = [
{nom: "pantalon", stock: 33, seuil: 3},
{nom: "jupe", stock: 4, seuil: 5},
{nom: "pull", stock: 49, seuil: 9}
];
*/
//console.log(produits);     //affiche le tableau avec les 3 produit
function produitEnRupture(prod){
    if (prod.stock < prod.seuil ){
        return true;
        //return prod.stock < prod.seuil;     //ca donne la meme chose que if
    }

    /*
    function produitEnRupture(prodStock, prodSeuil){
        return prodStock < prodSeuil; 
    }
    */
}
for (let i =0; i<liste.length; i++){
    if(produitEnRupture(liste[i])){
        console.log("Le produit " + liste[i].nom + " est bientot en rupture");
    }
    /*
    if (produitEnRupture(liste[i].stock, liste[i].seuil))
    */
}



/*
Contexte :
Un panier d’achats contient plusieurs articles.
On souhaite afficher le total avec ou sans remise, selon un seuil.

Consigne :
Crée un tableau panier contenant des objets { nom, prix }.
Crée une fonction calculerTotal() qui additionne tous les prix.
Crée une fonction appliquerRemise() : si le total dépasse 100€, appliquer 10% de réduction.
Affiche le total avec et sans remise.
*/

let lait = {
    nom: "lait",
    prix : 200
}
let miel = {
    nom: "miel",
    prix: 35
}
let stylo = {
    nom: "stylo",
    prix: 125
}
let panier = [lait, miel, stylo];
let total = 0;
let remise = 0; 
// console.log(panier);      affiche les articles du panier
function calculerTotal(){
    for (j =0; j<panier.length; j++){
        total += panier[j].prix;   
    } 
}


function appliquerRemise(){
    if (total > 100){
        remise = 0.9 * total;
    }
}
calculerTotal()
appliquerRemise()
console.log("Total sans remise "+ total + " Total avec remise " + remise)




/*
Contexte :
Tu analyses une liste de candidatures à un bootcamp.

Consigne :
Crée un tableau candidats avec des objets : { nom, age, niveau }.
Crée une fonction estAdmissible(candidat) :
Admissible si age >= 18 && niveau === "débutant"
Crée une fonction filtrerCandidats() qui retourne un nouveau tableau des admissibles.
Affiche les noms des admissibles dans la console.
*/


let candidat1 = {
    nom: "Dainata",
    age: 32,
    niveau: "débutant"
}
let candidat2 = {
    nom: "Anastasia",
    age: 21,
    niveau: "elementaire"
}
let candidat3 = {
    nom: "Chloe",
    age: 29,
    niveau: "expérimenté"
}
let candidat4 = {
    nom: "Aurelien",
    age: 17,
    niveau: "elementaire"
}

let candidats = [candidat1, candidat2, candidat3, candidat4];
let filtre = [];         //tableau vide pour mettre les admissibles dedans
function estAdmissible(candidat){
    if ((candidat.age >= 18) && (candidat.niveau === "débutant")) {
            return true;
    }
}
function filtrerCandidats(){
    let posFiltre = 0;       //la position dans le tableau filtre
    for(let b = 0; b<candidats.length; b++){
        if (estAdmissible(candidats[b])){
            filtre[posFiltre] = candidats[b];
            posFiltre++;
        }      
}
}
filtrerCandidats();    //on appelle la fonction pour remplir le tableau filtre

let texte = "Voici la liste des noms des admissibles: ";
for (let c = 0; c<filtre.length; c++){
    texte += filtre[c].nom;
}
console.log(texte);





/*
Contexte :
Tu corriges un quiz en ligne avec des résultats stockés dans un tableau de scores.

Consigne :
Crée un tableau resultats = [12, 17, 8, 20, 15].
Crée une fonction convertirEnMention(note) qui retourne :
"Insuffisant" si <10
"Passable" si 10-14
"Bien" si 15-17
"Excellent" si 18-20
Parcours le tableau avec une boucle, affiche :
“Note : 12 - Mention : Passable”
“Note : 17 - Mention : Bien”
…*/

let resultats = [12, 17, 8, 20, 15];
function convertirEnMention(note){
    if (note < 0 && note > 20){
        return "Il faut une note entre 0 et 20";
    }
    else if (note < 10){
        return "Insuffisant";
    }
    else if (note <= 14){
        return "Passable";
    }
    else if (note <= 17){
        return "Bien";
    }
    else{
        return "Excellent";
    }
}

for (let x = 0; x < resultats.length; x++){
    console.log("Note : " + resultats[x] + " - Mention : " + convertirEnMention(resultats[x]))
}



/*
Contexte :
Tu veux générer automatiquement des messages personnalisés à une liste de clientes.

Consigne :
Crée un tableau clientes avec objets { prenom, abonnement }.
Crée une fonction genererMessage(client) qui retourne :

“Bonjour [prenom], votre abonnement [type] est actif.”

Utilise une boucle pour afficher tous les messages.
*/

let client1 ={
    prenom: "Dainata",
    abonnement: "gratuit"
}
let client2 = {
    prenom: "Anastasia",
    abonnement: "payant"
}
let client3 = {
    prenom: "Chloé",
    abonnement: "mensuel"
}
let clients = [client1, client2, client3];
function genererMessage(client){
    for(let d = 0; d < clients.length; d++){
        console.log("Bonjour " + clients[d].prenom + ", votre abonnement " + clients[d].abonnement + " est actif.");
    }
}
genererMessage();






/*
Contexte :
Une équipe projet contient plusieurs membres avec des rôles et des années d’expérience.

Consigne :
Crée un tableau equipe contenant des objets { nom, role, experience }.
Crée une fonction estSenior(membre) qui retourne true si experience >= 5.
Crée une fonction afficherSeniors() qui affiche les noms des membres seniors.
Bonus : Utilise une fonction pour compter combien de seniors.
*/

let membre1 = {
    nom: "Dainata",
    role: "employée",
    experience: 2
}
let membre2 = {
    nom: "Aurelien",
    role: "responsable",
    experience: 25
}
let membre3 = {
    nom: "Anastasia",
    role: "commis",
    experience: 7
}
let equipe = [membre1, membre2, membre3]
function estSenior(membre){
    if (membre.experience >= 5){
        return true;
    }
}
function afficherSeniors(){
    for (let s = 0; s<equipe.length; s++){
        if (estSenior(equipe[s])){
            console.log(equipe[s].nom);
        }
    }
}
afficherSeniors();

function compte(){
    let compteur = 0 ;
    for (let s = 0; s<equipe.length; s++){
        if (estSenior(equipe[s])){
            compteur = compteur + 1;
    }
}
return compteur;
}
console.log(compte());