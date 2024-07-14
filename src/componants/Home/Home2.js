
import styled from "styled-components";


export const HomeSection = styled.div`
  height: 500px;
  background: url("../images/portfolio-img3n.jpg");
  background: url("../images/bg-img.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
`;

export const HomeInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const H2 = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: #FFEBEE;

  &@media(max-width:768px) {
    font-size: 40px;
    color: #fff;
}

  &@media (max-width:575px) {
    font-size: 30px;
  }
`;

export const H4 = styled.h4`
  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;

  &@media(max-width:768px) {
    font-size: 20px;
  }
`;

export const P = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #FAFAFA;
  margin-bottom: 20px & @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Span = styled.span`
  color: #000;
  font-weight: bold;
`;

export const Button = styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold

    &:hover {
      background: #fff;
      color: #eb5424
    }
       
    
`;
