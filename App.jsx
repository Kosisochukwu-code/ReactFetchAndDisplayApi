import React, { useEffect, useState } from 'react';
import ListComponent from './ListComponent';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container">
      <h1>User List</h1>
      {loading && <p>Loading users...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && users.length === 0 && <p>No users found.</p>}
      {!loading && !error && users.length > 0 && (
        <ListComponent
          items={users}
          renderItem={(user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          )}
        />
      )}
    </main>
  );
}

export default App;
