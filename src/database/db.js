const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE = process.env.DATABASE_URL || '';

(async () => {
    try {
        await mongoose.connect(DATABASE);
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log(error);        
    }
})();

module.exports = mongoose;