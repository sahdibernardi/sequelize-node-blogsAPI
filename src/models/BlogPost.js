module.exports = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define(
      'BlogPost',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE
      },
      {
        tableName: 'blog_posts',
        timestamps: false,
      }
    );
    BlogPosts.associate = (models) => {
      BlogPosts.belongsTo(models.User, {
        foreignKey: 'user_id', 
        as: 'user',
      });
    };
    return BlogPosts;
  };