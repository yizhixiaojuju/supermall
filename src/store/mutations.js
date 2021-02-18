import {ADD_COUNTER,ADD_TD_CART} from './mutation-type'

export default{
    [ADD_COUNTER](payload){
            payload.count++
       },
    [ADD_TD_CART](state,payload){
            payload.checked = true
            state.cartList.push(payload)
       } 
}     