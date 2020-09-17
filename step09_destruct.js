let data=["apple", "orange", "banana", "kiwi"];
 
//apple, orange는 제외하고 banana, kiwi만 순서대로 fruit1과 fruit2 변수에 담는다.
let [,,fruit1, fruit2]=data;
 
console.log(fruit1);
console.log(fruit2);
 
let mem = {num:1, name:"김구라", addr:"노량진"};
 
//mem 오브젝트에 있는 name 값과 addr 값을 가져와서
let {name, addr} = mem;
 
//name과 addr의 값을 출력한다.
console.log(name);
console.log(addr);
