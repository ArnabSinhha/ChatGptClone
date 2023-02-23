import React from 'react'
import styled from 'styled-components';

const Title =styled.h1`
  color:#dbbaba;
`
const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#1a1414;`

const Options =styled.div`
 display: grid;
 
`

const Option =styled.div`
  margin: 10px;
  background-color: #bf8d8a;
  padding:10px;
  &:hover,
  &:focus {
   background-color: white;
  }
  &:active {
    color: red;
  }
`
function OptionSelection({arrayItems,selectOption}) {
  return (
    <Container>
    <Title>React AI APP</Title>
    <Options>
      {arrayItems.map((items) =>{
        return(
          <Option onClick={()=> selectOption(items.option)}>
          <h3>{items.name}</h3>
          <p>{items.description}</p>
          </Option>
        )
       })}
    </Options>
    </Container>
  );
}

export default OptionSelection
