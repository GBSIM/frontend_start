export const SAVE_ORDER = "ORDER/SAVE_ORDER";

export const saveOrder = (orders) => ({type:SAVE_ORDER, orders:orders});

const initialState = {
    orders: [
        {
            menus: [
                {
                    name: '제품명1',
                    price: 30000,
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
                        {name: '1호', price: 30000},
                        {name: '2호', price: 40000},
                    ],
                    minimumOrderQuantity: 1,
                    gradients: [],
                    detail: '',
                    purchaseable: true,
                    id: '000',
                },
                {
                    name: '제품명2',
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
                    options: [
                        {name: '1호', price: 30000},
                        {name: '2호', price: 40000},
                    ],
                    minimumOrderQuantity: 1,
                    gradients: [],
                    detail: '',
                    purchaseable: true,
                    id: '000',
                }
            ],
            customer: {
                _id: '000',
                name: '장원영',
                phone: '010-1241-1201',
                email: 'abcd@gmail.com'
            },
            shipping: {
                _id: '125125',
                name: '안유진',
                phone: '010-0125-1251',
                basicAddress: '경기도 화성시 시청로102번길 11',
                detailAddress: '205동 1102호',
                postalCode: '00406',
                request: '',
                tag: '배송지',
                userId: '0102',
            },
            mileageUse: 0,
            presentDate: '',
            presentTime: '',
            deliveryDate: '',
            pickupDate: '',
            pickupTime: '',
            type: 'delivery',
            status: '결제완료',
            orderPrice: 33000,
            payedMoney: 33000,
            orderId: '1251251251',
            receipt: '',    
            paymentKey: '',
            deliveryId: '1251251',
            _id: '01010',
        }
    ],
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ORDER:
            return {
                ...state,
                orders: action.orders
            }
        default:
            return state;
    }
};

export default order;