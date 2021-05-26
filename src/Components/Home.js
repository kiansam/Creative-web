import styled from "styled-components";

const Home = (props) => {
  return (
    <Container>
      <Content>
        <Wrap>
          <h1> Welcome </h1>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const Wrap = styled.div`
  h1 {
    font-weight: bold;
    font-size: 50px;
  }
`;

export default Home;
