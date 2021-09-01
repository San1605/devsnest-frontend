import { combineReducers } from "redux"
import notes from "./counter"

const rootReducer=combineReducers({
   notes
})
export type reducerType =ReturnType<typeof rootReducer>
export default rootReducer