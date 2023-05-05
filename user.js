

//const UserBuilder = require('./userBuilder'); 
//import { UserBuilder } from './userBuilder.js';

class User {
   constructor(build) {
        if (arguments.length === 1 ) {
            Object.defineProperties(this, {
      
                        '_userId': {
                            value: build.userId,  
                            writable: false
                        },
                        '_name': {
                            value: build.name, 
                            writable: false
                        },
                        '_age': {
                            value: build.age,
                            writable: false
                        }
            });   
        }
    }
    
    

    static Builder (userId) {
        let ub = new UserBuilder (userId);
        return ub;

    }
}

class UserBuilder {
    constructor(userId) {
        this.userId = userId;
    }
    
    withName (name) {
        this.name = name;
        return this;
    } 
    
    withAge(age) {
        this.age = age;
        return this;
    }
    
    build() {
        let u =  new User (this); 
        return u;
    }
}


module.exports = UserBuilder; 
module.exports = User;
