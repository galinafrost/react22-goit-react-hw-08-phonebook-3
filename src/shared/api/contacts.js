import { instance } from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const remoweContacts = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  return result;
};

export const addContacts = async data => {
  const { data: result } = await instance.post(`/contacts`, data);
  return result;
};
