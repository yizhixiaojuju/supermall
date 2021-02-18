import {ADD_COUNTER,ADD_TD_CART} from './mutation-type'

export default{
        addCart(context,payload){
           return new Promise((resolve,reject) =>{
                //查找之前数组中是否有商品
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            // 判断oldProduct
            if (oldProduct) {
                // oldProduct.count += 1
                context.commit(ADD_COUNTER,oldProduct)
                resolve('加了一件商品')
            }else{
                payload.count = 1
                // context.state.cartList.push(payload)
                context.commit(ADD_TD_CART,payload)
                resolve('加了一件新商品')
            }
           })
            
        }
    }