import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Comment = sequelize.define('Comment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  content: { type: DataTypes.TEXT, allowNull: false },
  userId: { type: DataTypes.INTEGER }
}, { tableName: 'comments' });

export default Comment;

