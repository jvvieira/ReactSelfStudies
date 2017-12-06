import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import styleBasic from "../Styles/Basic";


class LoginView extends React.Component {
    static navigationOptions = {
        title: "Login",
        headerStyle: { backgroundColor: "#0F1826" },
        headerTitleStyle: { color: "#FFEB65" }
    };

    render() {
        const { goBack } = this.props.navigation;

        return (
            <View style={styleBasic.container}>
                <Text style={styleBasic.notSoBigText}>Logar-se-irá-aqui</Text>
                <Button title="Go back" onPress={() => goBack()} />
            </View>
        );
    }
}

export default (LoginView)
