// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];
let newFriend;

function validateInput(input){
    if (input == "") {
        alert("¡Error! Please, insert a name");
        return false; //Indicates the validation fails
    }
    return true; //Correct validation
}

function addAFriend(){
    // The trim() method remove empty spaces at the beginin and end of the array
    let userName = document.getElementById('friend').value.trim();
    if (validateInput(userName)){
        friends.unshift(userName);
        console.log(`Actual friends: ${friends}`);
        return friends;
    }
}

newFriend = addAFriend();
