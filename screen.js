import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import ForgotPasswordScreen from "./screens/forgotPassword";
import HomeScreen from "./screens/home";
import { useAuth } from "./hooks/AuthProvider";

const Stack = createNativeStackNavigator()

export default Screens = () => {
  const { isSignIn } = useAuth()
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false
    }}>
      {isSignIn === 'true' ?
        (<Stack.Screen name="Home" component={HomeScreen} />)
        :
        (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          </>
        )}
    </Stack.Navigator>
  )
}