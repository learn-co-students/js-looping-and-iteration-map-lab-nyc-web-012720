function lowerCaseDrivers(drivers) {
    return drivers.map(function (driver) {
        return driver.toLowerCase();
    });
}

function nameToAttributes(drivers) {
    return drivers.map(function (driver) {
        let array = driver.split(" ");
        let object = {};
        object.firstName = array[0];
        object.lastName = array[1];
        return object;
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`;
    });
}