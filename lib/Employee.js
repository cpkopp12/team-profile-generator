function Employee() {};

Employee.prototype.formatCard = function(classAtts) {
    
    var str1 = '';
    var str2 = '';
    var str3 = '';
    if (classAtts[0] == 'Engineer') {
        str1 = 'GitHub user name: ';
        str2 = `<a href='${classAtts[4]}'>`;
        str3 = '</a>';
    } else if (classAtts[0] == 'Intern') {
        str1 = 'School: ';
    } else {
        str1 = 'Office Number: ';
    }
        
    return `
<div class="card">
    <div class="card-header bg-primary text-white">
        ${classAtts[1]} <br/>
        ${classAtts[0]}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${classAtts[2]}</li>
        <li class="list-group-item">Email: <a href='mailto:${classAtts[3]}'>${classAtts[3]}</a></li>
        <li class="list-group-item">${str1}${str2}${classAtts[4]}${str3}</li>
    </ul>
</div>
`;
};

export default Employee;