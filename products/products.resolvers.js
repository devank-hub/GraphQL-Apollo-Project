import * as productModel from './product.model.js';

export default{
    Query:{
        products: () => {
            return productModel.getAllProducts();
        },
        productsByPrice: (_, args) => {
            return productModel.getProductsByPrice(args.min, args.max);
        },
        product: (_, args) => {
            return productModel.getProductById(args.id);
        }
    },
    Mutation:{
        addNewProduct: (_, args) => {
            return productModel.addNewProduct(args.id, args.name, args.description, args.price);
        },
        addNewProductReview: (_, args) => {
            return productModel.addNewProductReview(args.product_id, args.rating, args.comment);
        }
    }
}