import express from "express";
import { ProductManager } from './class/ProductManager.js';

const manager = new ProductManager('./files/products.json')

const puerto = 8080;
const app = express();

app.get('/products', async (req, res) => {
  const products = await manager.getProducts();
  const { limit } = req.query
  if(limit){
    const productsLimit = products.slice(0, Number(limit))
    return res.send(productsLimit)
  }else{
    return res.send(products)
  }
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const productsById = await manager.getProductById(Number(id));
  res.send(productsById);
})

app.listen(puerto, ()=>{
  console.log(`server listening port: ${puerto}`)
})