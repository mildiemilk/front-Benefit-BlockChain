import styled from 'react-sc'
import { Icon } from 'semantic-ui-react'
export const Head = styled.p`
    margin-bottom: 0px;
    padding-top:24px;
    font-size: 30px;
`
export const Text = styled.div`
    text-align: center;
    font-size: 14px;
   
`
export const TextIn = styled.div`
    text-align: center;
    font-size: 14px;
    color: #515151;
`

export const Nav = styled.div`
	height: 130px;
	border-radius: 6px;
	background-color: #ffffff;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
	border: solid 1px #d3d3d3;
`

export const Card = styled.div`
    height: 84px;
	border-radius: 5px;
	background-color: #ffffff;
	box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.08);
	border: solid 1px #cecece;
    padding: 3.2% 0%;
	position: relative;
    overflow: hidden;
	&::before {
        content: "";
		width: 17px;
		background: #29C393;
		position: absolute;
		height: 100%;
		top: 0;
    }
`

export const BoxDetail = styled.div`
    width: 100%;
	height: 616px;
	border-radius: 5px;
	background-color: #ffffff;
	box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.08);
	border: solid 1px #cecece;
`
export const Back = styled.div`
	font-size: 20px;
	letter-spacing: 0.3px;
	color: #bfbfbf;
	margin-bottom: 24px;
	cursor: pointer;

`

export const IconPointer = styled(Icon)`
	cursor: pointer;
`