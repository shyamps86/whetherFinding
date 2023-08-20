import React from "react";
import styled from 'styled-components';
import Logo from '../whether/cloudsLogo.png'
const WhetherCondition = styled.div`display:flex; flex-direction:row; align-items:center;width:100%;justify-content:space-between`;
const Conditon = styled.div` margin:10px auto;
  & span{
    color:black;
    font-size:30px;
  }
`;
const WhetherLogo = styled.img`width:100px; height:100px; margin:5px auto`;
const Location = styled.div`margin:10px; font-size:20px; font-weight:bold;`;
const WhetherInfo = styled.span` margin:10px; text-align:start;`;
const WhetherInfoContainer = styled.div`display:flex; flex-direction:row`;
const WhetherInfoContainer1 = styled.div`display:flex; flex-direction:column;margin:10px;justify-content:space-between;`
const WhetherInfoContainer2 = styled.div`display:flex; flex-direction:column;margin:10px;justify-content:space-between;`

const Container1 = styled.h1`font-size:20px; font-weight:bold`;
const Container2 = styled.h1`font-size:20px; font-weight:bold`;
const Container3 = styled.h1`font-size:20px; font-weight:bold`;
const Container4 = styled.h1`font-size:20px; font-weight:bold`;
const WhetherComponent = () => {
    return (
        <>
            <WhetherCondition>
                <Conditon>
                    <span>
                        30deg C
                    </span>
                    |Cloudy
                </Conditon>
                <WhetherLogo src={Logo} alt="image logo" />
            </WhetherCondition>
            <Location>London</Location>
            <WhetherInfo>whetherInfo</WhetherInfo>
            <WhetherInfoContainer>
                <WhetherInfoContainer1>
                    <Container1>1 deg</Container1>
                    <Container2>2 deg</Container2>
                </WhetherInfoContainer1>
                <WhetherInfoContainer2>
                    <Container3>3 deg</Container3>
                    <Container4>4 deg</Container4>
                </WhetherInfoContainer2>
            </WhetherInfoContainer>
        </>
    )
}
export default WhetherComponent;