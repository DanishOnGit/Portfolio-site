export const getMySkills = async () => {
    const data = (await import('../lib/mySkills.json')).default;
    return data.skills;
  };