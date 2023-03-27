// const { use } = require('frisby');
const { BlogPost, Category, PostCategory, User } = require('../models');

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
  return newPost;
};

const gettAllPosts = async () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const getById = async (id) => BlogPost.findByPk(id, {
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

module.exports = { createPost, gettAllPosts, getById };