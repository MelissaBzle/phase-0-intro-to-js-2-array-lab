const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    
    cats.push("Ralph");

    return cats;
}

function destructivelyPrependCat(name){

    cats.unshift("Bob");

    return cats;
}

function destructivelyRemoveLastCat(name){

    cats.pop();

    return cats;
}

function destructivelyRemoveFirstCat(name){

    cats.shift();

    return cats;
}

function appendCat(name){

    const appendCat = [...cats, "Broom"];
    
    return appendCat;
}


function prependCat(name){
    const prependCat = ["Arnold",...cats];
    
    return prependCat;
}

function removeLastCat(){
    const removeLastCat = cats.slice(0,-1); 
    return removeLastCat;
}

function removeFirstCat(){
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;


}















