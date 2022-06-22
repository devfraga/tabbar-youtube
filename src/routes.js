
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Search from './pages/Search'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Routes() {
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#9fe801',
        tabBarShowLabel: false,

        tabBarStyle:{
          position: 'absolute',
          backgroundColor: '#171626',
          borderTopWidth: 0,

          bottom: Platform.OS === 'android' ? 14 : 28,
          left: 14,
          right: 14,
          elevation:0,
          borderRadius: 4,
          height: 60,
          paddingBottom: 0, // Apenas no iOS para zerar o padding do IOS
        }
      }}    
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
              if(focused){
                return <Ionicons name="home" size={size} color={color} />
              }

              return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
      />
      
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
              if(focused){
                return <Ionicons name="search" size={size} color={color} />
              }

              return <Ionicons name="search-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
              if(focused){
                return <Ionicons name="bookmark" size={size} color={color} />
              }

              return <Ionicons name="bookmark-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
              if(focused){
                return <Ionicons name="person" size={size} color={color} />
              }

              return <Ionicons name="person-outline" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes;