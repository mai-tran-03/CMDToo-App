import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CustomButton from '../components/CustomButton.js';
import { CustomText } from '../components/CustomText.js';
import GeometryBackground from '../components/GeometryBackground';
import {
    StyledView,
    ScrollStyledView,
    HowToPlayContainer
} from '../components/StyledView';

export const HowToPlay = ({ navigation }) => {
    return (
        <StyledView>
            <ScrollStyledView>
                <HowToPlayContainer>
                    <GeometryBackground />
                    <CustomText
                        text='PRESS "PLAY"'
                        color="CMDGreen"
                        count="1"
                    />
                    <CustomText
                        text="PICK AN ORDER OF PLAYERS"
                        color="CMDPink"
                        count="2"
                    />
                    <CustomText
                        text="PICK A CATEGORY"
                        color="CMDPurple"
                        count="3"
                    />
                    <CustomText
                        text="ANSWER THE QUESTION"
                        color="CMDTurquoise"
                        count="4"
                    />
                    <CustomText
                        text="PASS THE PHONE TO THE NEXT PERSON"
                        color="CMDOrange"
                        count="5"
                    />
                    <CustomButton
                        text="PLAY"
                        color="CMDGreen"
                        onPress={() => navigation.navigate('play')}
                        isBig={true}
                    />
                    <StatusBar style="auto" />
                </HowToPlayContainer>
            </ScrollStyledView>
        </StyledView>
    );
};
