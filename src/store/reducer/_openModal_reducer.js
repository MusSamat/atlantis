import {OPEN_MODAL} from "../actions/actionTypes";

const initsialState = {
    openModal: false
}

export default function openModalReducer(state = initsialState, action){
    switch (action.type){
        case OPEN_MODAL:
            return {
                openModal: action.payload
            }
        default:
            return state
    }

}