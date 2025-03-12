import express from 'express';
import {getEmployeeList,getElementById,createNewEmployee,editEmployeeDetail,deleteEmployee} from '../Controller/employee-controller.js'


const router = express.Router();

router.get('/products', (req, res) => {
  res.send('Products API is Working');
});
router.get('/getEmployeesList',getEmployeeList);
router.get('/getEmployeeById/:id',getElementById);
router.post('/createNewEmployee',createNewEmployee);
router.put('/updateEmployee/:id',editEmployeeDetail);
router.delete('/deleteEmployee/:id',deleteEmployee);

export default router;