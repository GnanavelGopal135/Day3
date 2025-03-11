const employee=[{id:1,name:'John',age:25},{id:2,name:'Jane',age:24},{id:3,name:'Doe',age:26}];
export const getEmployeeList=(req,res)=>{
    try{
        res.status(200).json(employee);
    }catch(error){
        res.status(404).send(error.message);

    }
}