import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList } from './posts';
import { UserList } from './users';
import dataProvider from './dataProvider';
import authProvider from './authProvider';

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name='posts' list={PostList} />
    <Resource name='users' list={UserList} />
  </Admin>
);

export default App;
