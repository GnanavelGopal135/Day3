const employee=[{id:1,name:'John',age:25},{id:2,name:'Jane',age:24},
    {id:3,name:'Doe',age:26},
    {id:4,name:'Smith',age:27},
    {id:5,name:'Dee',age:28},
    {id:6,name:'Stephen',age:29},
    {id:7,name:'Daniel',age:30}

];
export const getEmployeeList=(req,res)=>{
    try{
        res.status(200).json(employee);
    }catch(error){
        res.status(404).send(error.message);

    }
}

//Get Element By Id
export const getElementById=(req,res)=>{
    const empId=(req.params.id);
    const empDetail=employee.find((emp)=>emp.id==empId);   
   
        if(!empDetail){
          return  res.status(404).json({message:`Employee with id ${empId} not found`});
        }
        res.status(200).json(empDetail);
    
}

//Create New Employee
export const createNewEmployee=(req,res)=>{
    const {name,age}=req.body;
    const empId=employee.length+1;
    const newEmployee={
        id:empId,
        name:name,
        age:age
    }
    employee.push(newEmployee);
    res.status(201).json(newEmployee)

}

// Update Employee
export const editEmployeeDetail = (req, res) => { 
    const empId = req.params.id;
    const { name, age } = req.body;
    const index = employee.findIndex(emp => emp.id == empId); // 5 - 0 1 2 3 4
    if (index === -1) {
        return res.status(404).json({ message: 'Employee not found' });
    }
    employee[index].name = name;
    employee[index].age = age;

    res.status(200).json({ message: 'Employee updated successfully', employee });
}

// Delete Employee
export const deleteEmployee=(req,res)=>{
    const empId=req.params.id;
    const index=employee.findIndex(emp=>emp.id==empId);
    if(index===-1){
        return res.status(404).json({message:'Employee not found'});
    }
    employee.splice(index,1);
    res.status(200).json({message:'Employee deleted successfully',employee});
}