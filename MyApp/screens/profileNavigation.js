import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  
import ScreenProfile from './screenProfile';
import ScreenMovies from './screenMovies';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';

const NavigatorScreens = createMaterialBottomTabNavigator(
    {
        Profile: {
            screen: ScreenProfile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: { backgroundColor: '#f69b31' }
            }
        },
        Movies: {
            screen: ScreenMovies,
            navigationOptions: {
                tabBarLabel: 'Peliculas',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-videocam'} />
                    </View>),
                activeColor: '#615af6',
                inactiveColor: '#46f6d7',
                barStyle: { backgroundColor: '#67baf6' }
            }
        }
    },
    {
        initialRouteName: 'Profile',
        activeColor: '#f0edf6',
        inactiveColor: '#226557',  
        barStyle: { backgroundColor: '#3BAD87' },

    }
);

export default createAppContainer(NavigatorScreens);
