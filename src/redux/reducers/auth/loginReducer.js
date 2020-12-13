import { ACTION_TYPES } from "../../../constants/ActionTypes";

const initialState = {
  successResponse: null,
  errorResponse: null,
  isLogin: false
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_WITH_EMAIL": {
      return { ...state, values: action.payload }
    }
    case "LOGIN_WITH_FB": {
      return { ...state, values: action.payload }
    }
    case "LOGIN_WITH_TWITTER": {
      return { ...state, values: action.payload }
    }
    case "LOGIN_WITH_GOOGLE": {
      return { ...state, values: action.payload }
    }
    case "LOGIN_WITH_GITHUB": {
      return { ...state, values: action.payload }
    }
    case "LOGIN_WITH_JWT": {
      return { ...state, values: action.payload }
    }
    case "LOGOUT_WITH_JWT": {
      return { ...state, values: action.payload }
    }
    case "LOGOUT_WITH_FIREBASE": {
      return { ...state, values: action.payload }
    }
    // ==============MULTITENANT-JWT==================
    case ACTION_TYPES.LOGIN_WITH_JWT_MULTITENANT_SUCCESS: {
      const loginResp = {
        ...action.payload,
      };
      return { ...state, successResponse: loginResp, isLogin: true }
    }

    case ACTION_TYPES.LOGIN_WITH_JWT_MULTITENANT_FAIL: {
      const errorResp = {
        ...action.payload,
      };
      return { ...state, errorResponse: errorResp }
    }

    default: {
      return state
    }
  }
}
