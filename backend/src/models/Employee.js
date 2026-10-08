const { Schema, model } = require('mongoose');

const employeeSchema = new Schema(
  {
    nombre:  { type: String, required: [true, 'El nombre es obligatorio'], trim: true },
    cargo:   { type: String, required: [true, 'El cargo es obligatorio'], trim: true },
    oficina: { type: String, required: [true, 'La oficina es obligatoria'], trim: true },
    salario: { type: Number, required: [true, 'El salario es obligatorio'], min: [0, 'El salario no puede ser negativo'] }
  },
  { timestamps: true, versionKey: false }
);

module.exports = model('Employee', employeeSchema);
