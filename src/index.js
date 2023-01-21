import { ProductManager } from './class/ProductManager.js';

const manager = new ProductManager('./files/products.json');

const products = async () => {
  //producto1
  const newProduct1 = {
    title: 'producto prueba 1',
    description: 'Este es un producto prueba',
    price: 100,
    thumbnail: 'Sin imagen',
    stock: 100
  };
  await manager.addProduct(newProduct1);
  //producto2
  const newProduct2 = {
    title: 'producto prueba 2',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    stock: 200
  };
  await manager.addProduct(newProduct2);
  //producto3
  const newProduct3 = {
    title: 'producto prueba 3',
    description: 'Este es un producto prueba',
    price: 300,
    thumbnail: 'Sin imagen',
    stock: 300
  };
  await manager.addProduct(newProduct3);
  //producto4
  const newProduct4 = {
    title: 'producto prueba 4',
    description: 'Este es un producto prueba',
    price: 400,
    thumbnail: 'Sin imagen',
    stock: 400
  };
  await manager.addProduct(newProduct4);
  //producto5
  const newProduct5 = {
    title: 'producto prueba 5',
    description: 'Este es un producto prueba',
    price: 500,
    thumbnail: 'Sin imagen',
    stock: 500
  };
  await manager.addProduct(newProduct5);
  //producto6
  const newProduct6 = {
    title: 'producto prueba 6',
    description: 'Este es un producto prueba',
    price: 600,
    thumbnail: 'Sin imagen',
    stock: 600
  };
  await manager.addProduct(newProduct6);
  //producto7
  const newProduct7 = {
    title: 'producto prueba 7',
    description: 'Este es un producto prueba',
    price: 700,
    thumbnail: 'Sin imagen',
    stock: 700
  };
  await manager.addProduct(newProduct7);
  //producto8
  const newProduct8 = {
    title: 'producto prueba 8',
    description: 'Este es un producto prueba',
    price: 800,
    thumbnail: 'Sin imagen',
    stock: 800
  };
  await manager.addProduct(newProduct8);
  //producto9
  const newProduct9 = {
    title: 'producto prueba 9',
    description: 'Este es un producto prueba',
    price: 900,
    thumbnail: 'Sin imagen',
    stock: 900
  };
  await manager.addProduct(newProduct9);
  //producto10
  const newProduct10 = {
    title: 'producto prueba 10',
    description: 'Este es un producto prueba',
    price: 1000,
    thumbnail: 'Sin imagen',
    stock: 1000
  };
  await manager.addProduct(newProduct10);
  }
  
  products()