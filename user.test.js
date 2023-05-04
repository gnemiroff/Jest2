const userM=require('./user'); 
const user1 = new userM ({userId:'88C', _name: 'Kevin', _age: '30'});

test('should output name and age given a generated Object', () => {
    let user1 = userM.Builder('88C').build(); //.withName('Kevin').withAge('30').build();
    const text = checkAndGenerate(user1._name, user1._age);
    expect(text).toBe('Kevin (30 years old)');
});
