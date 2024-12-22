import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = () => axios.get(`${BASE_URL}/users`);
export const fetchUserById = (userId) => axios.get(`${BASE_URL}/users/${userId}`);
export const fetchAlbumsByUser = (userId) => axios.get(`${BASE_URL}/users/${userId}/albums`);
export const fetchAlbumById = (albumId) => axios.get(`${BASE_URL}/albums/${albumId}`);
export const fetchPhotosByAlbum = (albumId) => axios.get(`${BASE_URL}/albums/${albumId}/photos`);
