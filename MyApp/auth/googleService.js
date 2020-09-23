import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import * as AsynStore from '../async-storage/asyncStore'
import * as LoginService from './loginService'

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    await LoginService.login(userInfo.idToken, userInfo.user.email);
  } 
  catch (error) {

    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log("SIGN_IN_CANCELLED");
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log("IN_PROGRESS");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log("PLAY_SERVICES_NOT_AVAILABLE");
    } else {
      console.log("error inesperado en Google service signIn.");
    }
  }
};

const getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    return userInfo;
  }
  catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      console.log("SIGN_IN_REQUIRED");
    } else {
      console.log("error en getCurrentUserInfo");
    }
  }
};

const isSignedIn = async () => {
  try {
    const isSignedIn = await GoogleSignin.isSignedIn();
    return isSignedIn;
  }
  catch {
    console.log("error en isSignedIn");
  }
};

const getCurrentUser = async () => {
  try {
    const currentUser = await GoogleSignin.getCurrentUser();
    return currentUser;
  }
  catch {
    console.log("error en getCurrentUser");
  }
};

const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await AsynStore.clearAll();
  } catch (error) {
    console.log('error en signOut');
  }
};

const revokeAccess = async () => {
  try {
    await GoogleSignin.revokeAccess();
    console.log('deleted');
  } catch (error) {
    console.log(error);
  }
};

const hasPlayServices = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // google services are available
  } catch (err) {
    console.error('play services are not available');
  }
}

export { signOut, getCurrentUser, signIn, isSignedIn, getCurrentUserInfo }