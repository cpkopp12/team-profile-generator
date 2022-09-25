function Employee() {};

Employee.prototype.formatCard = function(classAtts) {
    
    var str1 = '';
    if (classAtts[0] == 'Engineer') {
        str1 = 'GitHub user name: '
    } else if (classAtts[0] == 'Intern') {
        str1 = 'School: '
    } else {
        str1 = 'Office Number: '
    }
        
    return `
<div class="card" style="width: 18rem;">
    <div class="card-header">
        ${classAtts[1]} <br/>
        ${classAtts[0]}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${classAtts[2]}</li>
        <li class="list-group-item">Email: ${classAtts[3]}/li>
        <li class="list-group-item">${str1}${classAtts[4]}</li>
    </ul>
</div>
`;
};

export default Employee;