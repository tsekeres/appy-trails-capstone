import React from 'react';
import PropTypes from 'prop-types';
import ResourceCards from '../components/ResourceCards';

function Resources({ resources, setResources }) {
  return (
    <>
      <div className='card-container resources-view'>
        {resources?.map((resourceInfo) => (
          <ResourceCards
            key={resourceInfo.firebaseKey}
            resource={resourceInfo}
            setResources={setResources}
          />
        ))}
      </div>
    </>
  );
}

Resources.propTypes = {
  resources: PropTypes.array,
  setResources: PropTypes.func,
};

export default Resources;
