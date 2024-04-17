import { NavigationContainer } from "@react-navigation/native";
import Screen from "./screen";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthProvider } from "./hooks/AuthProvider";
import { LoaderProvider } from "./hooks/LoaderProvider";

export default function App() {
  return (
    <LoaderProvider>
      <AuthProvider>
        <Provider store={store}>
          <NavigationContainer test-id="navigation-container">
            <Screen testID="screen-component" />
          </NavigationContainer>
        </Provider>
      </AuthProvider>
    </LoaderProvider>
  );
}