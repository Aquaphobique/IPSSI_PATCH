import axios from 'axios';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export async function createUser(name, password) {
  const passwordHash = await bcrypt.hash(password, 12);
  return await User.create({ name, passwordHash });
}

export async function listUsers() {
  return await User.findAll({ attributes: ['id', 'name'] });
}

export async function populateRandomUsers(count = 3) {
  const requests = Array.from({ length: count }, () => axios.get('https://randomuser.me/api/'));
  const results = await Promise.all(requests);
  const created = [];
  for (const r of results) {
    const u = r.data.results[0];
    const fullName = `${u.name.first} ${u.name.last}`;
    const passwordHash = await bcrypt.hash(u.login.password, 12);
    const user = await User.create({ name: fullName, passwordHash });
    created.push(user);
  }
  return created;
}

