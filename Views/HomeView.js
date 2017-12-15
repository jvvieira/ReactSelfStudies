import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TouchableHighlight,
    Image,
    Provider
} from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import styleBasic from "../Styles/Basic";
import PartialHomeView from "./PartialView/HomePartial";
import PartialAddEntryView from "./PartialView/AddEntryPartial";
import PartialProfileView from "./PartialView/ProfilePartial";
import PartialSeeDataView from "./PartialView/SeeDataPartial";

class HomeView extends React.Component {}

export const tabMenu = TabNavigator(
    {
        Home: {
            screen: PartialHomeView,
            navigationOptions: ({ navigation }) => ({
                title: "Home",
                path: "/",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        source={require("../Styles/Icons/Home.png")}
                        style={styleBasic.icone}
                    />
                )
            })
        },
        AddEntry: {
            screen: PartialAddEntryView,
            navigationOptions: ({ navigation }) => ({
                title: "Nova entrada",
                path: "/",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        source={require("../Styles/Icons/new_item.png")}
                        style={styleBasic.icone}
                    />
                )
            })
        },
        Statistics: {
            screen: PartialSeeDataView,
            navigationOptions: ({ navigation }) => ({
                title: "Estatísticas",
                path: "/",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        source={require("../Styles/Icons/Statistics.png")}
                        style={styleBasic.icone}
                    />
                )
            })
        },
        Profile: {
            screen: PartialProfileView,
            navigationOptions: ({ navigation }) => ({
                title: "Dados pessoais",
                path: "/",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        source={require("../Styles/Icons/Personal_data.png")}
                        style={styleBasic.icone}
                    />
                )
            })
        }
    },
    {
        tabBarPosition: "bottom",
        animationEnabled: true,
        tabBarOptions: {
            style: styleBasic.footer,
            iconStyle: styleBasic.footerButao,
            showIcon: true,
            showLabel: false
        }
    }
);

export default tabMenu;
