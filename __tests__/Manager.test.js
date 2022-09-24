const Manager = require('../lib/Manager.js');

//make the repeating test inputs global
const nameIn = 'Dave';
const idIn = 2;
const emailIn = 'dave@gmail.com';
const officeIn = '24a';

test('creates Manager object', () => {

    const manager = new Manager(nameIn, idIn, emailIn, officeIn);

    expect(manager.name).toBe(nameIn);
    expect(manager.idNum).toEqual(idIn);
    expect(manager.email).toBe(emailIn);
    expect(manager.office).toBe(officeIn);
});

test('get the attributes from Manager object', () => {

    const manager = new Manager(nameIn, idIn, emailIn, officeIn);
    expect(manager.getManagerAttributes()).toEqual(['Manager', nameIn, idIn, emailIn, officeIn]);
});

test('test card html generator for Manager class', () => {
    const manager = new Manager(nameIn, idIn, emailIn, officeIn);
    const manAtts = manager.getManagerAttributes();
    for (let i = 0; i < manAtts.length; i++) {
        expect(manager.formatCard(manAtts)).toEqual(expect.stringContaining(manAtts[i].toString()));
    }
});
