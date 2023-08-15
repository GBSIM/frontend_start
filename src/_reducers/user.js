export const SAVE_USER_INFO = "USER/SAVE_USER_INFO";
export const LOGIN = "USER/LOGIN";
export const LOGOUT = "USER/LOGOUT";

export const saveUserInfo = (info) => ({type:SAVE_USER_INFO, info:info});
export const login = () => ({type:LOGIN});
export const logout = () => ({type:LOGOUT});

const initialState = {
    isLogined: true,
    name: "이름",
    email: "abcd@mgail.com",
    phone: "010-0000-0000",
    class: 0,
    socialId: "abcdabcd",
    shippings: [
        {
            name: '장원영',
            phone: '010-0001-0002',
            basicAddress: '경기도 화성시 시청로 102번길 11',
            detailAddress: '205동 1604호',
            request: '문 앞에 놔주세요.',
            tag: '배송지',
            userId: '000',
            postalCode: '00406',
        },
        {
            name: '김진아',
            phone: '010-0001-0003',
            basicAddress: '경기도 화성시 시청로 102번길 11',
            detailAddress: '205동 1104호',
            request: '문 앞에 놔주세요.',
            tag: '배송지',
            userId: '000',
            postalCode: '00406',
        },
    ],
    orders: [],
    deliveryCart: [
        
            
    ],
    pickupCart: [],
    presentCart: [],
    likes: [],
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_INFO:
            return {
                ...state,
                name: action.info.name,
                email: action.info.email,
                phone: action.info.phone,
                class: action.info.class,
                socialId: action.info.socialId,
                shippings: action.info.shippings,
                orders: action.info.orders,
                likes: action.info.likes,
                deliveryCart: action.info.deliveryCart,
                pickupCart: action.info.pickupCart,
                presentCart: action.info.presentCart,
            }
        case LOGIN:
            return {
                isLogined: true,
            }
        case LOGOUT:
            return {
                isLogined: false,
            }
        default:
            return state;
    }
};

export default user;