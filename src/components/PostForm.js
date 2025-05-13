import React, { useState } from 'react';

export default function PostForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && authorId && content) {
      onSave({ title, authorId, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Post Title:
        <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} placeholder="What's on your mind?" />
      </label>
      <label>
        Author:
        <select id="postAuthor" value={authorId} onChange={e => setAuthorId(e.target.value)}>
          {/* options from users */}
        </select>
      </label>
      <label>
        Content:
        <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
      </label>
      <button type="submit">Save Post</button>
    </form>
  );
}
