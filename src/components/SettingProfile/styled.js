import styled from 'styled-components'

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
  height: 38px;
  &::-webkit-input-placeholder {
        color: #323028;
        opacity: 0.3;
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
  font-weight: bold;
`
export const Detail2 = styled.p`
  padding-bottom: 2px;
  padding-top: 3.5%;
  text-align: center;
  font-size: 120%;
  font-weight: bold;
`
export const Detail3 = styled.p`
  margin: 4px 0px;
  font-weight: bold;
`

export const Oval = styled.label`
  width: 48%;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #3a7bd5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  color: white;
  margin: auto;
  display: block;
  text-align:center;
  padding: 2.8%;
  margin-top: 4%;
  cursor: pointer;
`

export const DefaultImg = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
  display: block;
  background-color: #d8d8d8;
  border: solid 1px #979797;
`
