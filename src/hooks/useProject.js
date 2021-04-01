import { useState } from 'react';

export default function useProject() {
  const getProject = () => {
    const tokenString = sessionStorage.getItem('project');
    const userToken = JSON.parse(tokenString);
    return userToken
  };

  const [project, setProject] = useState(getProject());

  const saveProject = userToken => {
    sessionStorage.setItem('project', JSON.stringify(userToken));
    setProject(userToken);
  };
  return {
    setProject: saveProject,
    project
  }
}