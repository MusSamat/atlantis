import {FETCH_DESIGN1} from "../actions/actionTypes";


const initsialState = {
    design1: null
}

export default function fetch_design1(state = initsialState, action) {
    switch (action.type){
        case FETCH_DESIGN1:
            return {
                design1: action.payload
            }
        default:
            return state
    }
}