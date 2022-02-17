import { createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import history from "../utils/history";

const initialState = localStorageService.getAccessToken()
    ? {
          auth: { userId: localStorageService.getUserId() },
          currentUser: { email: localStorageService.getEmail() },
          isLoggedIn: true,
          isAdmin: { isAdmin: localStorageService.getIsAdmin() },
          error: null,
      }
    : {
          auth: null,
          currentUser: null,
          isLoggedIn: false,
          isAdmin: false,
          error: null,
      };

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        authRequested: (state) => {
            state.error = null;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userLogIn: (state, action) => {
            state.currentUser = action.payload;
        },
        userIsAdmin: (state) => {
            state.isAdmin = true;
        },
        userLoggedOut: (state) => {
            state.isLoggedIn = false;
            state.auth = null;
        },
    },
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    authRequested,
    authRequestSuccess,
    authRequestFailed,
    userLogIn,
    userLoggedOut,
    userIsAdmin,
} = actions;

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.register(payload);
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess({ userId: data.userId }));
        const { email } = payload;
        localStorageService.setEmail(email);
        dispatch(userLogIn(email));
        if (email === "admin@mail.ru") {
            localStorageService.setIsAdmin();
            dispatch(userIsAdmin());
        }
        history.push("/");
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const logIn = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.logIn(payload);
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess({ userId: data.userId }));
        const { email } = payload;
        localStorageService.setEmail(email);
        dispatch(userLogIn(email));
        if (email === "admin@mail.ru") {
            localStorageService.setIsAdmin();
            dispatch(userIsAdmin());
        }
        history.push("/");
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
    history.push("/");
};

export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getCurrentUser = () => (state) => state.users.currentUser?.email;
export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const isAdmin = () => (state) => state.users.isAdmin;

export default usersReducer;
