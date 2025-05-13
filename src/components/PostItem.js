import React from 'react';

export default function PostItem({ post }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div>
        <button className="button">Edit</button>
        <div>
          <button>👍 {post.reactions.thumbsUp}</button>
          <button>🎉 {post.reactions.celebrate}</button>
          <button>❤️ {post.reactions.heart}</button>
        </div>
      </div>
    </div>
  );
}
