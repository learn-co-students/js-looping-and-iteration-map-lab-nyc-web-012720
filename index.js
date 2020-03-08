// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
    return drivers.map(function (driver) {
        let driverName = driver.split(" ")
        return {firstName: driverName[0],lastName:driverName[1]}
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
}
