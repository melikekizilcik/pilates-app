import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import LoginCard from "../../components/LoginCard";
import LoginButton from "../../components/LoginButton/LoginButton";
import backgroundStyles from "../../styles/Background.styles";

const SignUpPage = () => {
    return(
        <SafeAreaView style={backgroundStyles.background}>
            <View>
                <LoginCard title={"Firstname"}></LoginCard>
                <LoginCard title={"Lastname"}></LoginCard>
                <LoginCard title={"E-Mail"}></LoginCard>
                <LoginCard title={"Password"}></LoginCard>
                <LoginCard title={"Date of Birth"}></LoginCard>
                <LoginCard title={"Height"}></LoginCard>
                <LoginCard title={"Weight"}></LoginCard>
                <LoginButton title={"KAYIT OL"}></LoginButton>
            </View>
        </SafeAreaView>
    );
}

export default SignUpPage;