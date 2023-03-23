import React, {useEffect} from "react";
import { SafeAreaView, Text, View } from "react-native";
import backgroundStyles from "./src/styles/Background.styles";
import SplashScreen from "react-native-splash-screen";
import LoginButton from "./src/components/LoginButton/LoginButton";
import LoginCard from "./src/components/LoginCard";
import loginStyles from "./src/styles/LoginComponents.styles";
//import 'react-native-gesture-handler';


const App = () =>{

  //Splash screen
  useEffect(()=>{
    SplashScreen.hide();
  }, [])



 return( 
  <SafeAreaView style={backgroundStyles.background}>
  <View style={loginStyles.container}>
      <LoginCard title={"Firstname"}></LoginCard>
      <LoginCard title={"Lastname"}></LoginCard>
      <LoginCard title={"E-Mail"}></LoginCard>
      <LoginCard title={"Password"}></LoginCard>
      <LoginCard title={"Date of Birth"}></LoginCard>
      <LoginCard title={"Height"}></LoginCard>
      <LoginCard title={"Weight"}></LoginCard>
      <LoginButton title={"SIGN UP"}></LoginButton>
  </View>
</SafeAreaView>
    );
}

export default App;