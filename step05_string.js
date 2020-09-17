// 문자열에 추가된 다양한 기능
let tag="<ul>\r"
    +"<li>하나</li>\r"
    +"<li>두울</li>\r"
    +"</ul>";
// backtick ` 을 활용한 문자열 만들기(개행기호(\r), 와 탭 기호(\t)가 알아서 들어간다)
let tag2=`<ul>
    <li>하나</li>
    <li>두울</li>
    </ul>`;
 
let str=`
    문자열을
    마음대로
    작성해요~
`;
const num=1;
const name="김구라";
console.log("번호:"+num+" 이름:"+name);
// back tick 블럭에서 ${}안에는 바깥영역에 있는 변수나 함수를 참조해서
// 참조된 내용이나 함수가 리턴한 내용을 해당 위치에 출력 할 수 있다.
console.log(`번호:${num} 이름:${name}`); //${}안에는 자바스크립트의 변수 참조, 함수가 리턴한 내용을 할 수 있다.
 
let greet=()=>{
    return "안녕하세요";
}
console.log(` 오늘의 인사: ${greet()}`); //함수 호출되고 함수가 리턴한 값을 ${} 위치에 표시할 수 있다.