import {IMAGE_INDEX, OPEN_lIGHT_SLIDER} from "../actions/actionTypes";

const initialState = {
    light_slider: false,
    imageIndex: 0
}

export default function light_slider_reducer(state = initialState, action){
    switch (action.type){
        case OPEN_lIGHT_SLIDER:
            return {
                light_slider: action.payload
            }
        case IMAGE_INDEX:
            return {
                imageIndex: action.payload
            }
        default:
            return state
    }

}