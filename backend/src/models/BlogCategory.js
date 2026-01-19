const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const slugify = require('slugify');

const BlogCategory = sequelize.define('BlogCategory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
}, {
  timestamps: true,
  tableName: 'blog_categories',
  hooks: {
    beforeValidate: (category) => {
      if (category.name && !category.slug) {
        category.slug = slugify(category.name, { lower: true, strict: true });
      }
    },
  },
});

module.exports = BlogCategory;
