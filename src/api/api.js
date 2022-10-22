import axios from "axios";

const baseURL = 'http://localhost:4000';

export const getUsers = () => axios.get(`${baseURL}/users`);

export const postUsers = (user) => axios.post(`${baseURL}/users`, user);
