
const Engineer = require("../lib/Engineer");

//make the repeating test inputs global
const nameIn = 'Dave';
const idIn = 2;
const emailIn = 'dave@gmail.com';
const userIn = 'dave123';

test('creates Engineer object', () => {

    const engineer = new Engineer(nameIn, idIn, emailIn, userIn);

    expect(engineer.name).toBe(nameIn);
    expect(engineer.idNum).toEqual(idIn);
    expect(engineer.email).toBe(emailIn);
    expect(engineer.userName).toBe(userIn);
});

test('get the attributes from Engineer object', () => {

    const engineer = new Engineer(nameIn, idIn, emailIn, userIn);
    expect(engineer.getEngineerAttributes()).toEqual(['Engineer', nameIn, idIn, emailIn, userIn]);
});

test('test card html generator', () => {
    const engineer = new Engineer(nameIn, idIn, emailIn, userIn);
    const enAtts = engineer.getEngineerAttributes();
    for (let i = 0; i < enAtts.length; i++) {
        expect(engineer.formatCard(enAtts)).toEqual(expect.stringContaining(enAtts[i].toString()));
    }
});