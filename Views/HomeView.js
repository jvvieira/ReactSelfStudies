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

const AppNavigation = TabNavigator(
    {
        Home: { screen: PartialHomeView },
        AddEntry: { screen: PartialAddEntryView }
    },
    { lazy: true }
);

class HomeView extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        headerStyle: { backgroundColor: "#dbe3f0" },
        headerTitleStyle: { color: "#FFEB65" }
    });

    render() {
        return (
            <View style={styleBasic.container}>
                <View style={styleBasic.content}>

                </View>
                <View style={styleBasic.footer}>
                    <TouchableHighlight style={styleBasic.footerButao}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../Styles/Icons/Home.png")}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={styleBasic.footerButao}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../Styles/Icons/new_item.png")}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={styleBasic.footerButao}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../Styles/Icons/Statistics.png")}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={styleBasic.footerButao}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../Styles/Icons/Personal_data.png")}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default HomeView;
