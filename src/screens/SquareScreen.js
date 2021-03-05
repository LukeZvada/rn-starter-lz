import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useState } from "react";
import ColorCounter from "../components/ColorCoutner";


const SquareScreen = () => {
const [red, setRed] = useState([])
const [green, setGreen] = useState([])
const [blue, setBlue] = useState([])

    return (
        <View>
            <ColorCounter color="Red" />
            <ColorCounter color="Blue" />
            <ColorCounter color="Green" />
        </View>
    )
};


const styles = StyleSheet.create({});

export default SquareScreen;