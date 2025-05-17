import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
      height: 60vh;
      background-color: #fcf5f5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

`;
const Title = styled.h1`
      font-size: 70px;
      margin-bottom: 20px;
`;
const Desc = styled.p`
      font-size: 24px;
      font-weight; 300;
      margin-bottom: 20px;
      ${mobile({textAlign: "center"})}
`;
const InputContainer = styled.div`
      width: 50%;
      height: 40px;
      background-color: white;
      display: flex;
      justify-content: space-between;
      border: 1px solid blacklightgrey;
      ${mobile({width: "80%"})}
`;
const Input = styled.input`
      border: none;
      flex: 8;
      padding-left: 20px;
`;
const Button = styled.button`
      flex: 1;
      border: none;
      background-color: teal;
      color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='your email'/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter