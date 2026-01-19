const BlogCategory = require('./BlogCategory');
const BlogPost = require('./BlogPost');
const BlogComment = require('./BlogComment');
const Advertisement = require('./Advertisement');
const Course = require('./Course');

// Define associations
BlogCategory.hasMany(BlogPost, {
  foreignKey: 'categoryId',
  as: 'posts',
});

BlogPost.belongsTo(BlogCategory, {
  foreignKey: 'categoryId',
  as: 'category',
});

BlogPost.hasMany(BlogComment, {
  foreignKey: 'postId',
  as: 'comments',
});

BlogComment.belongsTo(BlogPost, {
  foreignKey: 'postId',
  as: 'post',
});

module.exports = {
  BlogCategory,
  BlogPost,
  BlogComment,
  Advertisement,
  Course,
};
