module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('games', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING(1024) + ' CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci',
      },
      description: {
        type: Sequelize.TEXT('medium') + ' CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci',
      },
      upVotes: {
        type: Sequelize.BIGINT(12),
      },
      downVotes: {
        type: Sequelize.BIGINT(12),
      },
      visits: {
        type: Sequelize.BIGINT(20),
      },
      url: {
        type: Sequelize.STRING(255) + ' CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci',
      },
      imageToken: {
        type: Sequelize.STRING,
      },
      placeId: {
        unique: true,
        type: Sequelize.BIGINT(12),
      },
      universeId: {
        unique: true,
        type: Sequelize.BIGINT(12),
      },
      creatorId: {
        type: Sequelize.BIGINT(10),
      },
      creatorName: {
        type: Sequelize.STRING(255) + ' CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('games');
  }
};
