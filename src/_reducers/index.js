import { combineReducers } from "redux";

import nav from "./nav";
import user from "./user";
import item from "./item";

const rootReducer = combineReducers({
    nav, user, item
});

export default rootReducer;