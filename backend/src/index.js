require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./database');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Rutas
app.get('/', (req, res) => res.json({ message: 'API Gestión de Empleados funcionando' }));
app.use('/api/employees', require('./routes/employee.routes'));

// Arranque
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
});
