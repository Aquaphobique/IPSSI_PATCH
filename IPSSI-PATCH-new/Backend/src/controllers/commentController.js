import { createComment, listComments } from '../services/commentService.js';

export async function getComments(req, res) {
  res.json(await listComments());
}

export async function postComment(req, res) {
  const { content, userId } = req.body;
  const comment = await createComment(content, userId);
  res.status(201).json(comment);
}
