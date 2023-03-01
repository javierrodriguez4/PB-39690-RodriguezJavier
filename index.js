const fs = require("fs/promises");
const path = require("path");
const { json } = require("stream/consumers");
const util = require("util");

const ruta = path.join(`${__dirname}/productos.json`)

class ProductManager{

    constructor() {
        this.products = [];
    }
 
    async addProduct(producto, precio, imgPath, productId, stock) {
        try{
            const {producto, precio, imgPath, productId, stock} = product;
            this.id= 0;
            this.title= producto;
            this.price= precio;
            this.thumbnail= imgPath;
            this.code= productId;
            this.stock= stock;

            if (this.products.findIndex((product) => product.code === productId)) {
                if (this.products.length === 0) {
                  product.id = 1;
                } else {
                  product.id = this.products[this.products.length - 1].id + 1;
                }
                this.products.push(product);
                }
            
            
                
        }catch(error){
            console.log(error)
        }
    };
    

    async getProducts() {
        try {
            const info = await fs.readFile(ruta)
            return JSON.parse(info);
        }catch (error){
            console.log(error)
        }
          };
    getProductById = (id) => {
            const res = this.products.filter((product) => product.id === id);
            if (res.length === 0) {
              return 'Product not Found';
            }
            return res;
        }
    }

//Test


const Producto = async () => {

try{
    console.log("ejecutando producto")
    const test = new ProductManager()
    const listaProductos = await test.getProducts();
    console.log(listaProductos)

    const productoPrueba ={
            id: 1,
            title: "iphone 11 pro",
            price: 500,
            thumbnail: "/home/iphone11",
            code: 23123,
            stock: 2
    };

    const nuevoProducto = test.getProducts(productoPrueba);

}catch(error) {
    console.log(error)
}
}

Producto()