import { Facebook, Instagram, MailOutline, MailOutlineOutlined, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
        display: flex;
        height: 50vh;
        width: 100%;
        ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
        margin: 20px 0px;
`;
const SocialContainer = styled.div`
        display: flex;
`;
const SocialIcon = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        background-color: #${props=>props.color} ;
        cursor: pointer;
`;

const Center = styled.div`
        flex: 1;
        padding: 30px;
        ${mobile({display: "none"})}
`;
const Title = styled.h3`
        margin-bottom: 30px;
`;
const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
`;
const ListItem = styled.li`
        width: 50%;
        margin-bottom: 10px;
`;

const Right = styled.div`
        flex: 1;
        padding: 20px;
        ${mobile({ backgroundColor: "#eee" })}
`;
const ContactItem = styled.div`
        margin-bottom: 20px;
        display: flex;
        align-items: center;
`;
const Payment = styled.img`
        height: 40px;
        width: 50%;
        object-fit: cover;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>OAS.</Logo>
            <Desc>There are many variations of passengers of lorem ipsum available. but
                  the majority have sufferred alteration in some form. by injected 
                  honor, or randomised words which don't even look slightely believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                 <ListItem>Home</ListItem>
                 <ListItem>Cart</ListItem>
                 <ListItem>Man Fshion</ListItem>
                 <ListItem>Woman Fashion</ListItem>
                 <ListItem>Accessories</ListItem>
                 <ListItem>My Account</ListItem>
                 <ListItem>Order Tracking</ListItem>
                 <ListItem>Wishlist</ListItem>
                 <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> 622 Dixie Path , Addis Ababa 102233</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> +2519 63 64 98 26</ContactItem>
            <ContactItem><MailOutlineOutlined style={{marginRight:"10px"}}/> contactOAS@gmail.com</ContactItem>
            <Payment src="https://combanketh.et/cbeapi/uploads/vlcsnap_2023_03_23_15h32m55s187_e1bf8a0478.png"/>
        </Right>
    </Container>
  )
}

export default Footer