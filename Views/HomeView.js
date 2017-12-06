import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import styleBasic from "../Styles/Basic";


class HomeView extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`
    });

    render() {
        const { params } = this.props.navigation.state;
        const { goBack } = this.props.navigation;

        return (
            <View style={styleBasic.container}>
                <Text>Chat with {params.user}</Text>
                <Button title="Go back" onPress={() => goBack()} />
            </View>
        );
    }
}

export default (HomeView)
