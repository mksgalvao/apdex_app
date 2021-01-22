import { combineReducers } from "redux";
import ApplicationsReducer from "./applicationsReducer";

const rootReducer = combineReducers({
  applications: ApplicationsReducer,
});

export default rootReducer;
