const {MongoClient} = require('mongodb');

const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('Connected to the database');

        const db = client.db('Optimization');
        const products = db.collection('products');


        // Inserting 100000 products
        // const temp = [];
        // for (let i = 0; i < 100000; i++) {
        //     temp.push({
        //         name: `product${i}`,
        //         category:['electronica', 'muebleria', 'ropa', 'calzado', 'hogar'][Math.floor(Math.random()*5)], 
        //         price: Math.floor(Math.random()*1000) + 100,
        //         stock: Math.floor(Math.random()*100) + 1,
        //         date: new Date(2025, Math.floor(Math.random()*12), Math.floor(Math.random()*28) + 1)});
        // }

        // await products.insertMany(temp);
        // console.log('Products added to the database');


        // Querys before of create indexes

        //get porducts whit category `electronica`
        // const res = await products.find({ category: "electronica" }).explain("executionStats")
        // console.log(res)

        // get product by name
        // const res2 = await products.find({$text: {$search: "product3839"}}).explain("executionStats")
        // console.log(res2)

        //Get products between 2025-01-01 and 2025-01-05
        // const res3 = await products.find({
        //     date: {
        //         $gte: new Date(2025, 1, 1),
        //         $lt: new Date(2025, 1, 5)
        //     }
        // }). explain("executionStats")
        // console.log(res3)

        //End of querys before of create indexes


        //Create indexes

        //Create index in `category` sample index
        // await products.createIndex({category: 1});
        // console.log('Index created for category');
        
        // //Create index in `name` find index by name
        // await products.createIndex({name: "text"});
        // console.log('Index created for name');

        // //Create index in `date` find index by date
        // await products.createIndex({date: 1});
        // console.log('Index created for date');

    

        //Querys after of create indexes

        
        // get porducts whit category `electronica`
        // const res = await products.find({ category: "electronica" }).explain("executionStats")
        // console.log(res)

        // get product by name
        // const res2 = await products.find({$text: {$search: "product3839"}}).explain("executionStats")
        // console.log(res2)

        // Get products between 2025-01-01 and 2025-01-05
        // const res3 = await products.find({
        //     date: {
        //         $gte: new Date(2025, 1, 1),
        //         $lt: new Date(2025, 1, 5)
        //     }
        // }). explain("executionStats")
        // console.log(res3)

      
            


    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        console.log('Disconnected from the database');
    }
}

run().catch(console.error);