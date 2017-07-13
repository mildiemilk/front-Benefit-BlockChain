import styled from 'react-sc'
import Health from '../../../assets/AddBenefit/artboards-1.png'
import Expense from '../../../assets/AddBenefit/artboards-2.png'

export const Detail = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
	background-color: #ffffff;
	box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
    padding: 5% 8%;
    
`

export const Text = styled.div`
    font-size: 20px;
	font-weight: 500;
	letter-spacing: 0.3px;
	color: #323028;
   
`
export const TextLine = styled.div`
    font-size: 14px;
	letter-spacing: 0.2px;
	color: #4a4a4a;
    margin: 3% 0%;

`
export const Box = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
	border: solid 1px #979797;
    position: relative;
`

export const Setting = styled.div`
    width: 115px;
	height: 35px;
	border-radius: 6px;
	background-color: #3a7bd5;
    color: #ffffff;
    padding: 2% 3%;
    position: absolute;
    left: 69%;
    top: 7%;
    cursor: pointer;
`

export const Image = styled.img`
    position: absolute;
    top: 14%;
    
`
export const DivImage = styled.div`
    position: relative;
    top: 21%;
    padding-top: 10%;
    
`
export const BoxIn = styled.div`
    position: relative;
`

export const Toggles = styled.div`
    background-color: #d9e2ec;
    width: 100%;
    height: 100%;
    display: inline-block;
    text-align: center;
    padding: 3% 0%;
`
export const Toggled = styled(Toggles)`
    &&&{
        padding: 5% 0%;
    }
`
export const HeadList = styled.div`
    padding: 4% 10%;
    font-size: 14px;
`
