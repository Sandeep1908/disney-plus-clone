import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <LogoOne src="../images/cta-logo-one.svg" />
        <Button>
            Get All Here
        </Button>
        <Discription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dignissimos repellendus possimus, accusamus tempora asperiores impedit voluptas non aperiam commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, molestias.
        </Discription>
        <LogoTwo src="../images/cta-logo-two.png"/>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  padding: 0 20px;
  position: relative;
  display:flex;
  justify-content:center;
  align-items:top;
  max-width:100%;
  &:before {
    content: "";
    background-image: url("../images/login-background.jpg");
    background-position: top;
    background-repeat: no-repeat;
    background-cover: cover;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
const Content = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:top;
  width:50%;
`;

const LogoOne=styled.img`
  margin-bottom:10px;
  
`
const Button=styled.a`
  background-color:blue;
  padding:15px 20px;
  text-align:center;
  border-radius:10px;
  font-size:16px;
  font-weight:bold;
  letter-spacing:5px;
  cursor:pointer;
  margin-bottom:10px;

`
const Discription=styled.p`
  font-size:14px;
  text-align:center;
  margin-bottom:10px;
  color:rgb(249,249,249);
  letter-spacing:1px;

`
const LogoTwo=styled(LogoOne)`
  height:50px;
`