import  {combineReducers} from "redux";
import loadreducer from "./load_reducer";
import fetch_archi1 from "./architecture1_reducer";
import fetch_archi2 from "./architecture2_reducer";
import fetch_building1 from "./building1_reducer";
import fetch_building2 from "./building2_reducer";
import fetch_design1 from "./design1_reducer";
import fetch_design2 from "./design2_reducer";
import fetch_buildingItems from "./buildingSectionReducer";
import openModalReducer from "./_openModal_reducer";

export default combineReducers({
    load: loadreducer,
    archi1: fetch_archi1,
    archi2: fetch_archi2,
    build1: fetch_building1,
    build2: fetch_building2,
    design1: fetch_design1,
    design2: fetch_design2,
    buildingItems: fetch_buildingItems,
    openModal: openModalReducer
})