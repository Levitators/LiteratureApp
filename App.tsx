import HomeScreen from "components/HomeScreen/HomeScreen";
import ProfileScreen from "components/ProfileScreen/ProfileScreen";
import {
  createAppContainer,
  createStackNavigator,
  NavigationContainer,
} from "react-navigation";

const App: NavigationContainer = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
}, { headerMode: "none" });

export default createAppContainer(App);
