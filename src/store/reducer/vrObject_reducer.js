import {VR_OBJECT} from "../actions/actionTypes";

const initsialState = {
    vrObject: null
}

export default function vrObjectReducer(state = initsialState, action){
    switch (action.type){
        case VR_OBJECT:
            return {
                vrObject: action.payload
            }
        default:
            return state
    }
}