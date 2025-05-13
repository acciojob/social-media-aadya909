
import React, { useState } from 'react';
import Tabs from './Tabs';
import PostForm from './PostForm';
import PostList from './PostList';
import Users from './Users';
import Notifications from './Notifications';
import '../styles/App.css';


export default function App() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div>
      <h1>GenZ</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'posts' && (
        <>
          <PostForm />
          <h2>Posts</h2>
          <PostList />
        </>
      )}
      {activeTab === 'users' && <Users />}
      {activeTab === 'notifications' && <Notifications />}
    </div>
  );
}
