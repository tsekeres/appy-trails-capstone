import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ResourceCards from '../components/ResourceCards';
import ResourceForm from '../components/ResourceForm';
import UpdateResourceCards from '../components/UpdateResourceCards';
import { getResources } from '../helpers/data/ResourcesData';

function Resources({ admin }) {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResources().then(setResources);
  }, []);

  return (
    <div>
      {admin !== null && (
        <div>
          {admin ? (
            <div className="planner-container d-flex flex-row">
              <div className="form-container">
                <ResourceForm
                  className="planner-form"
                  formTitle="New Resource"
                  admin={admin}
                  setResources={setResources}
                />
              </div>
              <div>
                <div>
                  <h2>Resources</h2>
                </div>
                <div className="card-container-a">
                  {resources?.map((resourceInfo) => (
                    <UpdateResourceCards
                      key={resourceInfo.firebaseKey}
                      admin={admin}
                      resource={resourceInfo}
                      setResources={setResources}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="planner-container">
              <div>
                <h2>Resources</h2>
              </div>
              <div className="card-container-a resources-view">
                {resources?.map((resourceInfo) => (
                  <ResourceCards
                    key={resourceInfo.firebaseKey}
                    admin={admin}
                    resource={resourceInfo}
                    setResources={setResources}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

Resources.propTypes = {
  admin: PropTypes.any,
};

export default Resources;
