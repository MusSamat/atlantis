import {FETCH_BUILDING2} from "../actions/actionTypes";


const initsialState = {
    build2: null
}

export default function fetch_building2(state = initsialState, action) {
    switch (action.type){
        case FETCH_BUILDING2:
            return {
                build2: action.payload
            }
        default:
            return state
    }
}