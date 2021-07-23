import {FETCH_DESIGN2} from "../actions/actionTypes";


const initsialState = {
    design2: null
}

export default function fetch_design2(state = initsialState, action) {
    switch (action.type){
        case FETCH_DESIGN2:
            return {
                design2: action.payload
            }
        default:
            return state
    }
}