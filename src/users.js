import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EmailField,
  TextInput,
  Filter,
} from 'react-admin';
import PostPagination from './PostPagination';

const PostFilters = (props) => (
  <Filter {...props}>
    <TextInput label='닉네임' source='nickname' alwaysOn />
    <TextInput label='가입경로' source='provider' />
    <TextInput label='이메일' source='email' />
  </Filter>
);

export const UserList = (props) => (
  <List
    {...props}
    filters={<PostFilters />}
    pagination={<PostPagination />}
    sort={{ field: 'create_date', order: 'DESC' }}
  >
    <Datagrid rowClick='edit'>
      <TextField label='유저id' source='id' />
      <TextField label='닉네임' source='nickname' />
      <EmailField label='Email' source='email' />
      <TextField label='가입 경로' source='provider' />
      <DateField label='가입일' source='create_date' />
    </Datagrid>
  </List>
);
