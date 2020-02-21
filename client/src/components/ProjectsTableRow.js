import React, { useState } from 'react';
import cn from 'classnames';
import DeleteNotifications from './DeleteNotifications';

const ProjectsTableRow = ({ project }) => {
  const [active, setActive] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <>
      <tr className="projectstable__bodyrow">
        <td><img src="/icons/processor-table.svg" alt="processor icon" />{project.name}</td>
        <td>{project.date}</td>
        <td>{project.records}</td>
        <td>{project.status}</td>
        <td>{project.businessCase}</td>
        <td>{project.client}</td>
        <td onClick={() => setActive(!active)} className="projectstable__dropdown-image">
          <img src="/icons/arrow-down.svg" alt="arrow down" style={{ paddingRight: '40px', cursor: 'pointer' }} />
        </td>
      </tr>

      {project.datasets.map(dataset => (
        <tr key={dataset.name} className={cn("projectstable__dropdown", {
          'active': active
        })}>
          <td><img src="/images/functions/file-icon.svg" alt="processor icon" />{dataset.name}</td>
          <td>{dataset.date}</td>
          <td>{dataset.records}</td>
          <td>{dataset.status}</td>
          <td>{dataset.businessCase}</td>
          <td>{dataset.client}</td>
          <td className="projectstable__dropdown-image">
            <img style={{ cursor: 'pointer' }} src="/icons/trash-icon.svg" alt="trash icon" onClick={() => setNotification(true)} />
            {notification && <DeleteNotifications setNotification={setNotification} />}
          </td>
        </tr>
      ))}

      <tr style={{ height: '20px'}}></tr>

    </>
  );
};

export default ProjectsTableRow;