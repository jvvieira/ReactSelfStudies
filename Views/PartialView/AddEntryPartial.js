import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TouchableHighlight,
    Image,
    Picker,
    TextInput
} from "react-native";
import styleBasic from "../../Styles/Basic";

class AddEntryPartialView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        return (
            <View style={styleBasic.container}>
                <View style={styleBasic.box}>
                    <Text style={styleBasic.formText}>Posto</Text>
                    <Picker
                        style={styleBasic.simpleInput}
                        selectedValue={this.state.posto}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ posto: itemValue })
                        }
                    >
                        <Picker.Item label="--Selectione--" value="0" />
                        <Picker.Item label="Shell" value="1" />
                        <Picker.Item label="Ipiranga" value="2" />
                        <Picker.Item label="BR" value="3" />
                    </Picker>
                    <Text style={styleBasic.formText}>
                        Combustivel utilizado
                    </Text>
                    <Picker
                        style={styleBasic.simpleInput}
                        selectedValue={this.state.combustivel}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ combustivel: itemValue })
                        }
                    >
                        <Picker.Item label="--Selectione--" value="0" />
                        <Picker.Item label="Gasolina" value="1" />
                        <Picker.Item label="Gasolina Aditivada" value="2" />
                        <Picker.Item label="Alcool" value="3" />
                        <Picker.Item label="Alcool aditivado" value="4" />
                    </Picker>
                    <Text style={styleBasic.formText}>
                        Kilometragem no painel
                    </Text>
                    <TextInput
                        style={styleBasic.simpleInput}
                        keyboardType="numeric"
                    />
                    <Text style={styleBasic.formText}>Valor do litro</Text>
                    <TextInput
                        style={styleBasic.simpleInput}
                        keyboardType="numeric"
                    />
                    <Text style={styleBasic.formText}>
                        Quantidade de litros
                    </Text>
                    <TextInput
                        style={styleBasic.simpleInput}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styleBasic.container_button}>
                    <TouchableHighlight
                        onPress={() => goBack()}
                        style={styleBasic.butao_X_2}
                    >
                        <Text style={styleBasic.Text}>Inserir!</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default AddEntryPartialView;
