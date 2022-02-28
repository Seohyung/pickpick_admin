import * as React from 'react';
import { List, Datagrid, TextField, DateField, EmailField } from 'react-admin';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='nickname' />
      <EmailField source='email' />
      <TextField source='provider' />
      <DateField source='create_date' />
    </Datagrid>
  </List>
);
