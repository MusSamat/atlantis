import {FETCH_ARCHITECTUREITEMS2} from "../actions/actionTypes";


const initsialState = {
    archi2: null
}

export default function fetch_archi2(state = initsialState, action) {
    switch (action.type){
        case FETCH_ARCHITECTUREITEMS2:
            return {
                archi2: action.payload
            }
        default:
            return state
    }
}