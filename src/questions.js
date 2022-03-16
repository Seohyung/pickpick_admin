import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  DateField,
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import PostPagination from './PostPagination';

const PostFilters = (props) => (
  <Filter {...props}>
    <TextInput label='질문 내용' source='question' alwaysOn />
    <ReferenceInput label='닉네임' source='author' reference='users' allowEmpty>
      <AutocompleteInput optionText='nickname' />
    </ReferenceInput>
    <TextInput label='답변 A' source='answerA' />
    <TextInput label='답변 B' source='answerB' />
  </Filter>
);

export const QuestionList = (props) => (
  <List
    {...props}
    filters={<PostFilters />}
    pagination={<PostPagination />}
    sort={{ field: 'createdAt', order: 'DESC' }}
  >
    <Datagrid rowClick='edit'>
      <TextField label='질문id' source='id' />
      <TextField label='닉네임' source='author.nickname' />
      <TextField label='질문 내용' source='question' />
      <TextField label='답변 A' source='answerA' />
      <ImageField label='Image A' source='imageA' />
      <TextField label='답변 B' source='answerB' />
      <ImageField label='Image B' source='imageB' />
      <DateField label='등록일' source='createdAt' />
    </Datagrid>
  </List>
);
