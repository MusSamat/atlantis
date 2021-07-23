import {FETCH_BUILDING1} from "../actions/actionTypes";


const initsialState = {
    build1: null
}

export default function fetch_building1(state = initsialState, action) {
    switch (action.type){
        case FETCH_BUILDING1:
            return {
                build1: action.payload
            }
        default:
            return state
    }
}