
    //  - J'essaye ici de créer une fonction qui génère des balises input dans le DOM
    //  - Quand le form est 'submit', la fonction génère un nombre de balise 'input' correspondant à la valeur entrée dans l'input 'numbrePersons */
    //  -cette fonction s'active si le bouton continuer est cliqué
function formGenerator(){ 
    // on créé une constante qui récupère la valeure saisie dans l'input "numbrePersons"
    const resultNumberPersons = document.getElementById('numberPersons').value; 
    // console.log(resultNumberPersons);
    // console.log(typeof resultNumberPersons);

    //  -si cette valeur est un nombre et si ce nombre est supérieur à 1
    if (resultNumberPersons>1){ 
        //  -création d'un nouveai formulaire 
        let newForm = document.getElementsByTagName('main')[0].appendChild(document.createElement('form'));
        newForm.setAttribute('id', 'namesForm');
        let i = 0;
        while (i<resultNumberPersons){
            i++;
            let firstName = document.getElementById('namesForm').appendChild(document.createElement('input')); 
            firstName.setAttribute('class', 'firstName');
            let lastName = document.getElementById('namesForm').appendChild(document.createElement('input')); 
            lastName.setAttribute('class', 'lastName');
        }
    /*// création d'un nouveau bouton
    let button = document.getElementById('namesForm').appendChild(document.createElement('button'));
    button.setAttribute('class', 'button');*/
    //  -création d'une variable contenat l'élément numberForm
    let numberForm = document.getElementsByClassName('numberForm')[0];
    //  -suppression de l'élement numberForm
    numberForm.parentNode.removeChild(numberForm);   
    }
}
document.querySelector(".button").addEventListener("click", formGenerator);
