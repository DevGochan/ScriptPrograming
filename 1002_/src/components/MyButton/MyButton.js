// 컴포넌트 폴더와 사스폴더를 따로 구성해도 된다. 지금은 한 폴더에 동시 넣은거임
import "./MyButton.scss";

const MyButton = ({ children, size, color }) => {
  return (
    <div>
      <button className={`btn ${size} ${color}`}>{children}</button>
    </div>
  );
};

// 사이즈 생략시 기본값으로 medium 사용
MyButton.defaultProps = {
    size: 'medium',
    color: 'red'
}

export default MyButton;
