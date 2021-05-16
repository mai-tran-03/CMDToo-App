import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CustomButton from './components/CustomButton.js';
import CustomText from './components/CustomText.js';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import COLORS from './components/GlobalStyles.js';

const StyledView = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const AppName = styled.Text`
    font-size: 35px;
`;

const AppDesc = styled.Text`
    padding-vertical: 15px;
    font-size: 18px;
`;

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
            <CustomButton text="parent guide" color="CMDTurquoise" />
            <CustomButton
                text="how to play"
                color="CMDPink"
                onPress={() => navigation.navigate('HowToPlay')}
            />
            <StatusBar style="auto" />
        </StyledView>
    );
}

function HowToPlay({ navigation }) {
    return (
        <StyledView>
            <CustomText text='Press "PLAY"' color="CMDGreen" count="1" />
            <CustomText
                text="Pick an order of players"
                color="CMDPink"
                count="2"
            />
            <CustomText text="Pick a Category" color="CMDPurple" count="3" />
            <CustomText
                text="Answer the Question"
                color="CMDTurquoise"
                count="4"
            />
            <CustomText
                text="Pass the phone to the next person"
                color="CMDOrange"
                count="5"
            />
            <CustomButton
                text="play"
                color="CMDGreen"
                onPress={() => navigation.navigate('Play')}
            />
            <StatusBar style="auto" />
        </StyledView>
    );
}

function Play({ navigation }) {
    return (
        <StyledView>
            <CustomButton
                text="home"
                color="CMDGreen"
                onPress={() => navigation.navigate('Home')}
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
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Play" component={Play} />
                    <Stack.Screen name="HowToPlay" component={HowToPlay} />
                </Stack.Navigator>
            </ThemeProvider>
        </NavigationContainer>
    );
}
