import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
        width: 100vw;
        height: 100vh;
        background: 
         linear-gradient(
        rgba(255, 255, 255, 0.5), 
        rgba(255, 255, 255, 0.5)
         ),
        url("https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
`;
const Wrapper = styled.div`
        width: 25%;
        padding: 20px;
        background-color: white;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        ${mobile({width: "75%"})}
`;
const Title = styled.h1`
        font-size: 24px;
        font-weight: 300;
`;
const Form = styled.form`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
`;

const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 10px 0px;
        padding: 10px;
`;
const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: teal;
        color: white;
        cursor: pointer;
        margin-bottom: 10px;
`;

const Link = styled.a`
        margin: 5px 0px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
        color: blue;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD ?</Link>
                <Link>CREATE NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login