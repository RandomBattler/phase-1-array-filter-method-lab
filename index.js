// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(d=> d.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(d=> d.startsWith(letters));
}

function matchName(drivers, name){
    return drivers.filter(d=> d.name === name);
}