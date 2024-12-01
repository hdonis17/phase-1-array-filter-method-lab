// Code your solution here
const driversNames = ["Jim", "Steve", "Larry", "David", "John"];
const driverObj = [{name: "Jim", place: "Florida"}, {name: "Steve", place: "NY"}]


function findMatching(array, string){
    return array.filter(name => {
        return name.toLowerCase() === string.toLowerCase();
    });
};

function fuzzyMatch(array, string){
    return array.filter(name => {
        return name[0] === string[0]
    });
};

function matchName(array, string){
    return array.filter(object => {
        return object["name"] === string
    });
};
