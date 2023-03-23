import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors/Colors";

export default StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.defaultPinkColor,
        height:45,
        width:180,
        borderRadius: 30,
        alignItems:'center',
        margin: 10
    },
    buttonTitle: {
        color: Colors.defaultWhiteColor,
        fontSize: 20,
        alignItems: 'center',
        padding: 10,
        
    }
});