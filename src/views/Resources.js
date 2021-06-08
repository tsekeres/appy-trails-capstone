import React, { useState, useEffect } from 'react';
import ResourceCards from '../components/ResourceCards';
import getResources from '../helpers/data/ResourcesData';

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResources().then(setResources);
  }, []);

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

export default Resources;
