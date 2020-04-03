import {RECEIVE_ADDRESS} from './mutation-types'
import {reqAddress,reqUserInfo, reqLogout,reqShopGoods,reqShopInfo,reqShopRatings} from '../api'
import {RECEIVE_USER_INFO,RESET_USER_INFO,RECEIVE_GOODS,RECEIVE_INFO,RECEIVE_RATINGS,} from './mutation-types'

export default{
    
    async getAddress({commit, state}) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        commit(RECEIVE_ADDRESS, {address: result.data})
        },

        recordUser({commit},userInfo){
            commit(RECEIVE_USER_INFO,{userInfo})

        },
       async getUserInfo({commit}){
            const result=await reqUserInfo()
            if(result.code===0){
                const userInfo=result.data
                commit(RECEIVE_USER_INFO,{userInfo})
            }

        },
        async logout({commit}){
            const result=await reqLogout()
            if(result.code===0){
                
                commit(RESET_USER_INFO)
            }

        },
        async getShopInfo({commit}, cb) {
            const result = await reqShopInfo()
            if(result.code===0) {
            const info = result.data
            info.score = 3.5
            commit(RECEIVE_INFO, {info})
            cb && cb()
            }
            },
            async getShopRatings({commit}, cb) {
                const result = await reqShopRatings()
if(result.code===0) {
const ratings = result.data
commit(RECEIVE_RATINGS, {ratings})
cb && cb()
}
},
async getShopGoods({commit}, cb) {
    const result = await reqShopGoods()
    if(result.code===0) {
    const goods = result.data
    commit(RECEIVE_GOODS, {goods})
    
    cb && cb()
        }
    },
    
    
        
}