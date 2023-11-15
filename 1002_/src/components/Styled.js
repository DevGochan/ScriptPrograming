import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

//  Title 컴포넌트는 h1인데 스타일이 적용된 컴포넌트 의미
const Title = styled.h1`
  font-size: 2em;
  color: orange;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "yellow" : "orange")};
  color: ${(props) => (props.primary ? "balck" : "orange")};
  font-size: 1em;
  padding: 0.25em 1em;
  border: none;
`;

//  기존 컴포넌트를 확장해서 정의. 위에있는 Button을 가져오고 더 추가하는 것
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// 일반 리액트 컴포넌트
const SubTitle = ({ className }) => {
  return <h2 className={className}>This is a subtitle</h2>;
};
// 일반 리액트 컴포넌트를 가져와서 스타일 주기
const StyledSubTitle = styled(SubTitle)`
  color: violet;
  font-size: 1.5em;
  &:hover {
    color: orange;
  }
`;

const Styled = () => {
  return (
    <Wrapper>
      <Title>My Styled Component</Title>
      <Button primary="true">My Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <SubTitle />
      <StyledSubTitle />
    </Wrapper>
  );
};

export default Styled;
