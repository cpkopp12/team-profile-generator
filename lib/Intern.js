const Employee = require('./Employee.js');

function Intern(nameIn, idIn, emailIn, schoolIn) {
    this.name = nameIn;
    this.idNum = idIn;
    this.email = emailIn;
    this.school = schoolIn;
};

//inherit prototype methods from Employee
Intern.prototype = Object.create(Employee.prototype);
//Other methods
Intern.prototype.getInternAttributes = function() {
    return ['Intern', this.name, this.idNum, this.email, this.school];
}






module.exports = Intern;