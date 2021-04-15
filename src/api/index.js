import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getTasks = ({ offset = 0, limit = 5 } = {}) =>
  httpClient.get(`/tasks?${queryString.stringify({ offset, limit })}`);

export const createTask = ({ taskData }) => httpClient.post(`/tasks`, taskData);
export const updateTask = ({ id, taskData }) =>
  httpClient.patch(`/tasks/${id}`, taskData);

export const deleteTask = ({ id }) => httpClient.delete(`/tasks/${id}`);
