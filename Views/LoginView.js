import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TextInput,
    TouchableHighlight
} from "react-native";
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
                <View style={styleBasic.box}>
                    <Text style={styleBasic.formText}>Login</Text>
                    <TextInput style={styleBasic.simpleInput} />
                    <Text style={styleBasic.formText}>Senha</Text>
                    <TextInput
                        style={styleBasic.simpleInput}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styleBasic.container_button}>
                    <TouchableHighlight
                        onPress={() => goBack()}
                        style={styleBasic.butao_X_2}
                    >
                        <Text style={styleBasic.Text}>Voltar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => goBack()}
                        style={styleBasic.butao_X_2}
                    >
                        <Text style={styleBasic.Text}>LogaMano!</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default LoginView;
