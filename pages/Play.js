import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
    BIG_MIN_HEIGHT_BUTTON,
    ONELINE_MAX_HEIGHT_PLAY_BUTTON,
    FIXED_TEXT_WIDTH_BUTTON
} from '../components/Constants.js';
import CustomButton from '../components/CustomButton.js';
import Card from '../components/Card.js';
import HomeButton from '../components/HomeButton.js';
import qs from '../components/questions.json';
import { Modal, Linking, View, Image } from 'react-native';
import {
    StyledView,
    AppDesc,
    CategoryHeader,
    AppLogo,
    StyledHomeButtonView,
    StyledHomeText
} from '../components/StyledView';
import GeometryBackground from '../components/GeometryBackground';


export const Play = ({ navigation }) => {
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
                    text={category.toUpperCase()}
                    color={category}
                    displayIcon={true}
                    maxHeight={ONELINE_MAX_HEIGHT_PLAY_BUTTON}
                    disabled={lengthOfCardLeft === 0}
                    isAllCap={true}
                    fixedTextWidth={FIXED_TEXT_WIDTH_BUTTON}
                    warningText={
                        lengthOfCardLeft <= 3
                            ? `${lengthOfCardLeft} ${lengthOfCardLeft === 1 ? 'card' : 'cards'
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
                                hasFollowUp={ques["Follow Up"] !== "" ? true : false}
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
                    <GeometryBackground />
                    <CategoryHeader> PICK A CATEGORY </CategoryHeader>
                    {list}
                </>
            );
        } else {
            setDisplay(
                <StyledView>
                    <AppLogo> HOORAY! YOU'VE FINISHED. </AppLogo>
                    <AppDesc>
                        {' '}
                        Thoughts? Take our survey below!{' '}
                    </AppDesc>
                    <StyledHomeButtonView>
                        <StyledHomeText
                            style={{ zIndex: 1, left: 10, top: 45 }}
                            onPress={() => navigation.navigate('Home')}
                        >
                            {' '}
                            SURVEY{' '}
                        </StyledHomeText>
                        <StyledHomeText
                            style={{ zIndex: 1, right: 18, top: 35 }}
                            onPress={() => navigation.navigate('Parent Guide')}
                        >
                            {' '}
                            PARENT GUIDE{' '}
                        </StyledHomeText>
                        <StyledHomeText
                            style={{ zIndex: 1, left: 13, top: 250, color: '#FFF' }}
                            onPress={() => Linking.openURL('https://www.coolmomsdancetoo.com/')}
                        >
                            {' '}
                            CMDTOO WEBSITE{' '}
                        </StyledHomeText>
                        <StyledHomeText
                            style={{ zIndex: 1, right: 18, top: 250 }}
                            onPress={() => navigation.navigate('Home')}
                        >
                            {' '}
                            BACK TO HOME{' '}
                        </StyledHomeText>

                        <HomeButton
                            text="SURVEY"
                            onPress={() => navigation.navigate('Home')}
                        />
                        <HomeButton
                            text="PARENT GUIDE"
                            onPress={() => navigation.navigate('Parent Guide')}
                        />
                        <HomeButton
                            text="CMDTOO WEBSITE"
                            onPress={() => Linking.openURL('https://www.coolmomsdancetoo.com/')}
                        />
                        <HomeButton
                            text="HOME"
                            onPress={() => navigation.navigate('Home')}
                        />
                    </StyledHomeButtonView>
                    <Image source={require('../assets/CoolMomsLogo.png')} style={{ marginBottom: 30 }} />


                </StyledView>
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
};


