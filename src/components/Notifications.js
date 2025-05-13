import React, { useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const refreshNotifications = () => {
    // simulate loading
    setNotifications([
      { id: 1, message: 'New comment on your post' },
      { id: 2, message: 'User John liked your post' }
    ]);
  };

  return (
    <div>
      <button className="button" onClick={refreshNotifications}>
        Refresh Notifications
      </button>
      <ul>
        {notifications.map(note => <li key={note.id}>{note.message}</li>)}
      </ul>
    </div>
  );
}
