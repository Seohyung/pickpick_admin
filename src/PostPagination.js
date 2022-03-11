import { Pagination } from 'react-admin';

const PostPagination = (props) => (
  <Pagination rowsPerPageOptions={[5, 10, 25, 50, 100]} {...props} />
);

export default PostPagination;
