import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export const NotFound = () => (
  <Card>
    <Title title='Not Found' />
    <CardContent>
      <h1>유효하지 않은 페이지 입니다 😳</h1>
      <h3>404: Page not found</h3>
    </CardContent>
  </Card>
);
