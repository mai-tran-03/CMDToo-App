import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeButton from './components/HomeButton.js';
import { ThemeProvider } from 'styled-components';
import COLORS from './components/GlobalStyles.js';
import { Image, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import {
    ParentGuide,
    ParentGuideByCategory,
    ParentGuideInformation
} from './pages/ParentGuide';
import { ParentTips, ScenerioTips } from './pages/ParentTips.js';
import {
    StyledView,
    StyledHomeButtonView,
    StyledLogo,
    StyledTagline
} from './components/StyledView';
import { Play } from './pages/Play.js';
import { HowToPlay } from './pages/HowToPlay.js';

const HomeScreen = ({ navigation }) => {
    return (
        <StyledView>
            <ScrollView>
                <StyledLogo>
                    <Image
                        source={require('./assets/genconnect_logo-black.png')}
                        style={{
                            width: 350,
                            height: 130,
                            marginLeft: 10,
                            marginRight: 10
                        }}
                    />
                    <StyledTagline>
                        The game that gets people talking!{' '}
                    </StyledTagline>
                </StyledLogo>

                <StyledHomeButtonView>
                    <HomeButton
                        text="PLAY"
                        onPress={() => navigation.navigate('Play')}
                        source={require('./assets/genconnect_ombre_allaboutme.png')}
                    />
                    <HomeButton
                        text="HOW TO PLAY"
                        onPress={() => navigation.navigate('How To Play')}
                        source={require('./assets/genconnect_ombre_brightfuture.png')}
                    />
                    <HomeButton
                        text="PARENT GUIDE"
                        onPress={() => navigation.navigate('Parent Guide')}
                        source={require('./assets/genconnect_ombre_whatwouldyoudo.png')}
                    />
                    <HomeButton
                        text="PARENT TIPS"
                        onPress={() => navigation.navigate('Parent Tips')}
                        source={require('./assets/genconnect_ombre_dancechallenge.png')}
                    />
                </StyledHomeButtonView>
                <StatusBar style="auto" />
            </ScrollView>
        </StyledView>
    );
};

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider theme={{ colors: COLORS }}>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen
                        name="Parent Guide"
                        component={ParentGuide}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen name="Play" component={Play} />
                    <Stack.Screen
                        name="How To Play"
                        component={HowToPlay}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="Parent Guide by Category"
                        component={ParentGuideByCategory}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="Parent Guide Information"
                        component={ParentGuideInformation}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="Parent Tips"
                        component={ParentTips}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="Parent Tips Information"
                        component={ScenerioTips}
                        options={({ navigation }) => ({
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: 'black'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                            headerBackTitleVisible: false,
                            headerRight: props => (
                                <TouchableOpacity
                                    onPress={(...props) => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Image
                                        source={require('./assets/homeIcon.png')}
                                        style={{
                                            width: 45,
                                            height: 35,
                                            marginRight: 5
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                </Stack.Navigator>
            </ThemeProvider>
        </NavigationContainer>
    );
}
