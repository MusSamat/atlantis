import {LOAD} from "../actions/actionTypes";

const initsialState = {
    load: true
}

export default function loadreducer(state = initsialState, action){
    switch (action.type){
        case LOAD:
            return {
                load: action.payload
            }
    default:
            return state
    }

}