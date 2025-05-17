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
        width: 40%;
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
        flex-wrap: wrap;
`;

const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 20px 10px 0px 0px;
        padding: 10px;
`;
const Agreement = styled.span`
        font-size: 12px;
        margin: 20px 0px;
`;
const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: teal;
        color: white;
        cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE ACCOUNT</Title>
            <Form>
                <Input placeholder="first name" />
                <Input placeholder="last name" />
                <Input placeholder="email" />
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    By creating an account, i consent to the processing of my personal
                    data in according with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register