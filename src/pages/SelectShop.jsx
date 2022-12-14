import React from 'react';
import styled from 'styled-components';
import ShopWrapper from '../components/ShopWrapper';
import { MainButton } from '../components/Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0rem 6rem 0rem 6rem;

`
function SelectShop() {
  return (
    <Container>
      <ShopWrapper/>
      <MainButton text = {'오늘의 간식'} size = {'1.5rem'}></MainButton>
    </Container>
      
  )
}

export default SelectShop;