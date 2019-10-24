
    //  - J'essaye ici de créer une fonction qui génère des balises input dans le DOM
    //  - Quand le form est 'submit', la fonction génère un nombre de balise 'input' correspondant à la valeur entrée dans l'input 'numbrePersons */
    // cette fonction s'active si le bouton continuer est cliqué
function formGenerator(){ 
    // on créé une constante qui récupère la valeure saisie dans l'input "numbrePersons"
    var resultNumberPersons = document.getElementById('numberPersons').value; 
    console.log(resultNumberPersons);

    // si cette valeur est un nombre et si ce nombre est supérieur à 1
    if (resultNumberPersons>1){  
        var i = 0;
        while (i<resultNumberPersons){
            i++;
            document.getElementsByTagName('form')[0].appendChild(document.createElement('input', 'text'));    
        }
        document.getElementsByTagName('form')[0].appendChild(document.createElement('button', 'submit'));
    }
}

// Remarque: avec le code non encapsulé dans une function ça fonctionne pas mal


/*const numberPersons = document.getElementById('numberPersons').value;

if (numberPersons>1){
    var i = 0;
    while (i<numberPersons){
        let form = document.body.appendChild(document.createElement('input', 'text').atr);
        i++;
        console.log(form);
    }
}*/