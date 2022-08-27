// Uses Intern constructor
const Intern = require('../lib/Intern');
// Creates intern object
const intern = new Intern('Leo', '19', 'leodalion.m@hotmail.com', 'UofU');

test('test if we can get constructor values for the intern object', () => {
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toBe('19');
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

// Gets name from getName() method
test('test if we can get name from the getName() method', () => {
    expect(intern.getName()).toEqual(expect.any(String));
});

// Gets id from getId() method
test('test if we can get id from the getId() method', () => {
    expect(intern.getId()).toBe('19');
});

// Gets email from the getEmail() method
test('test if we can get email from the getEmail() method', () => {
    expect(intern.getEmail()).toEqual(expect.any(String));
});

// Gets school from the getSchool() method
test('test if we can get school from the getSchool() method', () => {
    expect(intern.getSchool()).toEqual(expect.any(String));
});

// Gets employee type from the getRole() method
test('test if we can get role from the getRole() method', () => {
    expect(intern.getRole()).toEqual('Intern');
});