import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CustomButton from './components/CustomButton.js';
import { ThemeProvider } from 'styled-components';
import COLORS from './components/GlobalStyles.js';
import { Image, TouchableOpacity } from 'react-native';
import {
    ParentGuide,
    ParentGuideByCategory,
    ParentGuideInformation
} from './pages/ParentGuide';
import { ParentTips, ScenerioTips } from './pages/ParentTips.js';
import { StyledView, AppName, AppDesc } from './components/StyledView';
import { Play } from './pages/Play.js';
import { HowToPlay } from './pages/HowToPlay.js';

function HomeScreen({ navigation }) {
    return (
        <StyledView>
            <AppName> GEN CONNECT </AppName>
            <AppDesc> Invite your child to share their feelings </AppDesc>
            <CustomButton
                text="play"
                color="CMDGreen"
                onPress={() => navigation.navigate('Play')}
            />
            <CustomButton
                text="how to play"
                color="CMDTurquoise"
                onPress={() => navigation.navigate('HowToPlay')}
            />
            <CustomButton
                text="parent guide"
                color="CMDPink"
                onPress={() => navigation.navigate('ParentGuide')}
            />
            <CustomButton
                text="parent tips"
                color="CMDOrange"
                onPress={() => navigation.navigate('ParentTips')}
            />

            <StatusBar style="auto" />
        </StyledView>
    );
}

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
                        name="ParentGuide"
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
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen name="Play" component={Play} />
                    <Stack.Screen name="HowToPlay" component={HowToPlay} />
                    <Stack.Screen
                        name="ParentGuideByCategory"
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
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen
                        name="ParentGuideInformation"
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
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    />
                    <Stack.Screen name="ParentTips" component={ParentTips} />
                    <Stack.Screen
                        name="ScenerioTips"
                        component={ScenerioTips}
                    />
                </Stack.Navigator>
            </ThemeProvider>
        </NavigationContainer>
    );
}
