import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export const ModalHeader = styled.p`
  font-size: 18px;
  letter-spacing: 0.4px;
  text-align: center;
  color: #000000;
`

export const ModalContent = styled.p`
font-size: 14px;
font-weight: 500;
letter-spacing: 0.3px;
text-align: left;
color: #323028;
padding-left: 5%;
`

export const ButtonNew = styled.button`
    width: 174px;
    height: 40px;
    border-radius: 20px;
    background-color: #f7555f;
    font-size: 120%;
    border-color: #f7555f;
    border-style: solid;
    color: #ffffff;
    position: absolute;
    margin-top: 1.5%;
    margin-left: 43%;
`

export const CancleButton = styled.button`
    width: 200px;
    height: 40px;
    border-radius: 20px;
    background-color: #f7555f;
    font-size: 120%;
    border-color: #f7555f;
    border-style: solid;
    color: #ffffff;
`

export const ConfirmButton = styled.button`
    width: 200px;
    height: 40px;
    border-radius: 20px;
    background-color: #386cb2;
    font-size: 120%;
    border-color: #386cb2;
    border-style: solid;
    color: #ffffff;
    margin-left: 1%;
`
export const Edit = styled.div`
    color: #9b9b9b;
    display: inline-block;
    float: right;
    padding-top: 2%;
    cursor: pointer;

`
