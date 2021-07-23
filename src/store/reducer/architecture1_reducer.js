import {FETCH_ARCHITECTUREITEMS1} from "../actions/actionTypes";


const initsialState = {
    archi1: null
}

export default function fetch_archi1(state = initsialState, action) {
    switch (action.type){
        case FETCH_ARCHITECTUREITEMS1:
            return {
                archi1: action.payload
            }
        default:
            return state
    }
}