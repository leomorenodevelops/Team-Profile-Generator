// Uses Engineer constructor
const Engineer = require('../lib/Engineer');
// Creates engineer object
const engineer = new Engineer('Leo', '19', 'leodalion.m@hotmail.com', 'leomorenodevelops');

test('test if we can get constructor values for the engineer object', () => {
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toBe('19');
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

// Gets name from getName() method
test('test if we can get name from the getName() method', () => {
    expect(engineer.getName()).toEqual(expect.any(String));
});

// Gets id from getId() method
test('test if we can get id from the getId() method', () => {
    expect(engineer.getId()).toBe('19');
});

// Gets email from getEmail() method
test('test if we can get email from the getEmail() method', () => {
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

// Gets github from getGithub() method
test('test if we can get github from the getGithub() method', () => {
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

// Gets employee type from the getRole() method
test('test if we can get role from the getRole() method', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});