import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
} from "react-native";
import { StackNavigator } from "react-navigation";
import HomeView from "./Views/HomeView";
import styleBasic from "./Styles/Basic";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Welcome"
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styleBasic.container}>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate("Chat", { user: "Nice" })}
                    title="Chat Same Page"
                />
                <TouchableHighlight
                    onPress={() => navigate("Homeview", { user: "Nice" })}
                    style={styleBasic.butao}>
                    <Text>teste</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`
    });

    render() {
        const { params } = this.props.navigation.state;

        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

export const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
    Homeview: { screen: HomeView }
});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
