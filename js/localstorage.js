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
        console.log({json});
        
        for(i=0; i < json.length; i++) {
            if(i%2 == 1){
                console.log({i});
                var source = 'me';  
                window.createMessage(source , json[i].content);
            } else {
                console.log({i});
                var source = 'robot';
                window.createMessage(source , json[i].content);
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
        content : createdDiv.message
    }
 
    storeArray.push(messageObj);
    console.log(storeArray);
    store.setItem('message', JSON.stringify(storeArray));
}

window.dataStore = dataStore;
