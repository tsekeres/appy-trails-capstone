import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addResource, updateResource } from '../helpers/data/ResourcesData';

const ResourceForm = ({
  user,
  admin,
  formTitle,
  image,
  title,
  description,
  link,
  firebaseKey,
}) => {
  const [resource, setResource] = useState({
    image: image || '',
    title: title || '',
    description: description || '',
    link: link || '',
    userId: user.userId || admin.userId,
    firebaseKey: firebaseKey || null,
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setResource((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resource.firebaseKey) {
      updateResource(resource).then(() => {
        history.push('/resources');
      });
    } else {
      addResource(resource).then(() => {
        history.push('/resources');
      });

      setResource({
        image: '',
        title: '',
        description: '',
        link: '',
      });
    }
  };

  return (
    <div className="resource-form">
      <Form id="addResourceForm" autoComplete="off" onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="resourceImage">Image:</Label>
          <Input
            name="resourceImage"
            id="resourceImage"
            value={resource.image}
            type="url"
            placeholder="Enter an Image URL"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="resourceTitle">Resource Title: </Label>
          <Input
            name="resourceTitle"
            id="resourceTitle"
            value={resource.title}
            type="text"
            placeholder="Enter a Title"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="resourceDescription">Resource Description: </Label>
          <Input
            name="resourceDescription"
            id="resourceDescription"
            value={resource.description}
            type="text"
            placeholder="Enter a Description"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="resourceLink">Resource Link: </Label>
          <Input
            name="resourceLink"
            id="resourceLink"
            value={resource.link}
            type="url"
            placeholder="Enter a Link URL"
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

ResourceForm.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
  formTitle: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  firebaseKey: PropTypes.string,
};

export default ResourceForm;
