import styled from 'styled-components';

export const Detail = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  padding: 1% 3% !important;
`;
export const Inner = styled.div`
border-radius: 8px;
border: solid 1px rgba(151, 151, 151, 0.66);
margin-bottom: 15px;
padding-bottom: 17px;
padding: 3%;
margin: 1% 3%;
@media screen and (min-width: 1440px) {
  padding: 20px;
}
`;
export const InsurerDiv = styled.div`
  margin-bottom: 0.5%;
  margin-top: 1%;
`;
export const Head = styled.div`
  display: block;
  font-size: 1.6vw;
  font-weight: 500;
  color: #323028;
  padding-top: 5%;
  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
export const TopicHead = styled.div`
  font-size: 1vw;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
export const Submit = styled.button`
  width: 164px;
  height: 40px;
  border-radius: 20px;
  background-color: #f7555f;
  padding: 1%;
  color: white;
  margin: 1% 80%;
  border-color: #f7555f;
  border-style: solid;
`;
export const BoxIndiv = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding:3% 3%;
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
`;


export const PostreText = styled.text`
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 500px;
  letter-spacing: 0.3px;
  text-align: left;
  color: #323028;
  margin-left: 2%;
`;

export const Time = styled.div`
  color: #3a7bd5;
  display: inline-block;
`;

export const PlanBox = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  background-color: #eaeaea;
  border: solid 1px rgba(151, 151, 151, 0.39);
  padding: 8% 8%;
`;

export const TopSpace = styled.div`
  margin-top: 6px;
  width:100%;
`;

export const Card = styled.div`
  border-radius: 8px;
  background-color: #f5f5f5;
  border: solid 1px rgba(151, 151, 151, 0.39);
  margin:1%;
  margin-right: 1.5%;
  float: left !important;
`;
export const DetailFile = styled.div`
  text-align: center;
  margin-top: 1vw;
  word-wrap: break-word;
  font-size: 1vw;
  @media screen and (min-width: 1440px) {
    margin-top: 14px;
    font-size: 14px;
  }
`;
export const Edit = styled.div`
  color: #9b9b9b;
  cursor: pointer;
`;
