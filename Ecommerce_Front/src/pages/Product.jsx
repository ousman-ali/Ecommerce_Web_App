import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
        padding: 50px;
        display: flex;
         ${mobile({
                padding: "10px",
                flexDirection: "column"
        })}
`;

const ImageContainer = styled.div`
        flex: 1;
`;
const Image = styled.img`
        width: 100%;
        height: 90vh;
        object-fit: cover;
        ${mobile({height: "40vh"})}
`;

const InfoContainer = styled.div`
        flex: 1;
        padding: 0px 50px;
        ${mobile({padding: "10px"})}
`;
const Title= styled.h1`
        font-weight: 200;
`;
const Desc = styled.p`
        margin: 20px 0px;
`;
const Price = styled.span`
        font-weight: 200;
        font-size: 40px;
`;

const FilterContainer = styled.div`
        width: 50%;
        margin: 30px 0px;
        display: flex;
        justify-content: space-between;
        ${mobile({width: "100%"})}
`;
const Filter = styled.div`
        display: flex;
        align-items: center;

`;
const FilterTitle = styled.span`
        font-size: 20px;
        font-weight: 200;
`;
const FilterColor = styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${props=>props.color};
        margin: 0px 5px;
        cursor: pointer;
`;
const FilterSize = styled.select`
        margin-left: 5px;
        padding: 5px;
`;
const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${mobile({width: "100%"})}
`;
const AmountContainer = styled.div`
        display: flex;
        align-items: center;
        font-weight: 700;
`;
const Amount = styled.span`
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid teal;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 5px;
`;
const Button = styled.button`
        padding: 15px;
        border: 1.5px solid teal;
        background-color: white;
        cursor: pointer;
        font-weight: 500;

        &:hover {
             background-color: #f8f4f4;
        }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Ousman Ali</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Libero architecto, quisquam sapiente vitae autem assumenda 
                        consectetur aliquid exercitationem omnis dolore aliquam rerum 
                        dolor illum molestias eligendi odio cumque! Quaerat, quod?
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color= "black"/>
                            <FilterColor color= "darkblue"/>
                            <FilterColor color= "gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product