// 1. 클래스 생성
class Person {
    constructor(name, age, point) { // name, age는 객체를 초기화 할 때 생성할 멤버 변수
        this.name = name; // property = parameter
        this.age = age;
        this.point = point;
    }
    showMe() { // method(operation, behavior이라고도 함)
        return 'Name: ' + this.name + ' Age: ' + this.age + ' Point: ' + this.point;
    }
}

// object creation
const person = new Person('Mike', 21, 15000)// 대소문자 구별됨. 객체 생성
person.age = 23; // property에 접근하여 값을 수정할 수 있다.
const data = person.showMe(); // 객체의 메소드를 호출한 것

const test = document.getElementById('test');
test.innerHTML = `<h2>${data}</h2>`;


// 클래스 상속(자식 클래스가 부모 클래스의 몯느 것을 물려받음. property, method 모두)
class Man extends Person { // Man --> Person 처럼 그림으로 표현함. 부모와 자식관계.sub class --> super class . "부모 + @"
    constructor(name, age, point, tel) {
        super(name, age, point); // super는 부모클래스의 생성자를 호출하는 것임. 처음에는 Man이 Person을 내포함. Person을 먼저 만들어주는 키워드가 super임
        this.tel = tel;
    }
    showMe() { // 같은 이름의 함수 생성시 오버라이딩 발생. "오버라이딩 : 부모에게 받은 메소드를 재정의하는 것.(그대로 쓰지 않고 내가 필요한 내용을 넣어서 다시 만듦)"
        return 'Name: ' + this.name + ' Age: ' + this.age + ' Point: ' + this.point + ' Tel: ' + this.tel;
    }
}

const man = new Man('Tom', 22, 5000, '223477');
const text2 = man.showMe();
test.innerHTML = `<h2>${text2}</h2>`;


// 리액트할때 알아야할 내용. Destructuring.
function myBook() {
    const arr = ['Java', 12000, 'Lemon Publisher'];
    const arr2 = [8.5, '2022/11/16'];
    return [...arr, ...arr2]; // ...은  배열을 연결해줌 ...arr은 배열의 전체를 가리키며 콤마로 이어주어서 연결된 배열을 나누어줌
}

// const title = arr[0];
// const price = arr[1];
// const pub = arr[2]; // 원래 이렇게 쓰는건데 Destructor쓰면 아래처럼 사용가능
// const [title, price, pub] = arr; // 위 세 줄과 같은 기능을 수행함. 이 기법을 Destructuring. 배열의 구조를 분해하는 것. 내가 원하는 위치로 한번에 받아내는 기능임.


// const [title, price, pub] = myBook(); // 배열 반환이 가능함

const [title, price, pub, rating, pubdate] = myBook();
test.innerHTML = `${title}, ${price}, ${pub}, ${rating}, ${pubdate}`; // 역 따옴표임.


