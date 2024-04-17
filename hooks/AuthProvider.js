import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { clearStorage } from "./storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [isSignIn, setSignInUser] = useLocalStorage("signIn", false);
  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    setSignInUser("true")
    await AsyncStorage.setItem('user', JSON.stringify(data));
    await AsyncStorage.setItem('isSignIn', 'true')
    console.log("need to navigate")
    // this.props.navigation.navigate('Home')
    // navigate("/");
  };
  // call this function to sign out logged in user
  const logout = async () => {
    setUser(null);
    setSignInUser(false)
    await AsyncStorage.removeItem('isSignIn')
    // await clearStorage()
    // await AsyncStorage.clear();
    // navigate("/", { replace: true });
  };
  const value = useMemo(
    () => ({
      user,
      isSignIn,
      login,
      logout
    }),
    [user, isSignIn]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};