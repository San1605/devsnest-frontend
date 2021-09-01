import { combineReducers } from "redux";
import weather from "./weather"
import weatherdata from "./weatherdata";
const rootReducer=combineReducers({
weather,
weatherdata,
})

export default rootReducer