// frontend/src/api.js

const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

// --- Users ---
export async function fetchUsers() {
  const res = await fetch(`${API}/api/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function addUser(name, password) {
  const res = await fetch(`${API}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  });
  if (!res.ok) throw new Error("Failed to add user");
  return res.json();
}

export async function populateUsers(count = 3) {
  const res = await fetch(`${API}/api/users/populate?count=${count}`);
  if (!res.ok) throw new Error("Failed to populate users");
  return res.json();
}

// --- Comments ---
export async function fetchComments() {
  const res = await fetch(`${API}/api/comments`);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}

export async function addComment(content, userId) {
  const res = await fetch(`${API}/api/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, userId })
  });
  if (!res.ok) throw new Error("Failed to add comment");
  return res.json();
}

