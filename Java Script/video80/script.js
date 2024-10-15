// // let obj={
// //     a:1,
// //     b:"Harry"
// // }

// // console.log(obj);


// // let animal={
// //     eats:true
// // }

// // let rabbit={
// //     jumps:true
// // }

// // rabbit.__proto__=animal;

// class Animal{
//     constructor(name){
//         this.name=name;
//         console.log("object is created");
//     }
//     eats(){
//         console.log("Eating");
//     }

//     jumps(){
//         console.log("Jumping");
//     }
// }

// class Lion extends Animal{
//     constructor(name){
//         super(name);
//         console.log("Lion object is created");
//     }
//     roars(){
//         console.log("Roaring");
//     }


// }

// let a= new Animal("Bunny");
// console.log(a)

// let l=new Lion("Lion");

class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  console.log(user.name); // John
  
//   user.name = "Harry" // Name is too short.
//   console.log(user.name)