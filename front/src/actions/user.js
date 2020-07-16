export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const SIGN_IN = 'SIGN_IN';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_AUTHENTICATION = 'CHECK_AUTHENTICATION';
export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const LOG_IN_USER = 'LOG_IN_USER';

export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

export const signIn = () => ({
  type: SIGN_IN,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (data, isAuthenticated) => ({
  type: SAVE_USER,
  data,
  isAuthenticated,
});

export const checkAuthentication = () => ({
  type: CHECK_AUTHENTICATION,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const logOutUser = () => ({
  type: LOG_OUT_USER,
});

export const logInUser = () => ({
  type: LOG_IN_USER,
});
