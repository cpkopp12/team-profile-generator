const Intern = require('../lib/Intern.js');

//make the repeating test inputs global
const nameIn = 'Dave';
const idIn = 2;
const emailIn = 'dave@gmail.com';
const schoolIn = 'Oxford';

test('creates Intern object', () => {

    const intern = new Intern(nameIn, idIn, emailIn, schoolIn);

    expect(intern.name).toBe(nameIn);
    expect(intern.idNum).toEqual(idIn);
    expect(intern.email).toBe(emailIn);
    expect(intern.school).toBe(schoolIn);
});

test('get the attributes from Intern object', () => {

    const intern = new Intern(nameIn, idIn, emailIn, schoolIn);
    expect(intern.getInternAttributes()).toEqual(['Intern', nameIn, idIn, emailIn, schoolIn]);
});

test('test card html generator for Intern class', () => {
    const intern = new Intern(nameIn, idIn, emailIn, schoolIn);
    const inAtts = intern.getInternAttributes();
    for (let i = 0; i < inAtts.length; i++) {
        expect(intern.formatCard(inAtts)).toEqual(expect.stringContaining(inAtts[i].toString()));
    }
});