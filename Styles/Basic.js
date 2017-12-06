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
        justifyContent: "center"
    },
    butao: {
        alignItems: "center",
        backgroundColor: "#0F1826",
        padding: 10,
        margin: 5,
        width: 200
    },
    notSoBigText: { fontSize: 13, color: "#fff", padding: 5 },
    Text: {
        color: "#FFEB65"
    },
    bigText: {
        fontSize: 20,
        padding: 15,
        color: "#fff"
    }
});
