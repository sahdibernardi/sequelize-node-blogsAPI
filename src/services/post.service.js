// const { use } = require('frisby');
const { BlogPost, Category, PostCategory } = require('../models');

const createPost = async (post) => {
  const categories = await Category.findAll({
  where: { id: post.categoryIds },
  });
  if (categories.length !== post.categoryIds.length) {
    return false;
  }

  const newPost = await BlogPost.create(post);

  await Promise
    .all((post.categoryIds).map((c) => PostCategory
      .create({ categoryId: c, postId: newPost.dataValues.id })));

  console.error(newPost);
  return newPost;
};

module.exports = { createPost };