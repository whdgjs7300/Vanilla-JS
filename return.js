// Return
// 함수안에 코드의 결과를 나에게 전달하고 싶을 때(화면에 보여주고 싶을 때)
// Return을 한 후엔 뒤에 코드가 있더라도 함수 종료

const calculator = {
    plus : function(a, b) {
        return a+b;
    },
    minus : function(a, b) {
        return a-b;
    },
    times : function(a, b) {
        return a*b;
    },
    divide : function(a, b) {
        return a/b;
    },
    power : function(a, b) {
        return a**b;
    },
}

console.log(calculator.plus(2,7));

// return을 함으로써 함수를 호출하는 코드가 됨 (아래 예시)
const age = 96;
function claculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = claculateKrAge(age);
console.log(krAge);

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10);
const timeResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timeResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
