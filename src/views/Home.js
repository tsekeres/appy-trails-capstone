import React from 'react';
import { Container } from 'reactstrap';
import backgroundImage from '../assets/backgroundImage.jpg';

import lightmemoji from '../assets/lightmemoji.jpg';

export default function Home() {
  return (
    <div className="homeView" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container fluid>
        <div className="memoji">
          <img className="memoji" src={lightmemoji}></img>
        </div>
        <div className="welcome">
          <h1 className="display-5">
            Welcome to Appy Trails! Your hub for hiking preparedness and
            planning.
          </h1>
          <p className="lead">
            As a guest you can browse through our planned trips or resources
            page for ideas.
            <br></br>
            Sign in for the option to plan your own trips
            using the resources page and planning form.
          </p>
        </div>
      </Container>
    </div>
  );
}
