import express from 'express';
import {getEmployeeList} from '../Controller/employee-controller.js'

const router = express.Router();

router.get('/products', (req, res) => {
  res.send('Products API is Working');
});
router.get('/getEmployeesList',getEmployeeList);

export default router;