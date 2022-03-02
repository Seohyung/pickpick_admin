import * as React from 'react';
import { List, Datagrid, TextField, ImageField, DateField } from 'react-admin';

export const QuestionList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='author' />
      <TextField source='question' />
      <TextField source='answerA' />
      <ImageField source='imageA' />
      <TextField source='answerB' />
      <ImageField source='imageB' />
      <DateField source='createdAt' />
    </Datagrid>
  </List>
);