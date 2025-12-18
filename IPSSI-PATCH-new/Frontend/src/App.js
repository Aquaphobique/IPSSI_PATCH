import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchComments, addUser, addComment, populateUsers } from './api';

export default function App() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  async function load() {
    const [u, c] = await Promise.all([fetchUsers(), fetchComments()]);
    setUsers(u);
    setComments(c);
  }

  useEffect(() => {
    load();
  }, []);

  async function onAddUser(e) {
    e.preventDefault();
    if (!name || !password) return;
    await addUser(name, password);
    setName('');
    setPassword('');
    await load();
  }

  async function onAddComment(e) {
    e.preventDefault();
    if (!content.trim()) return;
    const uid = userId ? Number(userId) : undefined;
    await addComment(content, uid);
    setContent('');
    setUserId('');
    await load();
  }

  async function onPopulate() {
    await populateUsers(3);
    await load();
  }

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif', maxWidth: 800, margin: '0 auto' }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>IPSSI Patch</h1>
        <p style={{ color: '#555' }}>Frontend minimal pour tester l’API Users/Comments</p>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Users section */}
        <section style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: 0 }}>Users</h2>
            <button onClick={onPopulate}>Populate 3 random users</button>
          </div>

          <ul style={{ marginTop: 12, paddingLeft: 18 }}>
            {users.length === 0 && <li>Aucun utilisateur pour le moment.</li>}
            {users.map(u => (
              <li key={u.id}>
                <strong>{u.name}</strong> <span style={{ color: '#777' }}>#{u.id}</span>
              </li>
            ))}
          </ul>

          <form onSubmit={onAddUser} style={{ marginTop: 16, display: 'grid', gap: 8 }}>
            <input
              placeholder="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Add user</button>
          </form>
        </section>

        {/* Comments section */}
        <section style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>Comments</h2>

          <ul style={{ marginTop: 12, paddingLeft: 18 }}>
            {comments.length === 0 && <li>Aucun commentaire pour le moment.</li>}
            {comments.map(c => (
              <li key={c.id}>
                {c.content}{' '}
                <span style={{ color: '#777' }}>
                  (userId: {c.userId ?? 'none'}) #{c.id}
                </span>
              </li>
            ))}
          </ul>

          <form onSubmit={onAddComment} style={{ marginTop: 16, display: 'grid', gap: 8 }}>
            <input
              placeholder="content"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
            <input
              placeholder="userId (optional)"
              value={userId}
              onChange={e => setUserId(e.target.value)}
            />
            <button type="submit">Add comment</button>
          </form>
        </section>
      </main>
    </div>
  );
}
