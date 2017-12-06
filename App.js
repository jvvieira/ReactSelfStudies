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
                <Text style={styleBasic.bigText}>O que você deseja fazer?</Text>
                <TouchableHighlight
                    onPress={() => navigate("Chat", { user: "Nice" })}
                    style={styleBasic.butao}
                >
                    <Text style={styleBasic.Text}>Novo cadastro</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => navigate("Login")}
                    style={styleBasic.butao}
                >
                    <Text style={styleBasic.Text}>Logar-se</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export const SimpleApp = StackNavigator({
    Landing: { screen: HomeScreen },
    Login: { screen: LoginView },
});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
