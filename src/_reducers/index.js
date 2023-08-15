import { combineReducers } from "redux";

import nav from "./nav";
import user from "./user";
import item from "./item";
import items from "./items";

const rootReducer = combineReducers({
    nav, user, item, items,
});

export default rootReducer;