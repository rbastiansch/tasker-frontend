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

const getProject = (token, id) => {
  const result = axios({
    method: 'get',
    url: `${baseUrl}/projects/${id}`,
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

const updateProject = (token, id, data) => {
  const result = axios({
    method: 'put',
    url: `${baseUrl}/projects/${id}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
    data,
  });

  return result;
};

const deleteProject = (token, id) => {
  const result = axios({
    method: 'delete',
    url: `${baseUrl}/projects/${id}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return result;
};

export { projects, getProject, createProject, deleteProject, updateProject };
