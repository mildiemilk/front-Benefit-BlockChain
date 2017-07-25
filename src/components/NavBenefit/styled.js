import { Step } from 'semantic-ui-react'
import styled from 'react-sc'

export const Head = styled.p`
  margin-bottom: 0px;
  padding-top:24px;
  font-size: 30px;
`
export const Grid = styled.div`
  padding-top:20px;
`

export const StepRadius = styled(Step.Group)`
    &&&{
      border-radius: 40px;
      width: 100%;
      margin-top: 14.5px;
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
