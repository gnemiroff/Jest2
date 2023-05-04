class User {
    constructor(build) {
        if (arguments.length === 1 && this.validateBuild(build)) {

           let userId = build.userId;
           let name = build.name;
           let age = build.age;
        
            Object.defineProperties(this, {
                        '_userId': {
                            value: userId,  
                            writable: false
                        },
                        '_name': {
                            value: name, 
                            writable: false
                        },
                        '_age': {
                            value: age,
                            writable: false
                        }
            });   
        }
    }
    
    validateBuild(build) {
         return (String(build.constructor) === String(User.Builder)); 
    }
    
    static Builder() {
        class Builder {
            constructor(userId) {
                this.userId = userId;
                return this;
            }
            
            withName(name) {
                this.name = name;
                return this;
            } 
            
            withAge(age) {
                this.age = age;
                return this;
            }
            build() {
                return new User(this);
            }
        }
        return Builder;
    }
}

module.exports=User;
