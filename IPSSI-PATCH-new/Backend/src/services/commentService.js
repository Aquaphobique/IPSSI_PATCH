import Comment from '../models/comment.js';

export async function createComment(content, userId) {
  return await Comment.create({ content, userId });
}

export async function listComments() {
  return await Comment.findAll({ order: [['id', 'DESC']] });
}

