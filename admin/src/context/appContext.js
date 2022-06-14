import React, { useReducer, useContext } from "react";
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
  TOGGLE_SHOPPINGCART,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  SET_SHOWMODAL,
  SET_MODALCONTENT,
} from "./action";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

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
  showShoppingCart: false,
  shoppingCart: [],
  showModal: false,
  modalContent: null,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        console.log(error.response);
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

  const setShowSidebar = (bool) => {
    dispatch({ type: SET_SHOWSIDEBAR, payload: bool });
  };

  const setShowModal = (bool) => {
    dispatch({ type: SET_SHOWMODAL, payload: bool });
  };

  const setModalContent = (content) => {
    dispatch({ type: SET_MODALCONTENT, payload: content });
  };

  const toggleShoppingCart = () => {
    dispatch({ type: TOGGLE_SHOPPINGCART });
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

  const createProduct = async (newProduct) => {
    dispatch({ type: CREATE_PRODUCT_BEGIN });
    try {
      const { data } = await authFetch.post(`/products`, newProduct);
      const { product } = data;

      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: product.name,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CREATE_PRODUCT_ERROR,
      });
    }
    displayAlert();
  };

  const logoutUser = () => {
    removeUserFromLocalStorage();
    dispatch({ type: LOGOUT_USER });
    window.location.href = "/register";
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
        createProduct,
        toggleShoppingCart,
        setModalContent,
        setShowModal,
        setShowSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export { AppProvider };
