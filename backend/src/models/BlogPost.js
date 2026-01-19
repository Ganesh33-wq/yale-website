const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const slugify = require('slugify');

const BlogPost = sequelize.define('BlogPost', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'blog_categories',
      key: 'id',
    },
  },
  author: {
    type: DataTypes.STRING,
    defaultValue: 'Yale IT Admin',
  },
  featuredImage: {
    type: DataTypes.STRING,
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tocType: {
    type: DataTypes.ENUM('none', 'auto', 'manual'),
    defaultValue: 'none',
  },
  manualToc: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  tableOfContents: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  status: {
    type: DataTypes.ENUM('draft', 'published'),
    defaultValue: 'draft',
  },
  metaTitle: {
    type: DataTypes.STRING,
  },
  metaDescription: {
    type: DataTypes.TEXT,
  },
  viewCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  publishedAt: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: true,
  tableName: 'blog_posts',
  hooks: {
    beforeValidate: (post) => {
      if (post.title && !post.slug) {
        post.slug = slugify(post.title, { lower: true, strict: true });
      }
      if (!post.metaTitle && post.title) {
        post.metaTitle = post.title;
      }
    },
  },
});

module.exports = BlogPost;
