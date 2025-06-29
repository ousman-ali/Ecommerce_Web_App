import React from 'react'
import styled from 'styled-components'
import { Search } from "@mui/icons-material"
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive.js';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    
    ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
`;
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`;

const Center = styled.div`
    flex:1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize: "24px"})}
`;

const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex: 2})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity);

  return (
    <Container>
        <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color:"grey", fontSize:16} }/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>OAS.</Logo>
                </Center>
             <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>  
                <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Link>
             </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar