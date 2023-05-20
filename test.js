//closure example
function outerFunction(){
    var myname="snehal";
    function innerFunction(){
        console.log(myname);
    }
    return innerFunction();
}
var myFunc=outerFunction;
console.log(myFunc());