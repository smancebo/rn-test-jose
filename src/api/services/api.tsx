import axios from 'axios';
// Define the API root url

import { API_URL } from '../../helpers/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Platform, ToastAndroid } from 'react-native';

// Setup Axios Instance

const api = axios.create({
    baseURL: API_URL
});

// Automagically put OAuth token on requests if it exists

api.interceptors.request.use(async config =>  {
    const token = await AsyncStorage.getItem("apiToken");
    if (token) {
        config.headers["x-api-key"] = `${token}`;
    }
    return config;
});

api.interceptors.request.use(config => config, err => {
    if (!err.status) {
        if (Platform.OS === "android") {
            ToastAndroid.showWithGravity("There was an error, try again", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        } else {
            Alert.alert("Error", "There was an error, try again")
        }
    }
})

export default api;