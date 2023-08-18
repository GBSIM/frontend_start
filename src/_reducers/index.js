import { combineReducers } from "redux";

import nav from "./nav";
import user from "./user";
import item from "./item";
import items from "./items";
import order from "./order";

const rootReducer = combineReducers({
    nav, user, item, items, order
});

export default rootReducer;