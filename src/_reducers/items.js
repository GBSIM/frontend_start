export const SAVE_ITEM_LIST = "ITEMS/SAVE_ITEM_LIST";

export const saveItemList = (list) => ({type:SAVE_ITEM_LIST, list:list});

const initialState = {
    itemList: [],
}

const items = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ITEM_LIST:
            return {
                ...state,
                itemList: action.list,
            }
        default:
            return state;
    }
};

export default items;