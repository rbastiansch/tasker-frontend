import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const login = (email, password) => {
  const result = axios({
    method: 'post',
    url: `${baseUrl}/auth/authenticate`,
    data: {
      email, password,
    },
    headers: {
      'content-type': 'application/json',
    },
  });

  return result;
};

export default login;
