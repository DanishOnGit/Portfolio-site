export const getMyBlogs = async () => {
    const data = (await import('../lib/myBlogs.json')).default;
    return data.blogs;
  };