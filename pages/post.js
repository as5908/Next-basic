import React, { useEffect } from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';

// const Post = ({ router }) => (
//   <h1>You are looking at Post# {router.query.id}</h1>
// );
// export default withRouter(Post);
const Post = (props) => {
  // console.log('[Post]', props);
  const { comments, id } = props;
  return (
    <div>
      <h1>You are looking at Post#{id}</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

// 1 way is this other is using withRouter
Post.getInitialProps = async (context) => {
  // console.log('[Post.getInitialProps]', context);
  const { query } = context;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${1}`
  );
  //console.log(data);
  return { comments: data, ...query };
};

export default Post;
