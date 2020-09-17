//함수에 전달된 인자의 default 값을 지정할 수 있다.
function showInfo(num=0, name="이름", addr="주소"){
    console.log(num+"|"+name+"|"+addr);
}
 
showInfo();
showInfo(1);
showInfo(1, "김구라");
showInfo(1, "김구라", "노량진");
showInfo(null, null, null); //null을 전달하면 null 이라는 문자열을 전달하게된다.
showInfo(undefined, undefined, undefined); 
//undefined가 인자로 전달되는 것이 없다고 판단됨(함수 정의에 쓰인 기본 값(num=0, name="이름", addr="주소")을 사용).
 
//showInfo(name="원숭이", num=0, addr="상도동");
//원하는 곳에 원하는 값을 넣을 수 없다, 함수 호출할 때의 순서대로 들어가기만 한다.
 
//가변인자 (편한 파라미터 Rest Parameter)
function test(...args){
    //args 는 배열
    console.log(args);
}
 
test(); //전달 안해도 되고
test(10); //한개 해도 되고
test(10,20); //여러개 해도 된다.

//Lambda(람다) 함수
let sum=(a,b)=>a+b; //함수를 간단하게 표현이 가능
console.log("10+20="+sum(10,20));
 
//arrow 함수 (화살표 모양으로 만든 함수, Lambda 함수 포함)
 
//일반 함수 작성법
let getArea=function(width, height){
    let result=width*height;
    return result;
}
 
//arrow 함수 작성법
let getArea2=(width, height)=>{
    let result=width*height;
    return result;
};
 
//arrow 함수 작성법2({} 를 생략하면 return 예약어를 생략할 수 있다.)
let getArea3=(width, height)=>width*height; //width*height -> 계산된 값이 리턴된다.
 
console.log(getArea(10, 20));
console.log(getArea2(10, 20));
console.log(getArea3(10, 20));
 
let names=["김구라", "해골", "원숭이"];
//배열의 map() 함수를 호출하면서 arrow 함수 전달하기
names.map((item, index)=>{ //배열의 map 함수는 배열의 사이즈만큼 알아서 반복 호출된다.
    console.log(item+"|"+index);
});
