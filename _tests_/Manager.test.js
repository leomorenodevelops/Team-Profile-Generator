// Uses Manager constructor
const Manager = require('../lib/Manager');
// Creates manager object
const manager = new Manager('Leo', '19', 'leodalion.m@hotmail.com', '01');

test('test if we can get constructor values for the manager object', () => {
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toBe('19');
    expect(manager.email).toEqual(expect.any(String));
});

// Gets name from getName() method
test('test if we can get name from the getName() method', () => {
    expect(manager.getName()).toEqual(expect.any(String));
});

// Gets id from getId() method
test('test if we can get id from the getId() method', () => {
    expect(manager.getId()).toBe('19');
});

// Get email from getEmail() method
test('test if we can get email from the getEmail() method', () => {
    expect(manager.getEmail()).toEqual(expect.any(String));
});

// Gets office number from getOfficeNumber() method
test('test if we can get office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('01');
});

// Gets employee type from getRole() method
test('test if we can get role from the getRole() method', () => {
    expect(manager.getRole()).toEqual('Manager');
});