/**
 * 한줄 요약 : 값 변경이 필요한 변수만 let 쓰고 var 는 사용하지 마라
 */


/*값의 변경이 있을 때만 let  쓰고 디폴트로 const 쓰는 편이 좋음*/
const a = 5;

//for creation
let b = 5; 
//값 수정이 가능
b = "abcd";


/*어디서든 업데이트 될 수 있음*/
var c = 5;

/**
 * object 만들기 : 배열과 차이점을 생각하고 사용하기
 * 힘수도 객체로 넣어보기
 */

const player = {
    name: "jiwon",
    sayHi : function (otherPersonName) {
        console.log("hi " + otherPersonName);
    }
};

console.log(player.name);
console.log(player["name"]);
player.sayHi("renjun");

player.lastName = "park";

/**
 * 함수 만들기 : 코드를 캡슐화 하여 여러번 실행하기 용이함 (이걸 내가 왜 쓰고 있지?)
 */

function sayHello(name){
    console.log("Hello my name is " + name);
}

sayHello(player.name);


// 요즘은 안 쓰는 프롬프트 > 브라우저 멈춤
// type casting : string -> Integer
const age = parseInt(prompt("How old are you?"));

//console.log(isNaN(age));

if(isNaN(age)) {
    alert("Please write a number!");
} else if (age < 18 && age >= 50) {
    alert("You are too young");
} else {
    alert("Thanks");
}

