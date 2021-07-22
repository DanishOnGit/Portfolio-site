export const getMyProjects = async () => {
    const data = (await import('../lib/myProjects.json')).default;
    return data.projects;
  };