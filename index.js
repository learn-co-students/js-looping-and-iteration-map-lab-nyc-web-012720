// Code your solution in this file.
function lowerCaseDrivers(array){
    return array.map(function(name){
        return name.toLowerCase();
    });
}

function nameToAttributes(list){
    return list.map(function(name){
        const first = name.split(' ')[0];
        const last = name.split(' ')[1];
        return {firstName: first, lastName: last};
    })
}

function attributesToPhrase(drivers){
    return drivers.map(function(driver){
        // const name = driver.name;
        // const hometown = driver.hometown;
        return(`${driver.name} is from ${driver.hometown}`);
    });
}

