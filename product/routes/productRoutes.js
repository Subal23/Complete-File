const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:orderId', productController.getProductByOrderId);
router.put('/:orderId', productController.updateProduct);
router.patch('/:orderId', productController.updateProduct);
router.delete('/:orderId', productController.deleteProduct);

module.exports = router;
