import { FETCH_BUILDING1} from "./actionTypes";
import {setloading} from "./laod_action";
import AccessWithBack from "../../service/AccessWithBack";

export const getBuilding1 = (id) => (dispatch) => {
    dispatch(setloading(true))
    new AccessWithBack().getData("/api/building/" + id).then(res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_BUILDING1,
            payload: res
        })
    })
}
