function findMatching(drivers, string ){
    const filterDriver = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase() )
    return filterDriver
}
    
findMatching(drivers, 'Bobby');
findMatching(drivers, 'Sammy');
findMatching(drivers, 'Susan');




function fuzzyMatch(drivers, string){
    const filterDriver2 = drivers.filter(driver => driver.slice(0,2) === string);
    return filterDriver2
    
}
fuzzyMatch(drivers, 'Sa');
fuzzyMatch(drivers, 'y');
fuzzyMatch(drivers, 'mm');


function matchName(drivers, string){
    const filterDriver3 = drivers.filter(driver => driver.name === string);
    return filterDriver3
}

matchName(drivers, 'Bobby');