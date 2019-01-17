/*
===================
LOCAL STORAGE
===================
*/

var storeArray = [];
const store = window.localStorage;

function getStorageContent(){
    if(store.message !== undefined){
        var json = JSON.parse(store.message);
        console.log(store.message);
        
        for(i=0; i < json.length; i++) {
            console.log(json[i].content);
            if(json[i].user !== "Moi"){
                window.createMessage("me", json[i].content);
            } else {
                window.createMessage("robot", json[i].content);
            }
        }
    }
}

window.onload = getStorageContent();

//////////////////////////////////////////
// Store questions data in localstorage
/////////////////////////////////////////

function dataStore(){

    var messageObj = {
        user : window.createdDiv.from,
        content : window.createdDiv.message
    }
 
    storeArray.push(messageObj);
    console.log({storeArray});
    store.setItem('message', JSON.stringify(storeArray));
}

window.dataStore = dataStore;
