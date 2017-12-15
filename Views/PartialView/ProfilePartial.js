import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TouchableHighlight,
    Image
} from "react-native";
import styleBasic from "../../Styles/Basic";

class ProfilePartialView extends React.Component {
    render() {
        return (
            <View style={styleBasic.container}>
                <Text>Profile</Text>
            </View>
        );
    }
}

export default ProfilePartialView;
