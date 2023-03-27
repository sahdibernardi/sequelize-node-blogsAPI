module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: { 
          type: DataTypes.INTEGER, 
          primaryKey: true, 
        },
        categoryId: { 
          type: DataTypes.INTEGER, 
          primaryKey: true, 
        },
      },
      {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
      },
    );
  
    PostCategory.associate = ({BlogPost, Category}) => {
        Category.belongsToMany(BlogPost, {
          foreignKey: 'category_id', 
          otherKey: 'post_id',
          through: 'PostCategory',
          as: 'blog_posts',
        });
        BlogPost.belongsToMany(Category, {
          foreignKey: 'post_id',
          otherKey: 'category_id',
          through: 'PostCategory',
          as: 'categories',
        });
      };
  
    return PostCategory;
  };