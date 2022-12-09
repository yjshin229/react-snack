import React, {useState} from 'react'
import styled from 'styled-components';
import { EditButton } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useEffect } from 'react';

const StyledOption = styled.div`
   height: 35rem;
   width: 40%;
   border: 3px dashed var(--beige);
   margin: 2rem 0rem 2rem 0rem;
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   align-items:center;
   padding: 1rem
   
`;

const StyledHeader = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: CBNUJIKJI
`

const ShopList = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: repeat(1, 1fr);
  margin-top: 1rem;
  max-height: 80%;
  width: 100%;
  overflow: auto;
  border-radius: 0.9rem;
  padding: 0.5rem;

  &::-webkit-scrollbar {
    margin-right: 0.5rem;
    width: 8px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--grey);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--beige);
    border-radius: 10px; 
  }
`
const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
    &:hover{
    background-color: var(--sub-pink);
  }
`
const ShopName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  font-family: CBNUJIKJI
`;

const IconWrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`

const EditIcon  = <FontAwesomeIcon icon={regular('pen-to-square')} />;
const TrashIcon = <FontAwesomeIcon icon={regular('trash-can')} />


const Option = ({name}) => {
  const [list,setList] = useState([]);
  
  useEffect(() => {
    const result = [];
    for(let i =1; i< 10; i++){
      result.push(
        <StyledItem key ={i}>
            <ShopName>임시{i}번
            </ShopName>
            <IconWrapper>
              <EditButton icon = {EditIcon}>
              </EditButton>
              <EditButton icon = {TrashIcon}>
              </EditButton>
            </IconWrapper>
          </StyledItem>
      )
    }
    setList(result);
    
  },[])
  console.log(list.toString)
  
  return(
    <StyledOption>
      <StyledHeader>{name}</StyledHeader>
      <ShopList>
        {list}
      </ShopList>
    </StyledOption>
    
  )
}
export default Option;
/**
 * <StyledList>
          <StyledShop> HELLO
          </StyledShop>
          <IconWrapper>
            <EditButton icon = {EditIcon}>
            </EditButton>
            <EditButton icon = {TrashIcon}>
            </EditButton>
          </IconWrapper>
        </StyledList>
 */