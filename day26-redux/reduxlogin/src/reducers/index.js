import { combineReducers } from "redux";
import formU from "./formU"
import formE from "./formE"

const rootReducer=combineReducers({
    formE,
    formU
})

export default rootReducer