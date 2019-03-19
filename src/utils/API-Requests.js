const axios = require('axios');

const request = axios.create({
  baseURL: 'https://ms-ncknews.herokuapp.com/api'
});

export const fetchUsers = async () => {
  const { data } = await request.get('/users');
  return data.users;
}