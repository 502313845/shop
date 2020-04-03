import ajax from './ajax'
const BASE_URL = '/api'
export const reqAddress = geohash => ajax('/api/position/' + geohash)

 export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')
 export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
 export const reqLogout = () => ajax(BASE_URL+'/logout')
 export const reqShopInfo = () => ajax('/info')

export const reqShopRatings = () => ajax('/ratings')

export const reqShopGoods = () => ajax('/goods')