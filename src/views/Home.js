import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import lightmemoji from '../assets/lightmemoji.jpg';

export default function Home() {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <div className="welcome">
            <img className="memoji" src={lightmemoji}></img>
          </div>
          <div className="welcome">
            <h1 className="display-5">
              Welcome to Appy Trails! Your hub for hiking preparedness and
              planning.
            </h1>
            <p className="lead">
              As a guest you can browse through our planned trips or resources
              page for ideas. Or sign in for the option to plan your own trips
              using the resources page and planning form.
            </p>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}
