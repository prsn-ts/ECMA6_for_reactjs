// 배열의 다양한 기능
let nums=[1,2,3,4,5];
 
//nums 배열을 처음부터 탐색하면서 가장 첫번째 짝수를 찾아서 리턴
let result=nums.find((x)=>{ //find 함수는 배열 사이즈만큼 반복해서 무언가를 찾는 함수이다.
    console.log(x);
    return x%2 == 0; //배열의 사이즈만큼 반복하면서 2로 나누어 떨어지는 숫자가 있으면 그것을 반환하는 구문.
});
 
let result2=nums.find((x)=>x%2 == 0);
 
console.log("result:"+result);
console.log("result2:"+result2);
 
//nums 배열을 처음부터 탐색하면서 짝수만 찾아내서 배열(result3)에 담아 리턴
let result3 = nums.filter((x)=>x%2==0);
console.log(result3);
 
// nums 배열에 새로운 아이템을 추가해서 새로운 배열의 참조값 리턴
let result4=nums.concat(6);
let result5=nums.concat([6,7,8,9,10]);
console.log(result4);
console.log(result5);
 
let names=["김구라"];
let names2=["김구라"];
names.push("원숭이");
 
// ※ 주의 ※ 기존 배열에 아이템(데이터)를 추가하는 것이 아닌 새로운 배열에 데이터를 추가하여 참조값을 리턴한다.
let result6 = names2.concat("원숭이");
 
console.log(names);
console.log(names2);
console.log(result6);
