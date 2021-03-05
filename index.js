// Write your solution in this file!
let employee ={ name: 'Pieter', streetAddress: '50 Saint jonhns pl'};

function updateEmployeeWithKeyAndValue(employee,key,value){

    let newObject = {...employee};
    newObject[key]=value;
    

    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value){

    employee[key]=value;
    return employee;
}


function deleteFromEmployeeByKey(employee,key){

    let newObject = {...employee};
    delete newObject[key];
    return newObject;
}


function destructivelyDeleteFromEmployeeByKey(employee,key){

    delete employee[key];
    return employee;
}