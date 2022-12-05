import React from 'react'
import styled from 'styled-components';
import {Option, OptionHeader} from './Options'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem ;

`
function ShopWrapper() {
  return (
   <Container>

    <Option>
      <OptionHeader>디저트</OptionHeader>
    </Option>
    
    <Option>
      <OptionHeader>음료</OptionHeader>
    </Option>
    
   </Container>
  )
}

export default ShopWrapper