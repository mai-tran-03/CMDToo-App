import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import CustomButton from './components/CustomButton.js';
import { CustomText } from './components/CustomText.js';
import { CardTextbox, StandardTextbox } from './components/CustomTextbox.js';
import Card from './components/Card.js';
import { ThemeProvider } from 'styled-components';
import COLORS from './components/GlobalStyles.js';
import qs from './components/questions.json';
import { Modal, Image, TouchableOpacity, Linking } from 'react-native';
import {
    ParentGuide,
    ParentGuideByCategory,
    ParentGuideInformation
} from './components/ParentGuide';
import {
    StyledView,
    AppName,
    AppDesc,
    ScrollStyledView,
    HowToPlayContainer,
    CategoryHeader
} from './components/StyledView';

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
                text="parent guide"
                color="CMDTurquoise"
                onPress={() => navigation.navigate('ParentGuide')}
            />
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
            <ScrollStyledView>
                <HowToPlayContainer>
                    <CustomText
                        text='Press "play"'
                        color="CMDGreen"
                        count="1"
                    />
                    <CustomText
                        text="Pick an order of players"
                        color="CMDPink"
                        count="2"
                    />
                    <CustomText
                        text="Pick a category"
                        color="CMDPurple"
                        count="3"
                    />
                    <CustomText
                        text="Answer the question"
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
                        isBig={true}
                    />
                    <StatusBar style="auto" />
                </HowToPlayContainer>
            </ScrollStyledView>
        </StyledView>
    );
}

function Play({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    let categories = [
        'favorites',
        'dance challenge',
        'all about me',
        'the inner me',
        'what would you do?',
        'my bright future'
    ];
    let list = [];
    const [questions, setQuestions] = useState(qs);
    const [options, setOptions] = useState([]);
    const [display, setDisplay] = useState();
    useEffect(() => {
        list = [];
        categories.forEach(category => {
            const cardLeft = questions.filter(
                q => q.Category.toLowerCase() === category
            );
            const lengthOfCardLeft = cardLeft.length;

            list.push(
                <CustomButton
                    key={category}
                    text={category}
                    color={category}
                    disabled={lengthOfCardLeft === 0}
                    warningText={
                        lengthOfCardLeft <= 3
                            ? `${lengthOfCardLeft} ${
                                  lengthOfCardLeft === 1 ? 'card' : 'cards'
                              } left`
                            : undefined
                    }
                    onPress={() => {
                        setOptions([]);
                        let ques = cardLeft;
                        ques = ques[Math.floor(Math.random() * ques.length)];
                        setOptions(
                            <Card
                                category={ques.Category}
                                question={ques}
                                color={ques.Category.toLowerCase()}
                                hasFollowUp={ques.hasFollowUp}
                                setModalVisible={setModalVisible}
                                setOptions={setOptions}
                            ></Card>
                        );
                        setQuestions(oldQ =>
                            oldQ.filter(qw => qw.Question != ques.Question)
                        );
                        setModalVisible(true);
                    }}
                />
            );
        });
        if (questions.length) {
            setDisplay(
                <>
                    <CategoryHeader> Pick a Category </CategoryHeader>
                    {list}
                </>
            );
        } else {
            setDisplay(
                <>
                    <AppName> YOU FINISHED! </AppName>
                    <AppDesc>
                        {' '}
                        What is something new you learned today?{' '}
                    </AppDesc>
                    <CustomButton
                        text="go home"
                        color="CMDPink"
                        onPress={() => navigation.navigate('Home')}
                    />
                    <CustomButton
                        text="parent guide"
                        color="CMDTurquoise"
                        onPress={() => navigation.navigate('ParentGuide')}
                    />
                    <CustomButton
                        text="CMDToo Website"
                        color="CMDGreen"
                        onPress={() =>
                            Linking.openURL('https://www.coolmomsdancetoo.com/')
                        }
                    />
                </>
            );
        }
    }, [questions]);

    return (
        <StyledView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <StyledView>{options}</StyledView>
            </Modal>
            {display}
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
                </Stack.Navigator>
            </ThemeProvider>
        </NavigationContainer>
    );
}
