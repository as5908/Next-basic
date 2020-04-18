import React, { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
const Index = ({ posts }) => {
  console.log(posts);
  // useEffect(() => {
  //   console.log('Fetching your data in useEffect!!'); // happens on client side, mounting only happens in DOM i.e client side
  // });

  return (
    <div>
      <h1>Our Index Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  console.log('Fetch');
  return { posts: data, mood: 'HAPPY' };
};

export default Index;
