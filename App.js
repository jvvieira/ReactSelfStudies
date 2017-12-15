import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight
} from "react-native";
import { StackNavigator } from "react-navigation";
import LoginView from "./Views/LoginView";
import NewUserView from "./Views/NewUserView";
import styleBasic from "./Styles/Basic";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Aoba fi",
        headerStyle: { backgroundColor: "#0F1826" },
        headerTitleStyle: { color: "#FFEB65" }
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styleBasic.container}>
                <View>
                    <Text style={styleBasic.bigText}>
                        O que você deseja fazer?
                    </Text>
                </View>
                <View style={styleBasic.container_button}>
                    <TouchableHighlight
                        onPress={() => navigate("NewUser")}
                        style={styleBasic.butao_X_2}
                    >
                        <Text style={styleBasic.Text}>Novo cadastro</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => navigate("Login")}
                        style={styleBasic.butao_X_2}
                    >
                        <Text style={styleBasic.Text}>Logar-se</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export const SimpleApp = StackNavigator(
    {
        Landing: { screen: HomeScreen },
        Login: { screen: LoginView, navigationOptions: { header: null } },
        NewUser: { screen: NewUserView }
    },
    {
        mode: "modal"
    }
);

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
