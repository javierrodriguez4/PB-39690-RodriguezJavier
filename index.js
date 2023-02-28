class ProductManager{

    constructor() {
        this.products = [];
    }
 
    addProduct = (producto, precio, imgPath, productId, stock) => {
        const product = {
            id: 0,
            title: producto,
            price: precio,
            thumbnail: imgPath,
            code: productId,
            stock: stock,
        };
    
    if (this.products.findIndex((product) => product.code === productId)) {
        if (this.products.length === 0) {
          product.id = 1;
        } else {
          product.id = this.products[this.products.length - 1].id + 1;
        }
        this.products.push(product);
        }
    }
    getProducts = () => {
            return this.products;
          };
    getProductById = (id) => {
            const res = this.products.filter((product) => product.id === id);
            // console.log(res);
            if (res.length === 0) {
              return 'Product not Found';
            }
            return res;
    };
}
