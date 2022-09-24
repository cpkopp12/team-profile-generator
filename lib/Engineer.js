const Employee = require('./Employee.js');

function Engineer(nameIn, idIn, emailIn, userIn) {
    this.name = nameIn;
    this.idNum = idIn;
    this.email = emailIn;
    this.userName = userIn;
};

//inherit prototype methods from Employee
Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype.getEngineerAttributes = function() {
    return ['Engineer', this.name, this.idNum, this.email, this.userName];
}



module.exports = Engineer;