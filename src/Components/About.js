import styled from "styled-components";

const About = (props) => {
  return (
    <Container>
      <h1> Hi There ! 👋 </h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export default About;
