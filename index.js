const employee = {
name: 'Joe',
address: '1229 East 7th street',
 }// Write your solution in this file!
 
 function updateEmployeeWithKeyAndValue(Obj, key, value) {
    const newObj = {...Obj}
 newObj[key] = value;  
 return newObj;
}
const employees = updateEmployeeWithKeyAndValue(employee ,'name' ,'Sam')

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'address', '12 Broadway' )
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam' )
function  deleteFromEmployeeByKey(employee, key){ 
    const employee3 = {...employee}
    delete employee3[key];
return employee3;
 }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;
} 