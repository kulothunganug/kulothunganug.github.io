const URL = 'http://localhost:8000';

const getPosts = async () => {
  let res = await fetchAPI('/posts');
  return res['posts'];
};

const getPost = async id => {
  let res = await fetchAPI('/post/' + id);
  return res['post'];
};

const fetchAPI = async endpoint => {
  let res = await fetch(URL + endpoint);
  return await res.json();
};

export { getPost, getPosts };
