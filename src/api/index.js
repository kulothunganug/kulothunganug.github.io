const URL = 'http://localhost:8000';

const getPosts = async () => {
  let res = await fetchAPI(URL + '/posts');
  return res['posts'];
};

const getPost = async id => {
  let res = await fetchAPI(URL + '/post/' + id);
  return res['post'];
};

const fetchAPI = async url => {
  let res = await fetch(url);
  return await res.json();
};

export { getPost, getPosts };
