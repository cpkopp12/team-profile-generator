//import Employee from './Employee.js';
const Employee = require('./Employee.js');

function Manager(nameIn, idIn, emailIn, officeIn) {
    this.name = nameIn;
    this.idNum = parseInt(idIn);
    this.email = emailIn;
    this.office = officeIn;
};

//inherit prototype methods from Employee
Manager.prototype = Object.create(Employee.prototype);
//other Methods 
Manager.prototype.getManagerAttributes = function() {
    return ['Manager', this.name, this.idNum, this.email, this.office];
}; 


module.exports = Manager;