import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Title() {
  return (
    <> 
      <h1 className = 'title'>Hello, React!!</h1>
      <h2>React Study</h2>
    </>
  );
}
const element = React.createElement('h1', {}, 'Hello, React!!');
const root = ReactDOM.createRoot(document.getElementById('root')); // 일반적으로 root라고 사용

 // html 표현. JSX기법 = JS + Xml 이라 함
root.render(
  <Title/>
);