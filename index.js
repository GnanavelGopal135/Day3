import express from 'express';
import empRouter from './Routers/employee-router.js';



const app = express();
const PORT = 4002;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api', empRouter);

app.get('/', (req, res) => {
  res.send('API is Working');
});