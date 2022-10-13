import React, { useReducer, useContext, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";
import {
  DISPLAY_ALERT,
  DISPLAY_CUSTOM_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  SET_SHOWSIDEBAR,
  SET_SHOPPINGCART,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  SET_SHOPPINGCART_ITEM,
  DELETE_SHOPPINGCART_ITEM,
  SET_ISMAINPAGE,
  TOGGLE_LIGHTMODE,
} from "./action";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const shoppingCart = localStorage.getItem("shoppingCart");
const showShoppingCart = localStorage.getItem("showShoppingCart");
const isLightMode = window.localStorage.getItem("isLightMode");

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  alertId: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: null,
  showSidebar: false,
  showShoppingCart: showShoppingCart ? JSON.parse(showShoppingCart) : false,
  shoppingCart: shoppingCart ? JSON.parse(shoppingCart) : {},
  isMainPage: false,
  isLightMode: isLightMode ? JSON.parse(isLightMode) : false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Saves shoppingCart on change
  useEffect(() => {
    saveShoppingCartToLocalStorage(state.shoppingCart);
  }, [state.shoppingCart]);

  // Stores showShoppingCart on Save
  useEffect(() => {
    localStorage.setItem("showShoppingCart", state.showShoppingCart);
    console.log(state.showShoppingCart);
  }, [state.showShoppingCart]);

  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const saveShoppingCartToLocalStorage = (shoppingCart) => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  };

  const setShowSidebar = (bool) => {
    dispatch({ type: SET_SHOWSIDEBAR, payload: bool });
  };

  const setShoppingCart = (bool) => {
    dispatch({ type: SET_SHOPPINGCART, payload: { bool: bool } });
  };

  const displayCustomAlert = (alertText, alertType) => {
    dispatch({
      type: DISPLAY_CUSTOM_ALERT,
      payload: { alertText, alertType },
    });
    clearAlert();
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 5000);
  };

  const setupUser = async (currentUser, endpoint, alertText) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const response = await axios.post(
        `/api/v1/auth/${endpoint}`,
        currentUser
      );
      const { user, token } = await response.data;

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText: alertText },
      });
      addUserToLocalStorage({ user, token });

      setTimeout(() => {}, 3000);
    } catch (error) {
      dispatch({ type: SETUP_USER_ERROR, payload: error.response.data.msg });
    }
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch(`auth/updateUser`, currentUser);
      const { user, token } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({ type: UPDATE_USER_ERROR, payload: error.response.data.msg });
      }
    }
    clearAlert();
  };

  const logoutUser = () => {
    removeUserFromLocalStorage();
    dispatch({ type: LOGOUT_USER });
    window.location.href = "/register";
  };

  const setShoppingCartItem = (id, values) => {
    dispatch({
      type: SET_SHOPPINGCART_ITEM,
      payload: { id: id, object: values },
    });
  };

  const deleteShoppingCartItem = (id) => {
    dispatch({
      type: DELETE_SHOPPINGCART_ITEM,
      payload: { id: id },
    });
  };

  const toggleLightMode = () => {
    console.log("toggling");
    localStorage.setItem("isLightMode", !state.isLightMode);
    dispatch({
      type: TOGGLE_LIGHTMODE,
    });
  };

  const setMainPage = (bool) => {
    dispatch({
      type: SET_ISMAINPAGE,
      payload: { bool: bool },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        displayCustomAlert,
        setupUser,
        logoutUser,
        updateUser,
        setShoppingCart,
        setShowSidebar,
        setShoppingCartItem,
        deleteShoppingCartItem,
        setMainPage,
        toggleLightMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export { AppProvider };
