import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import CustomButton from './components/CustomButton.js';
import CustomText from './components/CustomText.js';
import { CardTextbox, StandardTextbox } from './components/CustomTextbox.js';
import Card from './components/Card.js';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import COLORS from './components/GlobalStyles.js';
import qs from './components/questions.json';
import { Modal } from 'react-native';

const StyledView = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const StyledViewTwo = styled(StyledView)`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
`;

const AppName = styled.Text`
    font-size: 35px;
`;

const AppDesc = styled.Text`
    padding-vertical: 15px;
    font-size: 18px;
`;

const CategoryHeader = styled.Text`
    font-size: 35px;
    min-height: 50px
    align-items: flex-start;
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
            <CustomButton
                text="CARDTEST"
                color="CMDGreen"
                onPress={() => navigation.navigate('CardTest')}
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
    const [categors, setCategories] = useState(list);
    useEffect(() => {
        list = [];
        categories.forEach(category => {
            list.push(
                <CustomButton
                    key={category}
                    text={category}
                    color={
                        questions.filter(
                            q => q.Category.toLowerCase() === category
                        ).length != 0
                            ? category
                            : 'grey'
                    }
                    onPress={() => {
                        setOptions([]);
                        questions
                            .filter(
                                q => q.Category.toLocaleLowerCase() === category
                            )
                            .forEach((q, index) => {
                                setOptions(oldArray => [
                                    ...oldArray,
                                    <CustomButton
                                        key={index}
                                        text={q.Question}
                                        color={q.Category.toLowerCase()}
                                        onPress={() => {
                                            setQuestions(oldQ =>
                                                oldQ.filter(
                                                    qw =>
                                                        qw.Question !=
                                                        q.Question
                                                )
                                            );
                                            setModalVisible(false);
                                        }}
                                    />
                                ]);
                            });
                        setModalVisible(true);
                    }}
                />
            );
        });
        setCategories(list);
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
                <StyledViewTwo>
                    {options}
                    <CustomButton
                        text="close"
                        color="CMDGreen"
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </StyledViewTwo>
            </Modal>
            <CategoryHeader> Pick a Category </CategoryHeader>
            {categors}
            <StatusBar style="auto" />
        </StyledView>
    );
}

function CardTest({ navigation }) {
    const sampleQuestion = 'Turn your favorite song on and dance for 1 minute';
    const sampleCategory = 'Dance Challenge';
    const sampleHasFollowUp = true;

    return (
        <StyledView>
            <Card
                category={sampleCategory}
                question={sampleQuestion}
                color={sampleCategory.toLowerCase()}
                hasFollowUp={sampleHasFollowUp}
            ></Card>
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
                    <Stack.Screen name="CardTest" component={CardTest} />
                </Stack.Navigator>
            </ThemeProvider>
        </NavigationContainer>
    );
}
