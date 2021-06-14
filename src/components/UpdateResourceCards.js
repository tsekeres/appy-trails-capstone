import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardLink,
} from 'reactstrap';
import { deleteResource } from '../helpers/data/ResourcesData';
import ResourceForm from './ResourceForm';

const UpdateResourceCards = ({
  admin,
  setAdmin,
  resource,
  setResources,
}) => {
  const [updating, setUpdating] = useState(false);

  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteResource(resource.firebaseKey).then((response) => {
          setResources(response);
          history.push('/resources');
        });
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card>
      <CardImg top width='100%' src={resource.image} alt='Card image cap' />
      <CardBody>
        <CardTitle tag='h2'>
          {resource.title}
        </CardTitle>
        <hr></hr>
        <CardText>
          {resource.description}
        </CardText>
        <hr></hr>
        <CardLink href={resource.link}>Visit Resource Website</CardLink>
        <Button color='danger' size='sm' onClick={() => handleClick('delete')}>
          Delete
        </Button>
        <Button color='info' size='sm' onClick={() => handleClick('update')}>
          {updating ? 'Close Form' : 'Update'}
        </Button>
        {updating && (
          <ResourceForm
            formTitle='Update Resource'
            admin={admin}
            setAdmin={setAdmin}
            setResources={setResources}
            firebaseKey={resource.firebaseKey}
            image={resource.image}
            title={resource.title}
            link={resource.link}
            description={resource.description}
          />
        )}
      </CardBody>
    </Card>
  );
};

UpdateResourceCards.propTypes = {
  admin: PropTypes.any,
  setAdmin: PropTypes.func,
  resource: PropTypes.object,
  setResources: PropTypes.func,
};

export default UpdateResourceCards;
