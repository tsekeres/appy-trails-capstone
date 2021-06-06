import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const TripForm = ({
  formTitle,
  setProjects,
  title,
  screenshot,
  netlifyLink,
  githubLink,
  loomLink,
  description,
  techUsed,
  firebaseKey,
}) => {
  const [project, setProject] = useState({
    title: title || '',
    screenshot: screenshot || '',
    netlifyLink: netlifyLink || '',
    githubLink: githubLink || '',
    loomLink: loomLink || '',
    description: description || '',
    techUsed: techUsed || '',
    firebaseKey: firebaseKey || '',
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then(setProjects);
    } else {
      addProject(project).then(setProjects);
      history.push('/projects');

      setProject({
        title: '',
        screenshot: '',
        netlifyLink: '',
        githubLink: '',
        loomLink: '',
        description: '',
        techUsed: '',
        firebaseKey: null,
      });
    }
  };

  return (
    <div className='project-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for='title'>Title:</Label>
          <Input
            name='title'
            id='title'
            value={project.title}
            type='text'
            placeholder='Enter a Title'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='screenshot'>Screenshot: </Label>
          <Input
            name='screenshot'
            id='screenshot'
            value={project.screenshot}
            type='img'
            placeholder='Enter a Screenshot'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='netlifyLink'>Netlify Link: </Label>
          <Input
            name='netlifyLink'
            id='netlifyLink'
            value={project.netlifyLink}
            type='url'
            placeholder='Enter a Link'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='githubLink'>GitHub Link: </Label>
          <Input
            name='githubLink'
            id='githubLink'
            value={project.githubLink}
            type='url'
            placeholder='Enter a Link'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='loomLink'>Video Link: </Label>
          <Input
            name='loomLink'
            id='loomLink'
            value={project.loomLink}
            type='url'
            placeholder='Enter a Link'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='description'>Description: </Label>
          <Input
            name='description'
            id='description'
            value={project.description}
            type='text'
            placeholder='Enter a Description'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='techUsed'>Tech Used: </Label>
          <Input
            name='techUsed'
            id='techUsed'
            value={project.techUsed}
            type='text'
            placeholder='Enter a List of Tech Used'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

ProjectForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setProjects: PropTypes.func,
  title: PropTypes.string,
  screenshot: PropTypes.string,
  netlifyLink: PropTypes.string,
  githubLink: PropTypes.string,
  loomLink: PropTypes.string,
  description: PropTypes.string,
  techUsed: PropTypes.string,
  firebaseKey: PropTypes.string,
};

export default ProjectForm;
