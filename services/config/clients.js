import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const API_KEY =
  '38bfe7c84caf7cf8fef420ac58e85aa0';
