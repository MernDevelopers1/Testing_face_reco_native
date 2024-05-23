import AsyncStorage from '@react-native-async-storage/async-storage';

// Getter function
export default async function getItemFromStorage(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting data from AsyncStorage:', error);
    return null;
  }
}


export async function setItemInStorage(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error setting data in AsyncStorage:', error);
  }
}