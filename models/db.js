import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB_NAME,       // Database Name
    process.env.DB_USER,       // Username
    process.env.DB_PASSWORD,   // Password
    {
        host: process.env.DB_HOST, // Hostname
        dialect: 'mysql',          // Keep 'mysql' since you're using Filess.io
        port: process.env.DB_PORT || 3306, // MySQL default port
        logging: false,
        // No special dialectOptions.ssl needed for direct MySQL connections
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            sidle: 10000
        }
    }
);

export { Sequelize, sequelize };