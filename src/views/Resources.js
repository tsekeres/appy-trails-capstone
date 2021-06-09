import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import ResourceCards from '../components/ResourceCards';
import ResourceForm from '../components/ResourceForm';
import UpdateresourceCards from '../components/UpdateResourceCards';
import { getResources } from '../helpers/data/ResourcesData';

function Resources({ user, admin }) {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResources().then(setResources);
  }, []);

  return (
    <Container className="planner-container d-flex flex-row">
      <div className="form-container">
        <ResourceForm
          className="planner-form"
          formTitle="New Resource"
          user={user}
          admin={admin}
          setResources={setResources}
        />
      </div>
      <div>
        <div>
          <h2>Resources</h2>
        </div>
        {admin !== null && (
          <div>
            {admin ? (
              <div className='card-container-a'>
                {resources?.map((resourceInfo) => (
                  <UpdateresourceCards
                    key={resourceInfo.firebaseKey}
                    user={user}
                    admin={admin}
                    resource={resourceInfo}
                    setResources={setResources}
                  />
                ))}
              </div>
            ) : (
              <div className='card-container resources-view'>
                {resources?.map((resourceInfo) => (
                  <ResourceCards
                    key={resourceInfo.firebaseKey}
                    user={user}
                    admin={admin}
                    resource={resourceInfo}
                    setResources={setResources}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}

Resources.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any,
};

export default Resources;
