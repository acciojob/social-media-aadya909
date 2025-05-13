import React from "react";
export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div>
      <button onClick={() => setActiveTab('posts')}>Posts</button>
      <button onClick={() => setActiveTab('users')}>Users</button>
      <button onClick={() => setActiveTab('notifications')}>Notifications</button>
    </div>
  );
}
