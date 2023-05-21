//closure example
// function outerFunction(){
//     var myname="snehal";
//     function innerFunction(){
//         console.log(myname);
//     }
//     return innerFunction();
// }
// var myFunc=outerFunction;
// console.log(myFunc());

//hoisting beheaviour
// a=10;                         //1.can be declared and initialise seperately
//  a=14;                         // can be redeclared with same variable name
//  var a=29;                     //2.hoisting applicable
// console.log(a);               //3.we can reassign the value
// var a;


// let a;                          //1.can be declared and assign seperately
// a=20;                           //cannot be redeclared with the same variable name
// a=30;                        //2.Hoisting is not applicable
// // let a=40;                       //we can reassign value but cannot redeclared
// console.log(a)


// const a;                      //1.we have to dlare and assign the value to the variable at the same time
const a=50;