import styled from 'react-sc'

export const Header = styled.span`
  width: 253px;
  height: 30px;
  font-size: 20px;
  letter-spacing: 0.3px;
  text-align: left;
  color: #323028;
  font-weight: bold;
`

export const HeaderSpace = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
`

export const Rec = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  padding-top: 3%;
  padding-bottom: 5%;
`

export const Blog = styled.div`
  width: 100%;
  height: 209.9px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #ffffff;
  background-color: var(--white-two);
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  border: solid 1px #979797;
`

export const Blogs = styled.div`
  width: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #ffffff;
  background-color: var(--white-two);
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  border: solid 1px #979797;
  padding: 20px;
`

export const PlanName = styled.span`
  width: 149px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.2px;
  text-align: left;
  color: #323028;
`

export const NameInput = styled.input`
  width: 77%;
  height: 40px;
  border-radius: 3px;
  background-color: #ffffff;
  background-color: var(--white-two);
  border: solid 1px #dddddd;
  padding: 1%;
  margin-left: 1%;
`

export const BlogImg = styled.img`
  width: 70px;
  height: 70px;
  opacity: 0.5;
  position: absolute;
  left: 62%;
  margin-top: 65px;
`

export const BlogContent = styled.span`
  width: 200px;
  height: 21px;
  opacity: 0.5;
  font-size: 14px;
  letter-spacing: 0.2px;
  text-align: center;
  color: #9b9b9b;
  position: absolute;
  margin-left: 220px;
  margin-top: 10%;
`

export const AddPlan = styled.button`
  width: 110%;
  height: 50px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #e4e4e4;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  border-color: #e4e4e4;
  border-style: solid;
`

export const AddContent = styled.span`
  width: 145px;
  height: 24px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-align: left;
  color: #9b9b9b;
`

export const BackButton = styled.button`
  width: 164px;
  height: 40px;
  border-radius: 20px;
  background-color: #f7555f;
  color: #ffffff;
  border-color: #f7555f;
  border-style: solid;
  margin-top: 25px;
`

export const NextButton = styled.button`
  width: 164px;
  height: 40px;
  border-radius: 20px;
  background-color: #46b3b8;
  color: white;
  border-color: #46b3b8;
  border-style: solid;
  margin-top: 25px;
`

export const Line = styled.hr`
  width: 100%;
  height: 2px;
  border: solid 1px #c3c3c3;
  margin: 3% 0;
`

export const PlanContent = styled.p`
  width: 190px;
  font-size: 14px;
  letter-spacing: 0.2px;
  text-align: left;
  color: #4a4a4a;
`

export const PlanBox = styled.div`
  width: 100%;
  height: 76px;
  border-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #c1c1c1;
  position: relative;
  margin-top: 18px;
  &::before {
        content: "";
    width: 22px;
    height: 74px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
		background: #3a7bd5;
		position: absolute;
    }
`

export const PlanImg = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  margin-left: 4.5%;
  margin-top: 2.1%;
`

export const PlanTopic = styled.span`
  width: 250px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.2px;
  text-align: left;
  color: #4a4a4a;
  position: absolute;
  margin-left: 14%;
  margin-top: 4.5%;
`

export const ToggleBox = styled.div`
  width: 54px;
  height: 38px;
  border-radius: 5px;
  background-color: #ececec;
  margin-left: 51%;
  margin-top: 18px;
  padding-top: 8px;
  padding-left: 6px;
`
