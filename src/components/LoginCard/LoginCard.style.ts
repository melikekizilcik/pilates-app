import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors/Colors";

export default StyleSheet.create({
    cardContainer:{
        borderColor: Colors.defaulGreyColor,
        borderWidth: 1,
        borderRadius: 25,
        width: 300,
        margin: 10
    },
    cardTitle: {
        color: Colors.defaulGreyColor,
        fontSize: 17,
        padding:10,
    }
});