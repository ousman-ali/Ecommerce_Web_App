import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data.js';
import { mobile } from '../responsive.js';

const Container = styled.div`
        margin-top: 10px;
        width: 100%;
        height: 100vh;
        display: flex;
        position: relative;
        overflow: hidden;
        ${mobile({display: "none"})}
`;

const Arrow = styled.div`
        width: 50px;
        height: 50px;
        background-color: #fff7f7;
        border: 1px solid black;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${props => props.direction === "left" && "10px"};
        right: ${props => props.direction === "right" && "10px"};
        margin: auto;
        cursor: pointer;
        opacity: 0.5;
        z-index: 2;
        &:hover {
            background-color: brown;
            color: white;
        }
`;

const Wrapper = styled.div`
        height: 100%;
        display: flex; 
        transition: all 1.5s ease; 
        transform: translateX( ${props => props.SlideIndex * -101.5}vw );
`;

const Slide = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        // border: ${props=> props.bg === "light blue" && "10px solid blue"};
        // border: ${props=> props.bg === "light green" && "10px solid green"};
        // border: ${props=> props.bg === "grey" && "10px solid black"};
`;

const ImageContainer = styled.div`
        height: 100%;
        flex; 1;
`;
const Image = styled.img`
        height: 80%;
`;

const InfoContainer = styled.div`
        padding: 50px;
        flex: 1;
`;
const Title = styled.h1`
        font-size: 70px;
`;
const Desc = styled.p`
        margin: 50px 0px;
        font-size: 20px;
        font-weight: 500;
        letter-spacine: 3px;
`;
const Button = styled.button`
        padding: 10px;
        font-size: 20px;
        background-color: transparent;
        cursor: pointer; 
`;


const Slider = () => {

    const [SlideIndex, setSlideIndex] = useState(0);    
   
    const handleClick =(direction)=>{
        if(direction === "left" ){
                setSlideIndex(SlideIndex > 0 ? SlideIndex-1 : 2);
            }else{
                setSlideIndex(SlideIndex < 2 ?  SlideIndex + 1 : 0)
                 }
        }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>

        <Wrapper SlideIndex = {SlideIndex} >
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id} >
                    <ImageContainer>
                        <Image src={item.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            ))} 
       </Wrapper>
            
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}


export default Slider