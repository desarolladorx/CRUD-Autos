const express = require('express');
const { addCarController, getCarController, getCarByMarcaController, updateCarController, deleteCarController } = require('../controllers/carControllers');
const router = express.Router();

router.get('/car',getCarController)
router.get('/car/:marca',getCarByMarcaController)
router.put('/car/:marca', updateCarController)
router.post('/car',addCarController)
router.delete('/car/:modelo', deleteCarController)

module.exports = router;