const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gestion-empleados';
  try {
    await mongoose.connect(uri);
    console.log('Base de datos conectada:', uri);
  } catch (err) {
    console.error('Error al conectar con MongoDB:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
