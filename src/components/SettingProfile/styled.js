import styled from 'react-sc'
import { Link } from 'react-router-dom'

export const Text = styled.span`
  vertical-align: middle;
  padding: 6px 10px;
  
  font-size: 20px;
  font-weight: 300;
`
export const Box = styled.input`
	border-radius: 3px;
	border: solid 1px #dddddd;
  padding: 2%;
  width: 100%;
	height: auto;
  &::-webkit-input-placeholder {
        color: #323028;
        opacity: 0.15;
    }
`
export const Border = styled.div`
  padding-top:5px;
  padding-bottom: 5px;
`

export const Head = styled.h2`
  padding-bottom: 24px;
`
export const Detail1 = styled.p`
  padding-bottom: 2px;
  padding-top: 6%;
  text-align: center;
  font-size: 120%;
`
export const Detail2 = styled.p`
  padding-bottom: 2px;
  padding-top: 3.5%;
  text-align: center;
  font-size: 120%;
  font-weight:bold;
`
export const Detail3 = styled.p`
  margin: 4px 0px; 
`

export const Oval = styled.button`
  width: 60%;
  height: auto;
  border-radius: 20px;
  border: none;
  background-color: #3a7bd5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  color: white;
  margin: auto;
  display: block;
  text-align:center;
  padding: 4%;
  margin-top: 4%;
  
`
