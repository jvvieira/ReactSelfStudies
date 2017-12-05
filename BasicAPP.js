import { StackNavigator } from "react-navigation";
import MainScreen from "./App";
import ProfileScreen from "./App2";

const BasicApp = StackNavigator({
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen }
});
