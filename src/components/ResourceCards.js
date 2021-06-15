import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardImg, CardTitle, CardText, CardLink,
} from 'reactstrap';

const ResourceCards = ({ resource }) => (
  <Card className='resource-card'>
    <CardImg top width='90%' src={resource.image} alt='Card image cap' />
    <CardBody>
      <CardTitle tag='h5'>{resource.title}</CardTitle>
      <hr></hr>
      <CardText>{resource.description}</CardText>
      <hr></hr>
      <CardLink className='tech-link' href={resource.link}>
        Visit Resource Website
      </CardLink>
    </CardBody>
  </Card>
);

ResourceCards.propTypes = {
  resource: PropTypes.object,
};

export default ResourceCards;
