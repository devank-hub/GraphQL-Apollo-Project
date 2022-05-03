const products = 
[
    {
        id: 'redshoe',
        name: 'Red Shoe',
        description: 'shoe\'\s color is red ',
        reviews: [
            {
                product_id: 'redshoe',
                rating: 4,
                comment: 'I love this shoe as it is of good quality being cheap'
            },
            {
                product_id: 'redshoe',
                rating: 5,
                comment: 'cheap but good quality'
            }
        ],
        price: 10.99,
    },
    {
        id: 'blueshoe',
        name: 'Blue Shoe',
        description: 'shoe\'\s color is blue ',
        reviews: [
            {
                product_id: 'blueshoe',
                rating: 4.5,
                comment: 'I love this shoe as it is of good quality'
            },
            {
                product_id: 'blueshoe',
                rating: 5,
                comment: 'Pricey and very good quality'
            }
        ],
        price: 20.99,
    }
];

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => { return product.price >= min && product.price <= max });
}

function getProductById(id) {   
    return products.find((product) => { return product.id === id });
}

function addNewProduct(id, name, description, price) {
    const newProduct = {
        id: id,
        name: name,
        description: description,
        reviews: [],
        price: price,
    }
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(product_id, rating, comment) {
    const product = getProductById(product_id);
    if(product)
    {
        const newReview = {
            product_id: product_id,
            rating: rating,
            comment: comment,
        };
        product.reviews.push(newReview);
        return newReview;
    }
    
}

export{
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview,
}