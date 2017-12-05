import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { StackNavigator } from "react-navigation";

export default class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name
    });
    render() {
        const { goBack } = this.props.navigation;
        return <Button title="Go back" onPress={() => goBack()} />;
    }
}
