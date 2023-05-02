let employee = {
    name: 'john'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let n = {...employee}
    n[ key] = value; 
    return n;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let n = {...employee}
    delete n[key];
    return n;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
