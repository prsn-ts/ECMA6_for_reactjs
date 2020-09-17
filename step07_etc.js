/* setter getter 메소드 */
 
class MemberDto{
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
    set num(num){
        this._num=num;
    }
    get num(){
        return this._num;
    }
}
 
let mem1 = new MemberDto();
//필드명에 값을 넣는 것 같지만 내부적으로 setter 메소드가 호출된다.
mem1.num=1;
mem1.name="김구라";
 
//필드명에 값을 가져오는 것 같지만 내부적으로 getter 메소드가 호출된다.
console.log(mem1.num);
console.log(mem1.name);
