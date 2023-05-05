const user = require('./user'); 

test('should output name and age given a generated Object', () => {
    let user22 = user.Builder('88C').withName('Kevin').withAge(30).build();
    expect(user22._age).toBe(30);
});
