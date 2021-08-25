import {FETCH_BUILDING_SECTION} from "../actions/actionTypes";

const initsialState = {
    buildingItems: null
}

export default function fetch_buildingItems(state = initsialState, action) {
    switch (action.type){
        case FETCH_BUILDING_SECTION:
            return {
                buildingItems: action.payload
            }
        default:
            return state
    }
}