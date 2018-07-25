module.exports = (sequelize, DataTypes) => {
  const game = sequelize.define('game', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(1024),
    },
    description: {
      type: DataTypes.TEXT,
    },
    upVotes: {
      type: DataTypes.BIGINT(12),
    },
    downVotes: {
      type: DataTypes.BIGINT(12),
    },
    visits: {
      type: DataTypes.BIGINT(20),
    },
    url: {
      type: DataTypes.STRING,
    },
    imageToken: {
      type: DataTypes.STRING,
    },
    placeId: {
      type: DataTypes.BIGINT(14),
    },
    universeId: {
      type: DataTypes.BIGINT(14),
    },
    creatorId: {
      type: DataTypes.BIGINT(10),
    },
    creatorName: {
      type: DataTypes.STRING,
    },
  }, {});
  game.associate = (models) => {
    game.belongsToMany(models.genre, { through: 'game-genre', as: 'genres', foreignKey: 'gameId', targetKey: 'id' });
  };
  return game;
};