require('dotenv').config();
const database = {
	default: process.env.DATABASETYPE || 'mysql',
	mysql: {
		connectionLimit: 100,
		host: process.env.HOST || 'localhost',
		user: process.env.USERNAME || 'root',
		password: process.env.PASSWORD || '',
		database: process.env.DATABASE || '',
		charset: 'utf8mb4',
	},
	url: '',
};

module.exports = database;
