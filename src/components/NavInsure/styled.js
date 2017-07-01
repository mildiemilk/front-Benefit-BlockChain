import styled from 'react-sc'
import { Link } from 'react-router-dom'
import { Step } from 'semantic-ui-react'
export const Head = styled.p`
  margin-bottom: 0px;
  padding-top:24px;
  font-size: 32px;
`
export const Grid = styled.div`
  padding-top:20px;
`

export const StepRadius = styled(Step.Group)`
    &&&{
      border-radius: 40px;
      width: 100%;
    }
  `

export const Step1 = styled(Step)`
  &&&{
    border-top-left-radius: 40px !important;
    border-bottom-left-radius: 40px !important;
  }
`
export const Step6 = styled(Step)`
  &&&{
    border-top-right-radius: 40px !important;
    border-bottom-right-radius: 40px !important;
  }
`
