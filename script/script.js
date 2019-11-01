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
    for (let i = copyArray.length; i > 0; i--)
    {
        // cette constante contient un nombre aléatoire généré entre 0 et la longueur du tableau copyArray
        const randomNumber = Math.floor(Math.random() * Math.floor(i));
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
    let allArraysInOne = [];
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

const teamMates = ['Mouafak','Jordan','Madina','Damien','Antonin','Allan','Kévin','Cindy','Thibaud','Anais','Victoria','Justin',
    'Jérémie','Erwan','Lucas 1','Naiim','Théo','Mehdi','Joel','Deborah','Edouard','Lucas 2', 'Elève 1','Eleve 2','Eleve 3'];

const teamMatesPerTeam = 2;

const a = randomizeArray(teamMates);
console.log(a);
const b = arraySeparator(a, teamMatesPerTeam);
console.log(b);



/*
document
    .getElementById('button');
    .addEventListener("click",

}));

function generateRandomTeams()
{
    let numberTeams = teamMates.length/TeamMatesPerTeam;

    let teamMatesModif = teamMates.slice();

    console.log(numberTeams);

    for (let numberTeamsCreated = 1; numberTeamsCreated <= numberTeams; numberTeamsCreated++)
    {

        let p = document.createElement('p');

        let newDiv = document.getElementById('all_teams').appendChild(document.createElement('div'));

        newDiv.setAttribute('class', 'equipe');

        p = newDiv.appendChild(document.createElement('p'));

        p.innerHTML = 'Team ' + numberTeamsCreated;

        for (let TeamMatesCreated = 1; TeamMatesCreated <= TeamMatesPerTeam; TeamMatesCreated++ )
        {

            let randomNumber = Math.floor(Math.random() * Math.floor(teamMatesModif.length-1));

            let teamMate = teamMates[randomNumber];

            let removed = teamMatesModif.splice(randomNumber, 1);

            let p2 = newDiv.appendChild(document.createElement('p'));

            p2.innerHTML = teamMate;
        }
    }
});

const prenomInit = ['Mouafak','Jordan','Madina','Damien','Antonin','Allan','Kévin','Cindy','Thibaud','Anais','Victoria','Justin',
    'Jérémie','Erwan','Lucas 1','Naiim','Théo','Mehdi','Joel','Deborah','Edouard','Lucas 2', 'Elève 1','Eleve 2','Eleve 3','Eleve 4'];

const nombreCoequipiersInit = 2;

let button = document.getElementById('button');
button.addEventListener("click", function generateRandomTeams(){

    let prenom = prenomInit;

    let groupNumber = 0;

    let nombreCoequipiers = nombreCoequipiersInit;

    // dans cette boucle l'initialisation est une variable (limit) dont la valeur est la longueur initiale de la variable prenom
    //

    function randomArray(originalArray) {

        let copyArray = originalArray.slice();

        let  newValue = [];

        for (let i = copyArray.length; limit >= 0; i--) {

            let randomNumber = Math.floor(Math.random() * Math.floor(i));

            let randomValue = copyArray[randomNumber];

            newValue = ['randomValue']

            let removed = copyArray.splice(randomNumber, 1);)
            }

        return newValue;


    for (let limit = prenom.length; limit >= 0; limit -= nombreCoequipiers) {
        let randomNumber1 = Math.floor(Math.random() * Math.floor(limit));

        let equipier1 = prenom[randomNumber1];

        let removed = prenom.splice(randomNumber1, 1);

        let randomNumber2 = Math.floor(Math.random() * Math.floor(limit-1));

        let equipier2 = prenom[randomNumber2];

        removed = prenom.splice(randomNumber2, 1);

        if (equipier1 && equipier2) {

            groupNumber++;

            let p = document.createElement('p');

            let newDiv = document.getElementById('all_teams').appendChild(document.createElement('div'));

            newDiv.setAttribute('class', 'equipe');

            p = newDiv.appendChild(document.createElement('p'));

            p.innerHTML = 'Team ' + groupNumber;

            let p2 = newDiv.appendChild(document.createElement('p'));

            p2.innerHTML = equipier1 + ' et ' + equipier2;

                console.log(prenom);
        }

    }

});*/




