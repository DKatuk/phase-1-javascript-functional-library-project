const check = (data) => {
    return (data instanceof Array) ? data : Object.values(data);
}

function myEach(collection, callback){
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
        callback(collection[i]);
        }
    } else {
        for (var key in collection){
        callback(collection[key]);
        }
    }
    return collection
}

function myMap(collection, callback){
    let newArray = [];
    myEach(collection, function(element){
        newArray.push(callback(element));
    });
    return newArray;
}


function myReduce (collection, callback, initialValue) {
    let newArray = check(collection);
    if (initialValue==false || initialValue==undefined) {
        initialValue = newArray[0];
        newArray = newArray.slice(1);
      }
    for (let i = 0; i < newArray.length; i++) {
    initialValue = callback(initialValue, newArray[i], newArray);
    }
    return initialValue;
}


function myFind (array, callback) {
    const newArray = check(array);
    for (let i = 0; i < newArray.length; i++) {
        if (callback(newArray[i])) {
            return newArray[i];
        }
    } return undefined;
}


function myFilter(collection, callback){
    let newArray = [];
    myEach(collection, function(element){
        if (callback(element)){
            newArray.push(element);
        }
    });
    return newArray;
}

function mySize(collection){
    let count = 0;
    myEach(collection, function(){
        count++;
    });
    return count;
}

function myFirst(collection, index=0){
    const newArray = check(collection);
    const newArray2 = [];

    if(index!=0){
        for(let i=0; i<index; i++){
            newArray2.push(newArray[i]);
        }return newArray2;
    }else if(index==0){
        return newArray[0];
    }
    
}

function myLast(array, n=0) {
    if (n == 0 || n == 1) {
        return array[mySize(array)-1]; 
    }
    let res = []; 
    for (let i = mySize(array) - n; i < mySize(array); i++) {
        res.push(array[i]); 
    }
    return res; 
}

function myKeys(object) {
    return Object.keys(object); 
}

function myValues(object) {
    return Object.values(object); 
}


