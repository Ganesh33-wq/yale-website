const { Sequelize } = require('sequelize');
const config = require('./config');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.dbPath,
  logging: false, // Set to console.log to see SQL queries
  define: {
    timestamps: true,
    underscored: false,
  }
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ SQLite Database Connected Successfully');
    
    // Sync all models with database (creates tables if they don't exist)
    await sequelize.sync({ alter: true });
    console.log('✅ Database Synced');
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
