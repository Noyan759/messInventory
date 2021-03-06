var Sequelize = require('sequelize');
/*
var sequelize = new Sequelize('messinventory ', 'USER-PC', '', {
  host: 'localhost\\MSSQL',
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

*/
var sequelize = new Sequelize('centralMessInventory', 'mess', '1234' , {
			dialect: 'mssql',
			host: 'localhost',
			port: 1433, // Default port
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
      omitNull: true ,
			dialectOptions: {
				instanceName: 'MSSQLSERVER'
			}
});

var User = sequelize.define('user', {
  username: {
    type:Sequelize.STRING,
    
  },
  birthday:{
     type:Sequelize.DATE,
 
  }

}
);

var foodItem = sequelize.define('foodItem', {
  /*foodId: {
    type: Sequelize.INTEGER,
  },*/
  name: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.FLOAT,
  },
  lastEntryDate: {
    type: Sequelize.DATE,
  },
  lastDrawingDate: {
    type: Sequelize.DATE,
  },
  minReOrdeLimit: {
    type: Sequelize.FLOAT,
  },
  unit: {
    type: Sequelize.STRING,
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

var paymentVoucher = sequelize.define('paymentVoucher', {
  /*paymentVId: {
    type: Sequelize.INTEGER
  },*/
  PONumber: {
    type: Sequelize.INTEGER
  },
  Date: {
    type: Sequelize.DATE
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

var purcahseOrder = sequelize.define('purchaseOrder', {
  /*ID: {
    type: Sequelize.INTEGER
  },*/
  supplier: {
    type: Sequelize.INTEGER
  },
  issueDate: {
    type: Sequelize.DATE
  },
  deliveryDate: {
    type: Sequelize.DATE
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

var purcahseOrderItems = sequelize.define('purchaseOrderItems', {
  /*ID: {
    type: Sequelize.INTEGER
  },*/
  food: {
    type: Sequelize.INTEGER
  },
  purchaseOrder: {
    type: Sequelize.INTEGER
  },
  delivered: {
    type: Sequelize.BOOLEAN
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

var supplier = sequelize.define('supplier', {
  sID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    
    allowNull:false,
    unique:true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  contactNO: {
    type: Sequelize.INTEGER,
    unique: true
  },
  address: {
    type: Sequelize.STRING,
    unique: true
  }
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  initialAutoIncrement:1
});

var typeOfFood = sequelize.define('typeOfFood', {
  /*ID: {
    type: Sequelize.INTEGER
  },*/
  name: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

//Appling Associations



//Adding Rows

supplier.sync(/*{force: true}*/).then(function () {
  // Table created
  return supplier.create({
    name: 'lasvfd2ol',
    contactNO: 1521,
    address: 'Bloksd asd05,  Perk'
  });
});

sequelize.sync().then(function() {
  return User
      .findOrCreate({where: {username: 'fnord'}, defaults: {birthday: (1996,01,07)}})
      .spread(function(user, created) {
        console.log(user.get({
          plain: true
        }))
        console.log(created)
});
}
);


