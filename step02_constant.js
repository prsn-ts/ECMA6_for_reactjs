/* 상수 만들기 (값이 할당되면 변경 불가) */
let pi=3.14;
const PI=3.14;
 
pi=3.14159;
console.log('pi:'+pi);
 
//PI=3.14159; //값 변경 불가
console.log('PI:'+PI);
 
let nums=[10,20,30,40,50];
 
nums.push(60);
 
//데이터 추가(가능)
nums.push(60);
//데이터 삭제(가능)
nums.splice(0,1);
//nums는 참조값을 가지고 있는 배열 형태이므로 안에 있는 값은 참조값을 바꾸는 것이 아니기 때문에 데이터를 추가 및 삭제는 가능하다.
 
console.log(nums);
 
//object 에 저장된 내용 수정가능
const mem={num:1, name:"김구라"};
 
mem.num=2;
mem.name="눈표범";
 
console.log(mem);
