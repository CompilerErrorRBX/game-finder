module.exports = (sequelize, DataTypes) => {
  const gameGenre = sequelize.define('game-genre', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    genreId: {
      type: DataTypes.UUID,
    },
    gameId: {
      type: DataTypes.UUID,
    },
  }, {});
  gameGenre.associate = () => {
    // associations can be defined here
  };
  return gameGenre;
};