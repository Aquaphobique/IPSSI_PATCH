import { body } from 'express-validator';

export const createUserValidator = [
  body('name')
    .isString().withMessage('name must be a string')
    .trim().isLength({ min: 2 }).withMessage('name must be at least 2 chars'),
  body('password')
    .isString().withMessage('password must be a string')
    .isLength({ min: 6 }).withMessage('password must be at least 6 chars')
];

export const commentValidator = [
  body('content')
    .isString().withMessage('content must be a string')
    .trim().isLength({ min: 1 }).withMessage('content is required'),
  body('userId')
    .optional()
    .isInt().withMessage('userId must be an integer')
];
