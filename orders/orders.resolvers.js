import * as ordertModel from './order.model.js';

export default{
    Query:{
        orders: () => {
            return ordertModel.getAllOrders();
        }
    }
}