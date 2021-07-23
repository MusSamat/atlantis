import {FETCH_ARCHITECTUREITEMS1, FETCH_ARCHITECTUREITEMS2} from "./actionTypes";
import {setloading} from "./laod_action";
import AccessWithBack from "../../service/AccessWithBack";

export const getArchitecture1 = (id) => (dispatch) => {
    dispatch(setloading(true))
    new AccessWithBack().getData("/api/main-architecture/" + id).then(res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_ARCHITECTUREITEMS1,
            payload: res
        })
    })
}
