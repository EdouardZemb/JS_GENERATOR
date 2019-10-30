

let button = document.getElementById('button');
button.addEventListener("click", function generateRandomTeams(){


    //  let check = [Mouafak=false,Jordan=false,Madina=false,Damien=false,Antonin=false,Allan=false,Kevin=false,Cindy=false,Thibaud=false,Anais=false,Victoria=false,Justin=false,
    //  Jeremie=false,Erwan=false,Lucas1=false,Naiim=false,Théo=false,Mehdi=false,Joel=false,Deborah=false];

    let prenom = ['Mouafak','Jordan','Madina','Damien','Antonin','Allan','Kévin','Cindy','Thibaud','Anais','Victoria','Justin',
        'Jérémie','Erwan','Lucas 1','Naiim','Théo','Mehdi','Joel','Deborah','Edouard','Lucas 2', 'Elève 1'];

    let groupNumber = 0;

    // dans cette boucle l'initialisation est une variable dont la valeur est la longueur
    for (let limit = prenom.length; limit >= 0; limit--) {

        let randomNumber1 = Math.floor(Math.random() * Math.floor(limit));

        let randomNumber2 = Math.floor(Math.random() * Math.floor(limit));

        // console.log(prenom);

        if (prenom[randomNumber1] && prenom[randomNumber2] && prenom[randomNumber1] != prenom[randomNumber2]) {

            groupNumber++;

            let div = document.createElement("div");

            let newDiv = document.getElementsByTagName('main')[0].appendChild(div);

            newDiv.innerHTML = 'l\'équipe ' + groupNumber + ' est composée de ' + prenom[randomNumber1] +' et ' + prenom[randomNumber2];



            console.log(randomNumber1, randomNumber2)
            let removed = prenom.splice(randomNumber1, 1);



            removed = prenom.splice(randomNumber2, 1);

            console.log(removed, prenom);

        }
        // if (index > -1) {
        // prenom.splice(index, 1);
        //}

        // console.log(removed);
        // console.log(removed2);

    }

});


