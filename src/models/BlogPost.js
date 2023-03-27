module.exports = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define(
      'BlogPost',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {type: DataTypes.INTEGER, foreignKey: true},
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
      },
      {
        timestamps: true,
        createdAt: "published",
        updatedAt: "updated", 
        tableName: "blog_posts",
        underscored: true,
      }
    );
    BlogPosts.associate = (models) => {
      BlogPosts.belongsTo(models.User, {
        foreignKey: 'userId', 
        as: 'user',
      });
    };
    return BlogPosts;
  };