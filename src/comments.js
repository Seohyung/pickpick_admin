import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Filter,
  TextInput,
  ArrayField,
  SingleFieldList,
  ChipField,
  ReferenceInput,
  AutocompleteInput,
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
    <TextInput label='댓글 내용' source='content' />
    {/* <ReferenceInput
      label='질문 내용'
      source='question'
      reference='questions'
      allowEmpty
      filterToQuery={(searchText) => ({ question: searchText })}
    >
      <AutocompleteInput optionText='question' />
    </ReferenceInput> */}
  </Filter>
);

export const CommentList = (props) => {
  return (
    <List
      {...props}
      filters={<PostFilters />}
      pagination={<PostPagination />}
      sort={{ field: '_id', order: 'DESC' }}
    >
      <Datagrid rowClick='edit'>
        <TextField label='댓글id' source='id' sortBy='_id' />
        <TextField label='닉네임' source='author.nickname' sortable={false} />
        <TextField label='댓글 내용' source='content' />
        <TextField
          label='질문 내용'
          source='question.question'
          sortable={false}
        />
        <TextField label='좋아요 수' source='likeCnt' />
        <TextField label='싫어요 수' source='hateCnt' />
        <TextField
          label='답글 수'
          source='replies.length'
          sortBy='replies'
          sortable={false}
        />
        <ArrayField label='답글 상세' source='replies' sortable={false}>
          <SingleFieldList>
            <ChipField source='content' />
          </SingleFieldList>
        </ArrayField>
        <DateField label='등록일' source='createdAt' />
      </Datagrid>
    </List>
  );
};
