import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import StoriesScreen from "../screens/stories";
import StoreDetail from "../screens/storeDetail";
import StoriesNewScreen from "../screens/storiesNew"
import { Routes } from "./Routes";
import { navigationRef } from "../utils/navigationUtils";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from 'react-native'
import {
    FontAwesome5,
    MaterialCommunityIcons,
    FontAwesome,
    Entypo,
  } from "@expo/vector-icons";
  import { COLORS } from "../theme";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => {
    return (
      <Tab.Navigator
        initialRouteName={Routes.Home}
        screenOptions={() => ({
          // tabBarShowLabel: false,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [
            {
              height: 71,
              paddingBottom: 10,
              alignItems: "center",
              backgroundColor: "#565C5C",
            },
          ],
        })}
      >
        <Tab.Screen
          name={Routes.tops}
          component={StackNavigatorTop}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="home"
                size={24}
                color={focused ? COLORS.yellow : "#A4A1A1"}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? COLORS.yellow : "#A4A1A1",
                }}
              >
                Top
              </Text>
            ),
          }}
        />
        <Tab.Screen
        name={Routes.news}
        component={StackNavigatorNew}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="gear"
              size={26}
              color={focused ? COLORS.yellow : "#A4A1A1"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.yellow : "#A4A1A1",
              }}
            >
             New
            </Text>
          ),
        }}
      />
      </Tab.Navigator>
    );
  };
const StackNavigatorTop = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.Main} component={StoriesScreen} />
      <Stack.Screen name={Routes.detail} component={StoreDetail} />
    </Stack.Navigator>
  )
}
const StackNavigatorNew = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Routes.Main} component={StoriesNewScreen} />
        <Stack.Screen name={Routes.detail} component={StoreDetail} />
      </Stack.Navigator>
    )
  }
export const Navigation = () => {
    return (
      <NavigationContainer ref={navigationRef}>        
          <BottomTabNavigation />
      </NavigationContainer>
    );
  };
  

export default Navigation;
