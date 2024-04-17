import { Alert } from "react-native";
import { setItemInStorage } from "../hooks/storage";
import { errorMessage } from "../modules/libs/helper";
import { setUser, setUserError, setUserLoading } from "../redux/slice/userSlice";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginUser = (payload, login) => {
  if (payload !== undefined) {
    // const response = await axios.post(`${ApiConfig.login}`, payload);
    // return response;
    return async (dispatch) => {
      try {
        dispatch(setUserLoading(true));
        const resp = await axios.post(`http://ec2-3-13-60-11.us-east-2.compute.amazonaws.com:3005/api/v1/users/signin`, { user: { ...payload, platform: 'web' } });
        if (resp?.status >= 200 && resp?.status < 300) {
          await AsyncStorage.setItem('token', resp?.data?.auth_token);
          // await AsyncStorage.setItem('isSignIn', "true");
          await login(resp.data.user);
          await dispatch(setUser(resp.data.user));
          dispatch(setUserLoading(false));
          // Alert.alert(resp.data.message);
        } else {
          throw resp
        }
      } catch (e) {
        console.log(e, "jkgcjhvhjvhjgvhncgvhy")
        dispatch(
          setUserError({
            isError: true,
            message: errorMessage(e),
          }),
        );
        dispatch(setUserLoading(false));
        Alert.alert(errorMessage(e));
      }
    };
  }
};