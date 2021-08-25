import {FETCH_BUILDING_SECTION} from "./actionTypes";
import AccessWithBack from "../../service/AccessWithBack";
import {getBuilding1} from "./building1_actions";
import {getBuilding2} from "./building2_actions";

export const getBuildingSectionItems = () => (dispatch) => {
    new AccessWithBack().getData("/api/main-building").then(res => {
        res.map((item, i) => {
            if(i === 0){
                dispatch(getBuilding1(item.id))
            }
        })
        res.filter((item, i) => i === 4 ? item : null).map((item, i) => {
            dispatch(getBuilding2(item.id))
        })
        dispatch({
            type: FETCH_BUILDING_SECTION,
            payload: res
        })
    })
}