'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('users', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: { type: 'string', notNull: true },
      bithday: { type: 'string', notNull: true },
      genre: { type: 'char', notNull: true, length: 1 },
      isActive: { type: 'boolean', defaultValue: true },
      createdAt: { type: 'timestamp',  defaultValue: new String('CURRENT_TIMESTAMP') },
      updatedAt: {type: 'timestamp', defaultValue: new String('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')  }
    },
    ifNotExists: true
  });
};

exports.down = function(db) {
  return db.dropTable('users');
};

exports._meta = {
  "version": 1
};
