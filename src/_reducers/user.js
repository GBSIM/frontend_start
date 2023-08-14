export const SAVE_USER_INFO = "USER/SAVE_USER_INFO";
export const LOGIN = "USER/LOGIN";
export const LOGOUT = "USER/LOGOUT";

export const saveUserInfo = (info) => ({type:SAVE_USER_INFO, info:info});
export const login = () => ({type:LOGIN});
export const logout = () => ({type:LOGOUT});

const initialState = {
    isLogined: false,
    name: "이름",
    email: "abcd@mgail.com",
    phone: "010-0000-0000",
    class: 0,
    socialId: "abcdabcd",
    shippings: [],
    orders: [],
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