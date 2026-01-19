const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const slugify = require('slugify');

const Course = sequelize.define('Course', {
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
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  shortDescription: {
    type: DataTypes.TEXT,
  },
  curriculum: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  price: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  discountPrice: {
    type: DataTypes.FLOAT,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
    defaultValue: 'beginner',
  },
  image: {
    type: DataTypes.STRING,
  },
  syllabusPdf: {
    type: DataTypes.STRING,
  },
  features: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  batchTimings: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  faqs: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  metaTitle: {
    type: DataTypes.STRING,
  },
  metaDescription: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
  tableName: 'courses',
  hooks: {
    beforeValidate: (course) => {
      if (course.title && !course.slug) {
        course.slug = slugify(course.title, { lower: true, strict: true });
      }
      if (!course.metaTitle && course.title) {
        course.metaTitle = course.title;
      }
    },
  },
});

module.exports = Course;
