import styled from 'styled-components';

export const Detail = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  margin: 25px 0px;
  padding: 5% 6%;
  padding-top: 25px;
`;
export const Head = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;

`;
export const Inner = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: #ffffff;
  background-color: var(--white-two);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 3%;
  position: relative;
`;
export const BackButton = styled.button`
  display: inline-block;
  width: 164px;
  height: 40px;
  margin-left: 5%;
  border-radius: 20px;
  color: #ffffff;
  background-color: #f7555f;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  text-align: center;
  border-style: solid;
`;
export const SendButton = styled.button`
  width: 164px;
  height: 40px;
  border-radius: 20px;
  color: #ffffff;
  background-color: #46b3b8;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  text-align: center;
  border-style: solid;
`;
export const List = styled.div`
  font-size: 16px;
  margin: 2% 0%;
  display: inline-block;
`;
export const Line = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #323028;
  display: inline-block;
  margin-left: 50px;
  margin-right: 10px;
`;
export const Imgs = styled.img`
  position: absolute;
  left: 33px;
  top: 23px;
`;
export const DivHealth = styled.div`
  border-right:solid 1px #979797;
`;
export const DivBenefit = styled.div`
  height: 232px;
  border-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #979797;
`;
export const DivImage = styled.div`
  position: relative;
  padding-top:29px;
`;
export const TextList = styled.div`
  padding: 1% 3%;
  background-color: #cddaed;
  border-radius: 5px;
  margin-bottom: 2%;
`;
export const DetailList = styled.div`
  margin-right: 2%;
  margin-top: 4%;
  color: #4a4a4a;
`;
export const Edit = styled.div`
  color: #9b9b9b;
  display: inline-block;
  float: right;
  margin: 2% 0%;
  cursor: pointer;
`;
export const ImgFile = styled.img`
  display: inline-block;
`;
export const DivDownload = styled.div`
  display: inline-block;
  margin-left: 17px;
  position: absolute;
`;
export const DetailUpload = styled.div`
  font-size: 14px;
  letter-spacing: 0.2px;
  display: inline-block;
  color: ${props => props.link ? '#3a7bd5' : '#323028'};
`;
export const TextUpload = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.2px;
  color: #323028;
`;
