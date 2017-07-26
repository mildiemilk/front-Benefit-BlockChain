import styled from 'styled-components'
import { Image } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

export const Detail = styled.div`
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
    margin-top:3%;
    padding: 5%;
    padding-top: 25px;
    height: 100%;

`

export const Head = styled.p`
    font-size: 30px;
  	letter-spacing: 0.4px;
    font-weight: bold;

`
export const TextNormal = styled.p`
    font-family: Kanit;
    font-size: 14px;
    letter-spacing: 0.2px;
    text-align: left;
    color: #323028;
`
export const Inboxtext = styled.p`
    font-size: 15px;
    color:#d8d8d8;
  	letter-spacing: 0.4px;
    font-weight: bold;
    padding-left: 5%;
    padding-top: 2%;
    text-align: center;
`
export const Inner = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 81px;
    border: solid 1px rgba(151, 151, 151, 0.66);
    margin-bottom: 15px;
    padding-top: 25px;
    padding-left: 25px;
`

export const Inner2 = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(151, 151, 151, 0.66);
    margin-bottom: 15px;
    padding-top: 29px;
    padding-left: 25px;


`
export const FileuploadBox = styled.div`

    padding:8px;
    width: 380px;
    height: 40px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border: solid 1px rgba(155, 155, 155, 0.64);

`
export const BrowsButton = styled.label`
    border-radius: 20px;
    background-color: #3a7bd5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    text-align: center;
    border-color: #3a7bd5;
    border-style: solid;
    color: #ffffff;
    padding: 4% 20%;
    cursor: pointer;
    margin-right: 10px;
`
export const AddBlockButton = styled.div`
    width: 163px;
    height: 40px;
    margin-left: 5px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #3a7bd5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    text-align: center;
    border-color: #3a7bd5;
    border-style: solid;
    color: #ffffff;
    cursor:pointer;
    padding-top: 10px;
`

export const Submit = styled.button`
    position: relative;
    right: -700px;
    height: 40px;
    width: 164px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #f7555f;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    text-align: center;
    border-style: solid;
`

export const inputStyle = styled.input`
    opacity: 0;
    position: absolute;
`

export const Imagestyle = styled(Image)`
  &&&{
    position:relative;
    left:10px;
    display: block;
    margin: auto;
    width: 74px;
    height: 63px;
  }
`

export const DropzoneStyle = styled(Dropzone)`
  &&&{
  }
`
