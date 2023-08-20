import React from "react";
import Logo from '../whether/cloudsLogo.png'
import styled from 'styled-components';
const ImageLogo = styled.img`width:100px; height:100px; margin:30px auto;`;
const CityComponent = (props) => {
    const { updateCity, fetchWhether } = props;
    return (
        <>
            <ImageLogo src={Logo} alt="cloudImgage" />
            <h5>search for city here to know!!</h5>
            <form onSubmit={fetchWhether}>
                <input type="text" placeholder="Enter City" onChange={(e) => updateCity(e.target.value)} />
                <button style={{ backgroundColor: "black", color: "white" }} type="submit">search</button>
            </form>
        </>
    )
}
export default CityComponent;