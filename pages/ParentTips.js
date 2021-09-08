import React from 'react';
import {
    BigScrollStyledView,
    ParentTipsContainer,
    ParentTipsHeader,
    ParentTipsHeaderContainer,
    ScenerioContainer
} from '../components/StyledView';
import tips from '../components/parent-tips.json';
import CustomButton from '../components/CustomButton.js';
import GeometryBackground from '../components/GeometryBackground';
import {
    ParentTipsTextbox,
    StandardTextbox
} from '../components/CustomTextbox';
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
                onPress={() =>
                    navigation.navigate('Parent Tips Information', { tip })
                }
            />
        );
    });
    return scenerioButtonList;
};

export const ParentTips = ({ navigation }) => {
    const scenerioButtons = GetScenerioButtons(navigation);
    return (
        <ParentTipsContainer>
            <GeometryBackground />
            <ParentTipsHeaderContainer>
                <ParentTipsHeader
                    style={{
                        fontFamily: 'Avenir',
                        fontWeight: 'bold',
                        fontSize: '35'
                    }}
                >
                    INTERPRET YOUR CHILD'S REACTIONS
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
    const scenerio = route.params.tip.scenario;
    const tips = route.params.tip.tip;
    const link = route.params.tip.source;
    const color = 'CMDOrange';
    return (
        <>
            <ScenerioContainer>
                <BigScrollStyledView
                    directionalLockEnabled={true}
                    contentContainerStyle={{ maxWidth: '99.9%' }}
                >
                    <StandardTextbox text={scenerio} color={color} />
                    <ParentTipsTextbox
                        textList={tips.split('|')}
                        color={color}
                    />
                    {link != '' ? (
                        <CustomButton
                            text="read more"
                            color={color}
                            isBig={true}
                            onPress={() => Linking.openURL(link)}
                        />
                    ) : (
                        <></>
                    )}
                </BigScrollStyledView>
            </ScenerioContainer>
        </>
    );
};
