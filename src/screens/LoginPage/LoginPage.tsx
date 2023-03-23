import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import backgroundStyles from "../../styles/Background.styles";
import LoginCard from "../../components/LoginCard";
import LoginButton from "../../components/LoginButton/LoginButton";
import loginStyles from "../../styles/LoginComponents.styles";

const LoginPage = () => {
 return(
    <SafeAreaView style={backgroundStyles.background}>
    <View style={loginStyles.container}>
      <LoginCard title={"E-mail...."}></LoginCard>
      <LoginCard title={"Password...."}></LoginCard>
      <LoginButton title={"LOGIN"}></LoginButton>
      <LoginButton title={"SIGN UP"}></LoginButton>
    </View>
  </SafeAreaView>
 );
}

export default LoginPage;
