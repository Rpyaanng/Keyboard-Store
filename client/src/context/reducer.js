import {
  DISPLAY_ALERT,
  DISPLAY_CUSTOM_ALERT,
  TOGGLE_SHOPPINGCART,
  SET_SHOWSIDEBAR,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
  SET_SHOPPINGCART_ITEM,
  DELETE_SHOPPINGCART_ITEM,
  SET_ISMAINPAGE,
  TOGGLE_LIGHTMODE,
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
    case SET_SHOWSIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      };
    case TOGGLE_SHOPPINGCART:
      return {
        ...state,
        showShoppingCart: !state.showShoppingCart,
      };
    case SET_SHOPPINGCART_ITEM:
      return {
        ...state,
        shoppingCart: {
          ...state.shoppingCart,
          [action.payload.id]: action.payload.object,
        },
      };
    case DELETE_SHOPPINGCART_ITEM:
      return {
        ...state,
        shoppingCart: Object.keys(state.shoppingCart)
          .filter((key) => key !== action.payload.id)
          .reduce((object, key) => {
            return Object.assign(object, {
              [key]: state.shoppingCart[key],
            });
          }, []),
      };
    case SET_ISMAINPAGE:
      return {
        ...state,
        isMainPage: action.payload.bool,
      };
    case TOGGLE_LIGHTMODE:
      return {
        ...state,
        isLightMode: !state.isLightMode,
      };
    default:
      throw new Error(`no such action : ${action.type}`);
  }
};

export default reducer;
