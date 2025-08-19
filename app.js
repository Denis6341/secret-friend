// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listOFFriends = document.getElementById('arrayFriends');
let arrayFriends = [];

function addAFriendToTheList(arrayFriends){
    for (let name of arrayFriends){
        //The document.createElement() method, creates a html element specify by its tagName
        //The tag <ul> in the html indicates that when want to put an element inside the list, has to be <li> elemets.
        let friend = document.createElement("li");
        //The textContent property represents the text content from a node and its descendents.
        //It works to put text(userName) inside the node(list).
        friend.textContent = name; 
        //Add a node(<li>) at the end of the list as a children inside the <ul>
        listOFFriends.appendChild(friend);
    }

}

function clearInput(){
    return document.getElementById('friend').value = "";
}

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

    //If validateInput is false, ends the function
    if (!validateInput(userName)) return;
 
    arrayFriends.push(userName);
    console.log(`Actual friends: ${arrayFriends}`);

    listOFFriends.innerHTML = "";
    addAFriendToTheList(arrayFriends);

    clearInput();
}


newFriend = addAFriend();
/*
    

*/