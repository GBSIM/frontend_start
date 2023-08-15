export const SAVE_ITEM_LIST = "ITEMS/SAVE_ITEM_LIST";

export const saveItemList = (list) => ({type:SAVE_ITEM_LIST, list:list});

const initialState = {
    itemList: [
        {
            name: '제품 그룹1',
            intro: '소개',
            menus: [
                {
                    name: '제품명1',
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
                    purchaseable: false,
                    id: '000',
                },
                {
                    name: '제품명2',
                    price: 5000,
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
                    minimumOrderQuantity: 5,
                    gradients: [],
                    detail: '',
                    purchaseable: true,
                    id: '001',
                },
            ],
            orderType: 'delivery',
            priority: 0,
        },
        {
            name: '제품 그룹2',
            intro: '소개',
            menus: [
                {
                    name: '제품명3',
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
                    id: '002',
                },
                {
                    name: '제품명4',
                    price: 45000,
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
                    options: [
                        {name: '옵션1', price: 45000},
                        {name: '옵션2', price: 52000},
                    ],
                    minimumOrderQuantity: 5,
                    gradients: [],
                    detail: '',
                    purchaseable: true,
                    id: '003',
                },
            ],
            orderType: 'delivery',
            priority: 0,
        }
    ],
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