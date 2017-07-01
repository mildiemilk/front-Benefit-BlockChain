import styled from 'react-sc'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export const ModalHeader = styled.p`
  font-size: 18px;
  letter-spacing: 0.4px;
  text-align: center;
  color: #656d7d;
`

export const ModalContent = styled.p`
font-size: 16px;
font-weight: 500;
letter-spacing: 0.3px;
text-align: left;
color: #323028;
`

export const EditButton = styled(Button)`
  &&&{
    width: 262px;
    height: 40px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #f7555f;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  }
`

export const PostButton = styled(Button)`
  &&&{
    width: 262px;
    height: 40px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #3a7bd5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  }

`
export const UploadButton = styled.button`
  
    width: 262px;
    height: 40px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #3a7bd5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    text-align: center;
  

`
export const Box = styled.input`
	border-radius: 3px;
	border: solid 1px #dddddd;
  padding: 2%;
  width: 100%;
	height: auto;
  &::-webkit-input-placeholder {
        color: #323028;
        opacity: 0.35;
    }
`
