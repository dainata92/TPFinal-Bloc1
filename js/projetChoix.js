//Générateur de citations
//Création aléatoire de phrases inspirantes.
let tableauPhrases = [
    {phrase: "La seule façon de faire du bon travail est d’aimer ce que vous faites.",
    auteur: "Steve Jobs"
    },
    {phrase: "Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès.",
    auteur: "Albert Schweitzer"
    },
    {phrase: "Agissez comme s’il était impossible d’échouer.",
    auateur: "Winston Churchill"
    },
    {phrase: " Le but de notre vie est d’être heureux.",
    auteur: "Dalaï Lama"
    },
    {phrase: "Changez vos pensées et vous changerez votre monde.",
    auteur: "Norman Vincent Peale"
    },
    {phrase: "Vise la lune, même si tu rates, tu atterriras parmi les étoiles.",
    auteur: "Les Brown"
    },
    {phrase: "Faites de votre vie un rêve, et d’un rêve, une réalité.",
    auteur: "Antoine de Saint-Exupéry"
    }];
    let phraseRandom  = Math.floor(Math.random() * tableauPhrases.length);
    console.log(phraseRandom); 
do{
    demande = prompt("Voulez vous que je vous génére une phrase inspirante aujourd'hui?");
    if (demande === "oui"){
        console.log("La phrase: " + tableauPhrases[phraseRandom].phrase + ". L'auteur: " + tableauPhrases[phraseRandom].auteur);
    }else {
        console.log("Ok, tres bien, merci de votre visite.");
    }
}while (demande !== "non");





//Calculatrice
//Interface pour effectuer des opérations mathématiques.
let chiffre1 = "";
let chiffre2= "";
let operateur= "";
function insererChiffre1(){
    chiffre1 = prompt("Inserez le premier numéro: ") ;
    chiffre1 = parseInt(chiffre1); 
}
function insererChiffre2(){
    chiffre2 = prompt("Inserez le 2eme numéro: ") ;
    chiffre2 = parseInt(chiffre2); 
}
function insererOperateur(){
    operateur = prompt("Inserez l'operateur : +, - , * , / ");
}
insererChiffre1();
insererChiffre2();
insererOperateur();
if (operateur === "+"){                     //additionne les chiffres
    console.log(chiffre1+chiffre2);
}
else if (operateur === "-"){                //fait la difference des chiffres
    console.log(chiffre1-chiffre2);
}
else if (operateur === "*"){                //fait la multiplications des chiffres
    console.log(chiffre1*chiffre2);
}
else{
    if ((chiffre1 === 0) || (chiffre2 === 0))
        { alert("Erreur")
        }
    console.log(chiffre1/chiffre2);           //fait la division des chiffres
}



//Questionnaire
//Série de questions avec évaluation des réponses.
//reponse vrai ou faux

let tableauQR = [
    {
    question: "Est-ce que Bucharest est la capitale de la Roumanie?",
    reponse:  "Oui"
    },
    {
    question: "Est-ce que la voiture a 4 roues",
    reponse: "Oui"
    },
    {
    question: "Est-ce que une main a 5 doigts?",
    reponse: "Oui"    
    },
    {
    question: "Est-ce que 2*2 = 4",
    reponse: "Oui"
    },
    {
    question: "Est-ce que le coca est sucré?",
    reponse: "Oui"
    }
];   

function estVrai(){
    for (let j = 0; j<tableauQR.length; j++){
        let repAtt = prompt(tableauQR[j].question);
    if (repAtt === tableauQR.reponse){
        alert("Bonne reponse")
    }else {
        alert("Mauvaise reponse");
    }
    }
}
estVrai();
