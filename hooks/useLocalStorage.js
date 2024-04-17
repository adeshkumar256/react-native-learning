import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const getValueFromStorage = async (key, defaultValue) => {
  try {
    const savedValue = await AsyncStorage.getItem(key);
    if (savedValue && savedValue !== null) {
      return JSON.parse(savedValue)
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue
    }
  } catch (error) {
    return defaultValue
  }


}
export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    return getValueFromStorage(keyName, defaultValue)
  });
  
  const setValue = async (newValue) => {
    try {
      await AsyncStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) { }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};