import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';



const Info = styled.div`
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s ease;
        cursor: pointer;
`;
const Container = styled.div`
        flex: 1;
        margin: 5px;
        min-width: 280px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5fbfd;
        position: relative;

        &:hover ${Info} {
            opacity: 1;
        }
`;

const Circle = styled.div`
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
`;
const Image = styled.img`
        height: 75%;
        width: 100%;
        z-index: 2;
`;
const Icon = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        transition: all 0.5s ease;
        &:hover {
            background-color: #e9f5f5;
            transform: scale(1.1);
        }
`;

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                    <SearchOutlinedIcon/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product