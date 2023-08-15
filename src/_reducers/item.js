export const SAVE_ITEM_INFO = "ITEM/SAVE_ITEM_INFO";

export const saveItemInfo = (info) => ({type:SAVE_ITEM_INFO, info:info});

const initialState = {
    name: '제품명',
    price: 3000,
    tag: '인기',
    menuClass: '',
    stock: 100,
    orderType: 'delivery',
    quantity: 1,
    option: {},
    isChecked: true,
    imageUrl: '',
    detailImageUrl: [],
    intro: '',
    options: [],
    minimumOrderQuantity: 1,
    gradients: [],
    detail: '',
    purchaseable: true,
    id: '000',
}

const item = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ITEM_INFO:
            return {
                ...state,
                name: action.info.name,
                price: action.info.price,
                tag: action.info.tag,
                menuClass: action.info.menuClass,
                stock: action.info.stock,
                orderType: action.info.orderType,
                quantity: action.info.quantity,
                option: action.info.option,
                isChecked: action.info.isChecked,
                imageUrl: action.info.imageUrl,
                detailImageUrl: action.info.detailImageUrl,
                intro: action.info.intro,
                options: action.info.options,
                minimumOrderQuantity: action.info.minimumOrderQuantity,
                gradients: action.info.gradients,
                detail: action.info.detail,
                purchaseable: action.info.purchaseable,
                id: action.info._id,
            }
        default:
            return state;
    }
};

export default item;