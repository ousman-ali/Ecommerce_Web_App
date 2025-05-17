import React from 'react'
import { styled } from "styled-components"
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
        margin: 20px;
`;
const FilterContainer = styled.div`
        display: flex;
        justify-content: space-between;
        
        ${mobile({padding: "10px"})}
`;
const Filter = styled.div`
        margin: 20px;
        ${mobile({
            margin: "0px 20px",
            display: "flex",
            flexDirection: "column"
        })}
`;
const FilterTexts = styled.span`
        font-size: 20px;
        font-weight: 600;
        margin-right: 20px;
        ${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
        padding: 10px;
        margin-right: 20px;
        ${mobile({margin: "5px 0px"})}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterTexts>Filter Products</FilterTexts>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterTexts>Sort Products</FilterTexts>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (dsc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList