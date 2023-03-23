import React, {FC} from "react";
import { SafeAreaView, Text, View, } from "react-native";
import styles from "./LoginButton.styles";

interface IButtonProps{
    title: String
}

const LoginButton: FC<IButtonProps> = ({title}) => {
    return(
    <View style={styles.buttonContainer}>
        <Text style={styles.buttonTitle}>{title}</Text>
    </View>
    );
}

export default LoginButton;