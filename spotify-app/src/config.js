const client_id = '4e0bbc2c5d7c45aca1dc0ecd4dc4f18e'; // Your client id
const client_secret = 'f35c2a5cd6394f0caca4d2484c1e7a7d'; // Your secret
const redirect_uri = 'http://localhost:3000'; // Your redirect uri
const authLink = `https://accounts.spotify.com/ru/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`;

export  {client_id, client_secret,  redirect_uri, authLink};