import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Filter,
  ReferenceInput,
  AutocompleteInput,
  TextInput,
} from 'react-admin';
import PostPagination from './PostPagination';

const PostFilters = (props) => (
  <Filter {...props}>
    <ReferenceInput
      label='닉네임'
      source='author'
      reference='users'
      allowEmpty
      alwaysOn
    >
      <AutocompleteInput optionText='nickname' />
    </ReferenceInput>
    <TextInput label='답글 내용' source='content' />
  </Filter>
);

export const ReplyList = (props) => (
  <List
    {...props}
    filters={<PostFilters />}
    pagination={<PostPagination />}
    sort={{ field: '_id', order: 'DESC' }}
  >
    <Datagrid rowClick='edit'>
      <TextField label='답글id' source='id' sortBy='_id' />
      <TextField label='닉네임' source='author.nickname' sortable={false} />
      <TextField label='답글 내용' source='content' />
      <TextField label='댓글 내용' source='comment.content' sortable={false} />
      <TextField label='좋아요 수' source='likeCnt' />
      <TextField label='싫어요 수' source='hateCnt' />
      <DateField label='등록일' source='createdAt' />
    </Datagrid>
  </List>
);
