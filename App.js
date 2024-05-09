import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import PokeMonProj from "./Components/PokeMonProj";
// navigations import
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home2 from "./Screens/Home2";
import Home from "./Screens/Home";
import GetStarted from "./Screens/GetStarted";
import Verification from "./Screens/Verification";
import SignIn from "./Screens/SignIn";
import ForgotPassword from "./Screens/ForgotPassword";
import ResetPassword from "./Screens/ResetPassword";
import DigitsPin from "./Screens/DigitsPin";
import Dashboard from "./Screens/Dashboard";
import Notification from "./Screens/Notification";
import Services from "./Screens/Services";
import Tab from "./Components/Tab";
import Expenses from "./Screens/Expenses";
import TransactionDetails from "./Components/TransactionDetails";
import Transactions from "./Screens/Transactions";
import Account from "./Screens/Account";
import ProfileSettings from "./Screens/ProfileSettings";
import ChangePassword from "./Screens/ChangePassword";
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="Home2" component={Home2} />
          <stack.Screen name="Signin" component={SignIn} />
          <stack.Screen name="GetStarted" component={GetStarted} />
          <stack.Screen name="Dashboard" component={Dashboard} />
          <stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <stack.Screen name="ResetPassword" component={ResetPassword} />
          <stack.Screen name="Verification" component={Verification} />
          <stack.Screen name="DigitsPin" component={DigitsPin} />
          <stack.Screen name="Notification" component={Notification} />
          <stack.Screen name="Services" component={Services} />
          <stack.Screen name="Expenses" component={Expenses} />
          <stack.Screen name="Transactions" component={Transactions} />
          <stack.Screen name="Account" component={Account} />
          <stack.Screen name="Profile Settings" component={ProfileSettings} />
          <stack.Screen name="Change Password" component={ChangePassword} />
          <stack.Screen
            name="TransactionDetails"
            component={TransactionDetails}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}
