const fs = require("fs/promises");
const path = require("path");
const { json } = require("stream/consumers");
const util = require("util");
const validateBase = require("./validator/product.validator");

const PATH = path.join(`${__dirname}/productos.json`)

class ProductManager{

    constructor(path) {
        this.path = path;
    }

    async validateProduct(product){
        return await validateBase(product)
    }

    async generateIndex(products){
        if(products.length === 0){
            return 1
        }else{
        return products[products.length - 1].id + 1
        }
    }
 
    async addProduct(product) {
        try{
            const validation = await this.validateProduct(product);
            console.log("ACAAAAAA")

            console.log(validation)
            const {title, price, thumbnail, code, stock} = product;

            /*if (this.products.findIndex((product) => product.code === productId)) {
                if (this.products.length === 0) {
                  product.id = 1;
                } else {
                  product.id = this.products[this.products.length - 1].id + 1;
                }
                this.products.push(product);
                }*/
            
            const productList = await this.getProducts();
            const { products } = productList;
            const newId = await this.generateIndex(products);

            const insertProduct = {
                id: newId,
                title,
                price,
                thumbnail,
                code,
                stock
            }

            productList.products.push(insertProduct)
            await fs.writeFile(this.path, JSON.stringify(productList))
            return insertProduct;

        }catch(error){
            console.log(error)
        }
    };
    

    async getProducts() {
        try {
            const info = await fs.readFile(this.path)
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
    const instance = new ProductManager(PATH)
    const listaProductos = await instance.getProducts();
    console.log(listaProductos)

    const productoPrueba ={
            //title: "iphone 14 pro",
            price: 50220,
            thumbnail: "/home/iphone11",
            code: 23121233,
            stock: 200
    };

    const nuevoProducto = await instance.addProduct(productoPrueba);
    console.log(nuevoProducto)

}catch(error) {
    console.log(error)
}
}

Producto()