

let button = document.getElementById('button');
button.addEventListener("click", function generateRandomTeams(){

    let prenom = ['Mouafak','Jordan','Madina','Damien','Antonin','Allan','Kévin','Cindy','Thibaud','Anais','Victoria','Justin',
        'Jérémie','Erwan','Lucas 1','Naiim','Théo','Mehdi','Joel','Deborah','Edouard','Lucas 2', 'Elève 1','Eleve 2','Eleve 3','Eleve 4'];

    let groupNumber = 0;

    let nombreCoequipiers = 2;

    // dans cette boucle l'initialisation est une variable dont la valeur est la longueur
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

            p2 = newDiv.appendChild(document.createElement('p'));

            p2.innerHTML = equipier1 + ' et ' + equipier2;

                console.log(prenom);
        }

    }

});




