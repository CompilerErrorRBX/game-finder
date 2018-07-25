module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define('genre', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
    },
  }, {});
  genre.associate = (models) => {
    genre.belongsToMany(models.game, { through: 'game-genre', as: 'games', foreignKey: 'genreId', targetKey: 'id' });
  };
  return genre;
};