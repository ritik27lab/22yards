export const setUserLoginData = (userData: any) => {
    return {
        type: 'SET_USER_LOGIN_DATA',
        payload: userData,
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};
