import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/People';
import CommentIcon from '@material-ui/icons/Comment';
import AddComment from '@material-ui/icons/AddComment';
import { QuestionList } from './questions';
import { UserList } from './users';
import { CommentList } from './comments';
import { ReplyList } from './replies';
import dataProvider from './dataProvider';
import { authProvider } from './authProvider';
import Dashboard from './Dashboard';
import { NotFound } from './NotFound';

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    catchAll={NotFound}
  >
    <Resource name='questions' list={QuestionList} icon={PostIcon} />
    <Resource name='users' list={UserList} icon={UserIcon} />
    <Resource name='comments' list={CommentList} icon={CommentIcon} />
    <Resource name='replies' list={ReplyList} icon={AddComment} />
  </Admin>
);

export default App;
