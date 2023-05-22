console.log("Hello Functions!");

function actualMath (num0, num1) {
    console.log('in actualMath:', num0, num1);
    let answer = num0 * num1;
    return answer
} // end actualMath


function logger () {
    console.log('in logger');
} // end logger 


function mathExample (params) {
    console.log('in math example');
    let answer = 3 * 9;
    return answer;
} // end mathExample


function returner () {
    console.log('in returner');
    return true
} // end returner

logger();
returner();

console.log('running returner:', returner() )
console.log('running mathExample:', mathExample() )



console.log('running actualMath with 4 & 6:', actualMath( 4, 6 ) )
console.log('running actualMath with 6 & 45:', actualMath( 6, 45 ) )
console.log('running actualMath with .654 & 1.346:', actualMath( .654, 1.346 ) )
console.log('running actualMath with 2 & 432434:', actualMath( 2, 432434 ) )