import { ADD_PRODUCT } from '../../common/constants/actionType';


export function addProducts(payload) {
    return { type: ADD_PRODUCT, payload: payload }
}
