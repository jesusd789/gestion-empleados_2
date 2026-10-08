const { Router } = require('express');
const ctrl = require('../controllers/employee.controller');

const router = Router();

router.get('/', ctrl.getEmployees);
router.post('/', ctrl.createEmployee);
router.get('/:id', ctrl.getEmployee);
router.put('/:id', ctrl.updateEmployee);
router.delete('/:id', ctrl.deleteEmployee);

module.exports = router;
