console.log("This is the map lab")

const drivers = [];

function lowerCaseDrivers(drivers) {
    return drivers.map ( function(driverName) {
        return driverName.toLowerCase();
    })
};

function nameToAttributes(drivers) {
    return drivers.map (function(driverName){
        let fullName = driverName.split(" ");
        let name = {};
        name["firstName"] = fullName[0];
        name["lastName"] = fullName[1];        
        return name;
    })
};

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`;
    })
};