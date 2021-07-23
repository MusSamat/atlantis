import { FETCH_BUILDING2} from "./actionTypes";
import {setloading} from "./laod_action";
import AccessWithBack from "../../service/AccessWithBack";

export const getBuilding2 = (id) => (dispatch) => {
    dispatch(setloading(true))
    new AccessWithBack().getData("/api/main-building/" + id).then(res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_BUILDING2,
            payload: res
        })
    })
}
