
const initialState = {
    userLoginData: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_LOGIN_DATA':
            return {
                ...state,
                userLoginData: [...state.userLoginData, action.payload]
                // action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                userLoginData: null,
            };
        default:
            return state;
    }
};

export default userReducer;