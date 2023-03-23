import React, {FC} from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./LoginCard.style";

interface ILoginCard{
    title: String,

}

const LoginCard: FC<ILoginCard> = ({title}) => {
    return(
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
        </View>
    );
}

export default LoginCard;