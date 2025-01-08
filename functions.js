const axios = require ("axios");

const functions = {
    add: (num1, num2) => num1+num2,
    shoppingList: [
        'diapers',
        'kleenex',   
        'trash bags',
        'paper towels',
        'beer',
        'tooth brush'
      ],
    createUser: ()=> {
        const user = {
            firstName: "German1",
            secondName: "Nemirovski"
            
        }
        return user;  
    },
    
    fetchUser : async ()=>{  

       let r =  await axios.get("https://jsonplaceholder.typicode.com/users/2");
       console.log("+++++++****+++++ : "+ r);

       return r.data; 
    }   

}

module.exports=functions;
