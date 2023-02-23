import React from 'react'
import styled from 'styled-components'

const TextArea = styled.textarea`
width:500px;
height:500px; `

const Button =styled.button``
export default function Translation({doStuff,setInput}) {
  return (
    <div>
      <TextArea onChange={(e)=>setInput(e.target.value)}></TextArea>
      <Button onClick={doStuff}>Translate</Button>
      
    </div>
  )
}
