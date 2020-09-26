module.exports = {
    up(queryInterface, Sequelize) {
      return Promise.all([
        queryInterface.addColumn(
          'Requests', // table name
          'accepted', // new field name
          {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
          },
        ),
        queryInterface.addColumn(
            'Requests', // table name
            'done', // new field name
            {
              type: Sequelize.BOOLEAN,
              allowNull: false,
              defaultValue: false
            },
        )
        
      ]);
    },
  
    down(queryInterface, Sequelize) {
      // logic for reverting the changes
      return Promise.all([
        queryInterface.removeColumn('Requests', 'accepted'),
        queryInterface.removeColumn('Requests', 'done'),
        
      ]);
    },
  };