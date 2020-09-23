import AsyncStorage from '@react-native-community/async-storage';


const storeStringData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log('error en storeStringData');
  }
}

const storeObjectData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log('errore en storeObjectData');
  }
}

const getStringData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
}

const getObjectData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('errore en getObjectData');
  }
}

const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log('errore en removeValue');
  }
}

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    // clear error
  }
}

export { storeStringData, storeObjectData, getStringData, getObjectData, removeValue, clearAll }