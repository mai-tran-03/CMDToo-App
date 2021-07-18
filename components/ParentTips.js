import React from 'react';
import { BigScrollStyledView, ParentTipsContainer } from './StyledView';
import tips from './parent-tips.json';
import CustomButton from './CustomButton.js';
import { CardTextbox } from './CustomTextbox';
import { Linking } from 'react-native';

const GetScenerioButtons = navigation => {
    let scenerioButtonList = [];
    tips.forEach(tip => {
        scenerioButtonList.push(
            <CustomButton
                text={tip.scenario}
                color="CMDOrange"
                isVeryBig={true}
                onPress={() => navigation.navigate('ScenerioTips', { tip })}
            />
        );
    });
    return scenerioButtonList;
};

export const ParentTips = ({ navigation }) => {
    const scenerioButtons = GetScenerioButtons(navigation);
    return (
        <ParentTipsContainer>
            <BigScrollStyledView
                directionalLockEnabled={true}
                contentContainerStyle={{ maxWidth: '99.9%' }}
            >
                {scenerioButtons}
            </BigScrollStyledView>
        </ParentTipsContainer>
    );
};

export const ScenerioTips = ({ route, navigation }) => {
    const tips = route.params.tip.tip;
    const link = route.params.tip.source;
    return (
        <ParentTipsContainer>
            <BigScrollStyledView
                directionalLockEnabled={true}
                contentContainerStyle={{ maxWidth: '99.9%' }}
            >
                <CardTextbox textList={tips.split('|')} color="CMDOrange" />
                {link != '' ? (
                    <CustomButton
                        text="read more"
                        color="CMDOrange"
                        isBig={true}
                        onPress={() => Linking.openURL(link)}
                    />
                ) : (
                    <></>
                )}
            </BigScrollStyledView>
        </ParentTipsContainer>
    );
};
