// // 클래스 생성
// class Menu {
//     constructor(menuname, price) {
//         this.menuname = menuname;
//         this.price = price;
//     }

//     clac(qty) {
//         return sumprice =
//     }
// }

// // 객체 생성
// const pizza = new Menu('Pizza', 19500);
// const pasta = new Menu('Pasta', 17000);
// const steak = new Menu('Steak', 34500);
// const salad = new Menu('Salad', 15500);

// const sum = calc

// 정답
// Menu class 생성
class Menu {
  constructor(name, price) {
    this.menuname = name;
    this.price = price; // 두개의 property 생성
  }
  showMe() {
    return `<li>${this.menuname} -- ${this.price}</li>`;
  }
}

const menus = [];
menus[0] = new Menu("Pizza", 19500);
menus.push(new Menu("Pasta", 15000)); // push는 배열에 하나 추가해주는 것. append와 비슷한듯
menus[menus.length] = new Menu("Steak", 33500); // length는 배열의 길이를 반환해줌. 이것을 인덱스로 사용하면 결과적으로 마지막 자리를 사용하는 것
menus.push(new Menu("Salad", 15500));

let output = "<ul>";
for (const m of menus) output += m.showMe();
output += "</ul>";

test.innerHTML = output;

const order = [
  ["Steak", 3],
  ["Pasta", 2],
  ["Salad", 2],
]; // 2차원 배열이 됨
let amount = 0;
for (const i in order) {
  // 주문한 음식의 수만큼 반복처리
  for (const m of menus)
    if (m.menuname == order[i][0]) amount += m.price * order[i][1];
}

output += `<h3>Total amout: ${amount}</h3>`;
test.innerHTML = output;

// 클래스 정의, 오브젝트 생성, 반복처리하며 원하는 아웃풋 얻기, destructor. 다음시간은 리액트
