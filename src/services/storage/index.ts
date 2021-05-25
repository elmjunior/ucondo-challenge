import AsyncStorage from "@react-native-async-storage/async-storage";

const isEmpty = (value: string) =>
  value === null || value === undefined || value === "";

export const setItem = async (key: string, value: any) => {
  if (isEmpty(value)) {
    await AsyncStorage.removeItem(key);
  } else {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
};

export const getItem = async (key: string) => {
  if (!isEmpty(key)) {
    const result = await AsyncStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  }
  return key;
};

export const removeItem = async (key: string) => {
  if (!isEmpty(key)) {
    const result = await AsyncStorage.removeItem(key);
    return result;
  }
  return key;
};

export const mergeItem = async (key: string, value: any) => {
  if (!isEmpty(value)) {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
    const result = await getItem(key);
    return result;
  }
  return value;
};
