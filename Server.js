const express = require('express');
const app = express();
const db = require("./Database/db");
const cors = require('cors');
const morgan = require('morgan');
 
const dotenv = require('dotenv');
dotenv.config();

app.use(cors("*"));
app.use(express.json());
app.use(morgan('dev'));

db.connect();

const productRoute = require('./Routes/productRoutes');
const userRoute =  require('./Routes/userRoutes');
const subcategoryRoute = require('./Routes/subcategoryRoutes');
const categoryRoute = require('./Routes/categoryRoutes')

app.use('/user',userRoute)
app.use('/products', productRoute);
app.use('/subcategory',subcategoryRoute);
app.use ('/category',categoryRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
