import * as React from 'react';
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import { PostList } from './posts';
import { UserList } from './users';
// import dataProvider from './dataProvider';
import authProvider from './authProvider';
import simpleRestProvider from 'ra-data-simple-rest';

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: 'application/json' });
//   }
//   const { token } = JSON.parse(localStorage.getItem('auth'));
//   options.headers.set('Authorization', `Bearer ${token}`);
//   return fetchUtils.fetchJson(url, options);
// };
const dataProvider = simpleRestProvider('http://localhost:4000/api/admin/data');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='questions' list={ListGuesser} />
  </Admin>
);

export default App;
