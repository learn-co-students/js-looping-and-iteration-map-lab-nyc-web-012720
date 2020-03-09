// Code your solution in this file.
function lowerCaseDrivers(drivers){
return drivers.map(function(driver) {return driver.toLowerCase()})
}

function nameToAttributes(drivers){
    return drivers.map(function(driver) {
        let temp = driver.split(" ")
        return {firstName: temp[0], lastName: temp[1]}
    })
}

function attributesToPhrase(drivers){
    return drivers.map(function(driver) {
        return  `${driver.name} is from ${driver.hometown}`
    })
}