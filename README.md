# GraphQL-Apollo-Project

Hello , Thank you fro visiting this project.
As name suggests that It is being made with apollo package for express to work with GraphQl
Now, here I have also uploaded the env file as it contains nothing serious so don't get
any funny idea :P

# installation

just do as usual `npm i` after cloning the repo

# queries to test
Query

`{
  products {
    description
  }
  productsByPrice(min: 10, max: 20) {
    description
    price
  }
  product(id: "blueshoe") {
    description
    reviews {
      comment
    }
  }
  orders {
    subtotal
    items {
      quantity
      product {
        name
        description
        price
        reviews {
          rating
          comment
        }
      }
    }
  }
}`

Mutations

`mutation {
  addNewProduct(id: "greenjacket", name: "Green Jacket", description: "jacket is green leather made", price: 80.99) {
    id
    name
    price
    reviews {
      rating
      comment
    }
  }
  shoereview: addNewProductReview(product_id: "redshoe", rating: 5, comment: "best shoe for rough usage") {
    rating
    comment
  }
  jacketreview: addNewProductReview(product_id: "greenjacket", rating: 5, comment: "best premium jacket feeling") {
    rating
    comment
  }
}`

# notes

1. I have only followed ESM methods to implement this as like other projects
2. it's only memory base project , no database included.

# Thank you and ciao :)
