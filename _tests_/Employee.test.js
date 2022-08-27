// Uses Employee constructor
const Employee = require('../lib/Employee');
// Creates employee object
const employee = new Employee('Leo', '19', 'leodalion.m@hotmail.com');

test('test if we can get constructor values for the employee object', () => {
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toBe('19');
    expect(employee.email).toEqual(expect.any(String));
});

// Gets name from getName() method
test('test if we can get name from the getName() method', () => {
    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets id from getId() method
test('test if we can get id from the getId() method', () => {
    expect(employee.getId()).toBe('19');
});

// Gets email from getEmail() method
test('test if we can get email from the getEmail() method', () => {
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets employee type from getRole() method
test('test if we can get role from the getRole() method', () => {
    expect(employee.getRole()).toEqual('Employee');
});