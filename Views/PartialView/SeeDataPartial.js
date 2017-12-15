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

class SeeDataPartialView extends React.Component {
    render() {
        return (
            <View style={styleBasic.container}>
                <Text>Statistics</Text>
            </View>
        );
    }
}

export default SeeDataPartialView;
