require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./productRoutes');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.log("Error al conectarse a MongoDB ",err);
});


app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
