// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listOFFriends = document.getElementById('arrayFriends');
let arrayFriends = [];
let numberRandom;
let selectedFriend;
let result;


function resert(){
    arrayFriends = [];
    document.getElementById("arrayFriends").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    clearInput();
}

function valideRepetedNames(userName){
    let alreadyExists = arrayFriends.some(function(name){
        return name.toLowerCase() === userName.toLowerCase();
    });

    if (alreadyExists){
        alert(`${userName} is already in the list`);
        clearInput();
        return false;   
    }
    return true;
}

function clearList(){
    return listOFFriends.innerHTML = "";
}

function drawFriend(){
    if(arrayFriends.length === 0){
        alert("Add a friend first");
        return;
    }

    numberRandom = randomIndex();
    selectedFriend = getSelectedName(numberRandom);
    console.log(`Index: ${numberRandom}`);
    console.log(`Name: ${selectedFriend}`);

/*     //Clear the space for result
    
    resultList.innerHTML = ""; */

    const resultList = document.getElementById("result");

    //Creates a <li> with the winner name
    const result = document.createElement("li");
    result.textContent = "The secret friend is: " + selectedFriend;
    resultList.appendChild(result);    
} 

function getSelectedName(index){
    return arrayFriends[index];
}

function randomIndex(){
    let selectedIndex = Math.floor(Math.random()*arrayFriends.length);
    return selectedIndex;
}

function validateArrayFriends(array){
    if(array == []) {
        alert("Add a friend");
        return;
    }
}

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
 
    if (!valideRepetedNames(userName)) return;
    arrayFriends.push(userName);
    console.log(`Actual friends: ${arrayFriends}`);

    clearList();
    addAFriendToTheList(arrayFriends);

    clearInput();
    return arrayFriends;
}

