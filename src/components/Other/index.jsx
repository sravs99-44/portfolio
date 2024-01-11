import React from 'react';
import { Card, Grid, CardContent, CardMedia } from '@mui/material';
import styled from 'styled-components';

import { useState, useEffect } from 'react';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
  padding: 0px;
}
`;


const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 650px;
gap: 12px;
margin-bottom: 100px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    max-height:1000px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const Box = styled.div`
  width: 100%;
  height: 450px;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 0px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }

`;

export const ButtonCode = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 65%;
    
    max-width: 100px;
    text-align: center;
    padding: 10px 0;
    color:${({ theme }) => theme.text_primary};
    border-radius: 40px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(150deg, hsla(221, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(125deg, hsla(221, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(125deg, hsla(221, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    
    filter: brightness(1);
    }    
    
    
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
      }
      @media (max-width: 500px) {
        font-size: 14px;
        padding: 6px 12px;
      }

`;



const Other = () => {
  

  

  return (
    <Container id="other">
        <Wrapper>
    <Grid container spacing={8} align= "center" >
        
      {/* First Card */}
      
      <Grid item>
        
        <Card style={{ maxWidth: '18rem' } }>
          <CardMedia
            component="img"
            alt="Placeholder image"
            height="180"
            image="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          />
          <Box>
            <CardContent >
                
                <Title>
                LeetCode
                </Title>
                <Desc>
                I find fulfillment in tackling problem-solving challenges, particularly those related to Data Structures and Algorithms
                </Desc>
                <div align = 'center'>
              <ButtonCode target='display' href="https://leetcode.com/sravanimalla1999/" > leetcode  </ButtonCode>
              </div>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      


      {/* Second Card */}
      <Grid item>
        <Card style={{ maxWidth: '18rem' }}>
          <CardMedia
            component="img"
            alt="Placeholder image"
            height="180"
            image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          />
          <Box>
          <CardContent>
            <Title>
              Github
            </Title>
            <Desc>
              I keep my work updated in this platform, it contains the codes of the projects that I have worked on in my past years.
            </Desc>
            <div align = 'center'>
              <ButtonCode target='display' href='https://github.com/sravs99-44' > github  </ButtonCode>
              </div>
          </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
    </Wrapper>
    </Container>
  );
};

export default Other;
