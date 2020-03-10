// Code your solution in this file.

const drivers = [
    'Bobby Smith',
    'Sammy Watkins',
    'Sally Jenkins',
    'Annette Sawyer',
    'Sarah Hucklebee',
    'bobby ridge'
  ];

let result = []
function lowerCaseDrivers(collection){
    // 1) uses the Array map method
    // 2) returns all drivers lowercased
    // 3) does not modify the original array
    result = collection.slice()
    return result.map(x => x.toLowerCase())

}


function nameToAttributes(collection){
    let arr = []
    // console.log(collection)
    // 4) uses the Array map method
    // 5) returns list of objects with appropriate first and last names
    let newArray  =  collection.map( x => x.split(' '))
    for (const element of newArray) {
        let newObj = {}
        newObj.firstName = element[0];
        newObj.lastName = element[1];
        // console.log(newObj)
        arr.push(newObj)
    }
    return arr
    
}


function attributesToPhrase(collection){
    // 6) uses the Array map method
    // 7) converts to list saying the name and where each individual is from
    return collection.map( element => `${element.name} is from ${element.hometown}`)
}
