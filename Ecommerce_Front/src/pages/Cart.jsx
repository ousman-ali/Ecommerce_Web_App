import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
        padding: 20px;
        ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
        font-weight: 300;
        text-align: center;
`;

const Top = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
`;
const TopButton = styled.button`
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
        border: ${props=>props.type === "filled" && "none" };
        background-color: ${props=>props.type === "filled" ? "black" : "transparent" };
        color: ${props=>props.type === "filled" && "white" };
`;
const TopTexts = styled.div`
        ${mobile({display: "none"})}
`;
const TopText = styled.span`
        text-decoration: underline;
        cursor: pointer;
        margin: 0px 10px;
`; 

const Bottom = styled.div`
        display: flex;
        justify-content: space-between;
        ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
        flex: 3;
`;

const Product = styled.div`
        display: flex;
        justify-content: space-between;
        ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
        flex: 2;
        display: flex;
        height: 30vh;
`;
const Image = styled.img`
        width: 200px;
        ${mobile({width: "155px"})}
`;
const Details = styled.div`
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
`;
const ProductName = styled.span`
        
`;
const ProductId = styled.span`
        
`;
const ProductColor = styled.div`
        width: 20px;
        height: 20PX;
        border-radius: 50%;
        background-color: ${props=>props.color};
`;
const ProductSize = styled.span`
        
`;
const PriceDetail = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`;
const ProductAmountContainer = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 20px;
`;
const ProductAmount = styled.div`
        font-size: 24px;
        margin: 5px;
        ${mobile({margin: "5px 15px"})}
`;
const ProductPrice = styled.div`
        font-size: 30px;
        font-weight: 200;
        ${mobile({marginBottom: "20px"})}
`;
const Hr = styled.hr`
        border: none;
        background-color: #eee;
        height: 1px;
`;

const Summary = styled.div`
        flex: 1;
        border: 1px solid lightgrey;
        border-radius: 5px;
        height: 57vh;
        padding: 20px;
`;
const SummaryTitle = styled.h1`
        font-weight: 200;
`;

const SummaryItem = styled.div`
        margin: 30px 0px;
        display: flex;
        justify-content: space-between;
        font-weight: ${props=>props.type === "total" && "500"};
        font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryText = styled.span``;

const SummaryPrice = styled.span``;

const Button = styled.button`
        width: 100%;
        padding: 10px;
        background-color: black;
        color: white;
        font-weight: 600;
`;

const Cart = () => {

    const cart = useSelector(state=>state.cart);

  return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled" >CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                       { cart.products.map((product)=>( 
                        <Product>
                            <ProductDetail>
                                <Image src={product.img} />
                                <Details>
                                    <ProductName><b>Product:</b>{product.title}</ProductName>
                                    <ProductId><b>ID:</b>{product._id}</ProductId>
                                    <ProductColor color={product.color}/>
                                    <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                    ))}
                    <Hr/>                       
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryText>subtotal</SummaryText>
                            <SummaryPrice>$ {cart.total}</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Estimated Shipping</SummaryText>
                            <SummaryPrice>$ 4.5</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Shipping Discount</SummaryText>
                            <SummaryPrice>$ -4.5</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryText >Total</SummaryText>
                            <SummaryPrice>$ {cart.total}</SummaryPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart