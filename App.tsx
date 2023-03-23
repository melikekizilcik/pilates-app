import React, {useEffect} from "react";
import { SafeAreaView, Text, View } from "react-native";
import backgroundStyles from "./src/styles/Background.styles";
import SplashScreen from "react-native-splash-screen";
import LoginButton from "./src/components/Button/LoginButton";
import LoginCard from "./src/components/LoginCard";
import loginStyles from "./src/styles/LoginComponents.styles";

const App = () =>{

  //Splash screen
  useEffect(()=>{
    SplashScreen.hide();
  }, [])


 return( 
    <SafeAreaView style={backgroundStyles.background}>
      <View style={loginStyles.container}>
        <LoginCard title={"E-mail...."}></LoginCard>
        <LoginCard title={"Password...."}></LoginCard>
        <LoginButton title={"LOGIN"}></LoginButton>
        <LoginButton title={"SIGN UP"}></LoginButton>
      </View>
    </SafeAreaView>);
}

export default App;