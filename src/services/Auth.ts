import request from './APIKit';

async function register(data) {
  return request({
    url: '/auth/register',
    method: 'POST',
    data,
  });
}

async function login(data) {
  return request({
    url: '/auth/login',
    method: 'POST',
    data,
  });
}

const authServices = {
  register,
  login
};

export default authServices;
