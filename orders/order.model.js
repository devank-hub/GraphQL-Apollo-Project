const orders =
[
    {
        order_id: 'order1',
        date: '2018-01-01',
        subtotal: 109.9,
        items: [
            {
                product: {
                    id: 'redshoe',
                    name: 'Red Shoe',
                    description: 'red colored shoe',
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
                quantity: 10,
            }
        ]
    },
    {
        order_id: 'order2',
        date: '2018-01-02',
        subtotal: 107.92,
        items: [
            {
                product: {
                    id: 'blueshoe',
                    name: 'Blue Shoe',
                    description: 'blue colored shoe',
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
                },
                quantity: 2,
            },
            {
                product: {
                    id: 'redshoe',
                    name: 'Red Shoe',
                    description: 'red colored shoe',
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
                quantity: 6,
            }
        ]
    }
];

function getAllOrders() {
    return orders;
}

export{
    getAllOrders,
}