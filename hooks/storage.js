import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageKeys = {
  token: 'token',
  user: 'user',
  authUser: 'authUser',
};

export const setItemInStorage = async (key, data) => {
  try {
   await AsyncStorage.setItem(key, data);
  } catch (error) {
    return null;
  }
};

export const getItemFromStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null
  }
};

export const removeStoreItem = key => {
  try {
    return AsyncStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

export const setObjectInStore = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return null;
  }
};

export const getObjectFromStore = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      if (key == 'token') {
        return value
      }
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const storeMultiDelete = keyArray => {
  try {
    return AsyncStorage.multiRemove(keyArray);
  } catch (error) {
    return null;
  }
};
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    return null;
  }
};