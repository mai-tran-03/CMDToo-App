import React from 'react';
import {
    BigScrollStyledView,
    ParentTipsContainer,
    ParentTipsHeader,
    ParentTipsHeaderContainer
} from '../components/StyledView';
import tips from '../components/parent-tips.json';
import CustomButton from '../components/CustomButton.js';
import { ParentTipsTextbox } from '../components/CustomTextbox';
import { Linking } from 'react-native';

const GetScenerioButtons = navigation => {
    let scenerioButtonList = [];
    let count = 0;
    tips.forEach(tip => {
        scenerioButtonList.push(
            <CustomButton
                key={count++}
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
            <ParentTipsHeaderContainer>
                <ParentTipsHeader>
                    Interpret Your Child's Reactions
                </ParentTipsHeader>
            </ParentTipsHeaderContainer>
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
        <>
            <ParentTipsContainer>
                <BigScrollStyledView
                    directionalLockEnabled={true}
                    contentContainerStyle={{ maxWidth: '99.9%' }}
                >
                    <ParentTipsTextbox
                        textList={tips.split('|')}
                        color="CMDOrange"
                    />
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
        </>
    );
};
