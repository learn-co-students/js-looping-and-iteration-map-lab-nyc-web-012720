// Code your solution in this file.

function lowerCaseDrivers(array) {
    return array.map(function(i) {
        return i.toLowerCase()
    })

}

function nameToAttributes(array) {
    return array.map(function(i) {
        const first = i.split(' ')[0]
        const last = i.split(' ')[1]
        return {firstName: first, lastName: last}
    })

}

function attributesToPhrase(array) {
    return array.map(function(person) {
        return `${person.name} is from ${person.hometown}`
    })


}