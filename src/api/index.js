const URL = 'http://localhost:8000';

const getBlogs = async () => {
  let res = await fetchAPI(URL + '/blogs');
  return res['blogs'];
};

const getBlog = async id => {
  let res = await fetchAPI(URL + '/blog/' + id);
  return res['blog'];
};

const fetchAPI = async url => {
  let res = await fetch(url);
  return await res.json();
};

export { getBlog, getBlogs };
