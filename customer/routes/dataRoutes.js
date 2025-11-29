const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController'); // path is correct

router.post('/', dataController.createData);
router.get('/', dataController.getAllData);
router.get('/:id', dataController.getDataById);
router.put('/:id', dataController.updateData);
router.patch('/:id', dataController.patchData);
router.delete('/:id', dataController.deleteData);

module.exports = router;
