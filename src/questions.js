import * as React from 'react';
import { List, Datagrid, TextField, ImageField, DateField } from 'react-admin';
import PostPagination from './PostPagination';

export const QuestionList = (props) => (
  <List {...props} pagination={<PostPagination />}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='author.nickname' />
      <TextField source='question' />
      <TextField source='answerA' />
      <ImageField source='imageA' />
      <TextField source='answerB' />
      <ImageField source='imageB' />
      <DateField source='createdAt' />
    </Datagrid>
  </List>
);
