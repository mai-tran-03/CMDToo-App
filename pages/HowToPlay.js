import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CustomButton from '../components/CustomButton.js';
import { CustomText } from '../components/CustomText.js';
import { BIG_MIN_HEIGHT_BUTTON } from '../components/Constants.js';
import {
    StyledView,
    ScrollStyledView,
    HowToPlayContainer
} from '../components/StyledView';
import GeometryBackground from '../components/GeometryBackground';

export const HowToPlay = ({ navigation }) => {
    return (
        <StyledView>
            <GeometryBackground />
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
                        minHeight={BIG_MIN_HEIGHT_BUTTON}
                    />
                    <StatusBar style="auto" />
                </HowToPlayContainer>
            </ScrollStyledView>
        </StyledView>
    );
};
