// numbers라는 상태변수 배열 만들기
// add버튼 누르면 값을 numbers에 추가시키기
// numbers에 추가된 값을 출력되게끔 만들기
// 버튼에 이벤트 handleButton
import { useState, useRef, useEffect } from "react";

const MyNumber = (props) => {
  const [numbers, setNumbers] = useState([]); // create empty array
  //   const [num, setNum] = useState("");
  // Ref 생성
  const numRef = useRef(null);

  // useEffect
  useEffect(()=>{ // 재렌더링 될때마다 알아서 실행됨. dependency로 조절 가능
    document.title = 'My Numbers';
    console.log('Title is changed...');
  }, [numbers]); // , []는 dependency. 이걸 활용해서 실행 조건과 횟수를 제어 가능


  useEffect(()=>{
    const element = document.getElementById('mynum');
    element.innerText = 'Effected Numbers';
  }, []);

  const handleButton = (e) => {
    const num2 = numRef.current.value;
    // setNumbers(numbers.concat(parseInt(num2))); // 방법1
    setNumbers([...numbers, parseInt(num2)]); // 방법2
    numRef.current.value = "";
    numRef.current.focus();
  };

  //   const handleChange = (e) => {
  //     setNum(e.target.value);
  //   };

  let total = 0;
  if (numbers.length > 0) {
    total = numbers.reduce((a, b) => a + b); // 누적하는 기능이 이루어짐. reduce는 원소값을 다 계산해서 최종값을 만들어주는 기능
    // a에 누적. b에 원소가 들어옴. 그 값들을 누적함
  }

  return (
    <>
      <h2 id = "mynum">My Numbers</h2>
      {/* <input type="text" name="number" onChange={handleChange} ref={numRef}/>  */}
      <input type="text" name="number" ref={numRef} />
      {/* ref={numRef}구문으로 인해 numRef가 input박스를 가리킨 */}
      <button onClick={handleButton}>Add Number</button>
      <h3>{numbers.toString()}</h3>
      <h3>Total : {total}</h3>
    </>
  );
};

export default MyNumber;
