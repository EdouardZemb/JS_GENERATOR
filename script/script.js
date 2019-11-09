// cette fonction permet de renvoyer un tableau contenant les mêmes valeurs que le tableau en argument
// mais dans un ordre différent
function randomizeArray(originalArray)
{
    // cette variable copie les valeurs de la variable en argument
    // slice() permet d'éviter de modifier la variable originelle
    let copyArray = originalArray.slice();
    // cette variable crée un nouveau tableau vide
    // ce tableau accueille les valeurs renvoyées par la boucle for
    let  randomizeArray = [];
    // cette boucle tourne tant que le tableau copyArray n'est pas vide
    for (let valuesLeftInTheArray = copyArray.length; valuesLeftInTheArray > 0; valuesLeftInTheArray--)
    {
        // cette constante contient un nombre aléatoire généré entre 0 et la longueur du tableau copyArray
        const randomNumber = Math.floor(Math.random() * Math.floor(valuesLeftInTheArray));
        // cette constante contient la valeur du tableau copyArray corespondant à l'index randomNumber
        const randomValue = copyArray[randomNumber];
        // la valeur randomValue est stockée dans le tableau randomizeArray
        randomizeArray.push(randomValue);
        // la valeur randomValue est supprimée du tableau copyArray
        // a chaque tour la longueur du tableau copyArray est réduite de 1
        copyArray.splice(randomNumber, 1)
    }
    // la fonction renvoie le tableau randomizeArray contenant toutes les valeurs du tableau originalArray
    // dans un ordre différent
    return randomizeArray;
}
// cette fonction permet de séparer les valeurs contenues dans le tableau en argument en plusieurs tableaux de la même taille
// la taille des tableaux renvoyés est définie par l'argument valuesPerArray
function arraySeparator(originalArray, valuesPerArray)
{
    // cette variable copie les valeurs de la variable en argument
    // slice() permet d'éviter de modifier la variable originelle
    let copyArray = originalArray.slice();
    // cette variable crée un nouveau tableau vide
    // ce tableau accueille les valeurs/tableaux renvoyés par la boucle for
    const allArraysInOne = [];
    // cette boucle tourne tant que la valeur de la variable i est inférieure à la longueur du tableau en argument de la fonction
    // a chaque tour la valeure de la variable i augmente de la valeur de l'argument teamMatesPerTeam
    for (let i = 0 ; i < originalArray.length ; i += valuesPerArray)
    {
        // cette variable crée un nouveau tableau vide
        // ce tableau accueille les valeurs renvoyées par la boucle for
        let newArray = [];
        // cette boucle tourne tant que la valeur de la variable b est inférieur à la valeur de la variable valuesPerArray
        for (let b = 0 ; b < valuesPerArray; b++)
        {
            // la fonction push permet ici de stocker la valeur correspondant à l'index 0 dans le tableau copyArray
            newArray.push(copyArray[0]);
            // la fonction splice permet ici de supprimer a valeur correspondant à l'index 0 dans le tableau copyArray
            // au tour suivant, la valeur correspondant à l'index 0 dans le tableau copyArray sera automatiquement remplacée par la suivante tant qu'il y a une valeur dans le tableau
            copyArray.splice(0,1);
        }
        // cette fonction permet d'envoyer chaque tableau team dans le tableau allArraysInOne
        allArraysInOne.push(newArray);
    }
    // la fonction renvoie un tableau contenant toutes les valeurs du tableau originalArray
    // séparées en tableau dont la taille est définie par la valeur de valuesPerArray
    return allArraysInOne;
}
function displayArrays(originalArray)
{
    let copyArray = originalArray.slice();

    let teams = document.querySelector('#teams');

    teams.innerHTML = "";

    let numbreElement = 0;

    copyArray.forEach(function (element)
    {
        numbreElement++;

        let newDiv = document.createElement("div");

        newDiv.setAttribute("class","team");

        let newH3 = document.createElement("h3");

        let newTitle = document.createTextNode("Team "+numbreElement);

        let newHr = document.createElement("hr");

        let newPara = document.createElement("p");

        let newText = document.createTextNode(element);

        newH3.appendChild(newTitle);

        newDiv.appendChild(newH3);

        newDiv.appendChild(newHr);

        newPara.appendChild(newText);

        newDiv.appendChild(newPara);

        let selectDiv = document.getElementById("teams");

        selectDiv.appendChild(newDiv);
    })
}
function getValueById(id){
    return idValue = document.querySelector('#'+id).value;
}

(function (){
    const button = document.querySelector('#form1Submit');
    button.addEventListener("click", (function(submit){

        submit.preventDefault();

        const teamMatesPerTeam = getValueById('teamMatesPerTeam');

        const totalParticipants = getValueById('totalParticipants');

        const newForm = document.querySelector('main').appendChild(document.createElement('form'));

        newForm.setAttribute('id', 'form2');

        for(let i = 0 ; i < totalParticipants ; i++) {
            const newdiv = document.querySelector('#form2').appendChild(document.createElement('div'));
            const newLabel = newdiv.appendChild(document.createElement('label'))
            const newInput = newdiv.appendChild(document.createElement('input'))
            newInput.setAttribute('id', 'teamMates'+(i+1));
            newInput.setAttribute('value', 'Team Mate '+(i+1));
            newLabel.setAttribute('for', 'teamMates'+(i+1));
            newLabel.innerText = 'Team Mate '+(i+1)+' : ';
        }

        // document.querySelector('#form2').appendChild(document.createElement('button'));

    }));

})();

/*
const teamMates = ['Mouafak','Jordan','Madina','Damien','Antonin','Allan','Kévin','Cindy','Thibaud','Anais','Victoria','Justin',
    'Jérémie','Erwan','Lucas 1','Naiim','Théo','Mehdi','Joel','Deborah','Edouard','Lucas 2', 'Elève 1','Eleve 2','Eleve 3'];

let teamMatesPerTeam = 2;

const a = randomizeArray(teamMates);
const b = arraySeparator(a, teamMatesPerTeam);
const c = displayArrays(b);

*/