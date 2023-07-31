module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    testId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
      defaultValue: sequelize.UUIDV4
    },
    test: {
      type: DataTypes.STRING,
      set (val) {
        this.setDataValue('test', val.toUpperCase())
      }
    }
  }, {
    freezeTableName: true,
    tableName: 'test'
  })

  return test
}
