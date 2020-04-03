import {RECEIVE_ADDRESS} from './mutation-types'
import {RECEIVE_USER_INFO,RESET_USER_INFO,RECEIVE_INFO,RECEIVE_RATINGS,RECEIVE_GOODS} from './mutation-types'
export default{
    [RECEIVE_ADDRESS](state,{address}){
        state.address=address


    },
    [RECEIVE_USER_INFO](state,{userInfo}){
        state.userInfo=userInfo


    },
   [RESET_USER_INFO](state){

    state.userInfo={}
   },
   [RECEIVE_INFO](state, {info}) {
    state.info = info
    },
    [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
    },
    [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
    },
    

}