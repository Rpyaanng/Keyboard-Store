import {
  DISPLAY_ALERT,
  DISPLAY_CUSTOM_ALERT,
  TOGGLE_SHOPPINGCART,
  SET_SHOWMODAL,
  SET_MODALCONTENT,
  SET_SHOWSIDEBAR,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
} from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
      };
    case DISPLAY_CUSTOM_ALERT:
      return {
        ...state,
        showAlert: true,
        alertText: action.payload.alertText,
        alertType: action.payload.alertType,
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertText: "",
        alertType: "",
      };
    case SETUP_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case SETUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,

        alertText: action.payload.alertText,
        alertType: "success",
      };
    case SETUP_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        alertText: action.payload,
        alertType: "danger",
      };
    case UPDATE_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        alertType: "success",
        alertText: "User Profile Updated!",
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        alertText: "Please provide all values",
        alertType: "danger",
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        token: null,
        alertText: "You have been logged out!",
        alertType: "success",
      };
    case CREATE_PRODUCT_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alertText: `${action.payload} Created!`,
        alertType: "success",
      };
    case CREATE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        alertText: "Please provide all values",
        alertType: "danger",
      };
    case SET_SHOWSIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      };
    case SET_SHOWMODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case SET_MODALCONTENT:
      return {
        ...state,
        modalContent: action.payload,
      };
    case TOGGLE_SHOPPINGCART:
      return {
        ...state,
        showShoppingCart: !state.showShoppingCart,
      };
    default:
      throw new Error(`no such action : ${action.type}`);
  }
};

export default reducer;
