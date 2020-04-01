import {RECEIVE_ADDRESS} from './mutation-types'
import {reqAddress} from '../api'

export default{
    
    async getAddress({commit, state}) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        commit(RECEIVE_ADDRESS, {address: result.data})
        },
        
}