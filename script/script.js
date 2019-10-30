

let button = document.getElementById('button');
button.addEventListener("click", function generateRandomTeams(){

    let prenom = ['Mouafak','Jordan','Madina','Damien','Antonin','Allan','Kévin','Cindy','Thibaud','Anais','Victoria','Justin',
        'Jérémie','Erwan','Lucas 1','Naiim','Théo','Mehdi','Joel','Deborah','Edouard','Lucas 2', 'Elève 1','Eleve 2'];

    let groupNumber = 0;

    // dans cette boucle l'initialisation est une variable dont la valeur est la longueur
    for (let limit = prenom.length; limit >= -2; limit--) {

        let randomNumber1 = Math.floor(Math.random() * Math.floor(limit));

        if (prenom[randomNumber1]) {

            let equipier1 = prenom[randomNumber1];

            let removed = prenom.splice(randomNumber1, 1);

            let randomNumber2 = Math.floor(Math.random() * Math.floor(limit));

            if (prenom[randomNumber2]) {

                let equipier2 = prenom[randomNumber2];

                removed = prenom.splice(randomNumber2, 1);

                groupNumber++;

                let div = document.createElement("div");

                div.setAttribute('class', 'equipe');

                let newDiv = document.getElementsByTagName('main')[0].appendChild(div);


                newDiv.innerHTML = 'l\'équipe ' + groupNumber + ' est composée de ' + equipier1 + ' et ' + equipier2;

                console.log(prenom)
            }
        }
    }

});




