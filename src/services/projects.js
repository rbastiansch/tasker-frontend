import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const projects = (token) => {
  const result = axios({
    method: 'get',
    url: `${baseUrl}/projects`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return result;
};

const createProject = (token, data) => {
  const result = axios({
    method: 'post',
    url: `${baseUrl}/projects`,
    headers: {
      authorization: `Bearer ${token}`,
    },
    data,
  });

  return result;
};

export { projects, createProject };
