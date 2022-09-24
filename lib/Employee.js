function Employee() {};

Employee.prototype.formatCard = function(classAtts) {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-header">
        ${classAtts[1]} <br/>
        ${classAtts[0]}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
    </ul>
</div>
`;
};

module.exports = Employee;