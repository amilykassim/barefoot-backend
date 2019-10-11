/* eslint-disable require-jsdoc */
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Notifications', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    from: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    to: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    data: {
      type: Sequelize.JSONB,
      allowNull: true
    },
    request_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    message: {
      type: Sequelize.STRING,
      allowNull: false
    },
    seen: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
// eslint-disable-next-line no-unused-vars
export function down(queryInterface, Sequelize) { return queryInterface.dropTable('Notifications'); }
