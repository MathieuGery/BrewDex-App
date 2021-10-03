import request from './APIKit';
import * as SecureStore from 'expo-secure-store'

async function setHeader() {
  const token = await SecureStore.getItemAsync('userToken');

  return {
    Authorization: `Bearer ${token}`,
  };
}

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

async function getBeerInfos(data) {
  const headers = await setHeader();

  return request({
    url: '/beer/infos',
    method: 'POST',
    data,
    headers,
  });
}

async function getConnectedUserInfos() {
  const headers = await setHeader();

  return request({
    url: '/auth/connected_user_infos',
    method: 'GET',
    headers,
  });
}


const authServices = {
  register,
  login,
  getBeerInfos,
  getConnectedUserInfos
};

export default authServices;
