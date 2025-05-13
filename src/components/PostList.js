import React from 'react';
import PostItem from './PostItem';

export default function PostList({ posts = [] }) {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

