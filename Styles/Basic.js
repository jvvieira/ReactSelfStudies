"use strict";

var React = require("react-native");

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    alwaysred: {
        backgroundColor: "red",
        height: 100,
        width: 100
    },
    container: {
        flex: 1,
        backgroundColor: "#4872b5",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'column',
    },
    container_button: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    butao_X_2: {
        alignItems: "center",
        backgroundColor: "#0F1826",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        width: '45%',
        height: 40,
    },
    notSoBigText: {
        fontSize: 20,
        color: "#fff",
        padding: 5
    },
    Text: {
        color: "#FFEB65"
    },
    bigText: {
        fontSize: 40,
        padding: 15,
        color: "#fff",
        textAlign: "center"
    },
    simpleInput: {
        backgroundColor: "#fff",
        width: 200,
        height: 40,
        padding: 5,
        margin: 2
    },
    box: {
        margin: 30,
        backgroundColor: "#B2D0FF",
        padding: 20,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#fff",
    },
    formText: {
        color: "#0F1826",
        fontSize: 15
    }
});
