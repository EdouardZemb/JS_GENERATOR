
    //  - J'essaye ici de créer une fonction qui génère des balises input dans le DOM
    //  - Quand le form est 'submit', la fonction génère un nombre de balise 'input' correspondant à la valeur entrée dans l'input 'numbrePersons */
    //  -cette fonction s'active si le bouton continuer est cliqué
let form = document.getElementsByTagName('main')[0].appendChild(document.createElement('form'));
form.setAttribute('action', '',);
form.setAttribute('method','post');
// form.setAttribute('onsubmit','getInputValue()')

let label = document.getElementsByTagName('form')[0].appendChild(document.createElement('label'));
label.setAttribute('for','group_size')
label.innerHTML = 'Combien êtes vous ?'

let input = document.getElementsByTagName('form')[0].appendChild(document.createElement('input'));
input.setAttribute('type', 'text',);
input.setAttribute('id','group_size');
input.setAttribute('name','group_size');
input.setAttribute('value','');
input.setAttribute('placeholder','How many are you ?');
input.required = true;

let button = document.getElementsByTagName('main')[0].appendChild(document.createElement('button'));
button.setAttribute('type','submit');
button.setAttribute('value','submit');
button.innerHTML = 'Envoyer';

button.addEventListener('click', getInputValue);

function getInputValue()
{
    let group_size = document.getElementsByTagName('input')[0].value;
    groupe_size = parseInt(group_size);
    
    if(isNaN(group_size) || groupe_size <= 2)
    {
        alert('Veuillez saisir un nombre supérieur à 2');
    }
    if(group_size >= 2)
    {
        let group_size_sqrt = Math.sqrt(group_size);

        for(let possible_groups_sizes = 2; possible_groups_sizes < group_size_sqrt; possible_groups_sizes++)
        {
            let all_deviders = group_size / possible_groups_sizes;
            //console.log(d);
            all_int_deviders = parseInt(all_deviders);
            //console.log(d);
            let result = all_int_deviders * possible_groups_sizes;
            //console.log(r);

            if(result == group_size)
            {

                console.log('vous pouvez faire des groupes de ');
                console.log(possible_groups_sizes);

                // console.log(valid_groups_sizes);
                
            }
            else
            {
                console.log('Vous ne pouvzez pas faire de groupe de');
                console.log(possible_groups_sizes);
            }  
        }     
    }
    // else
    // {
    //     alert('La valeur saisie est incorrecte !')
    // }
}



//value="<?php echo $category['category_name'];?>"
/*
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
    /* // création d'un nouveau bouton
    let button = document.getElementById('namesForm').appendChild(document.createElement('button'));
    button.setAttribute('class', 'button'); */
    //  -création d'une variable contenat l'élément numberForm
    /*let numberForm = document.getElementsByClassName('numberForm')[0];
    //  -suppression de l'élement numberForm
    numberForm.parentNode.removeChild(numberForm);   
    }
}
document.querySelector(".button").addEventListener("click", formGenerator);*/
