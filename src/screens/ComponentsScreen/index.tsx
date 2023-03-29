import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// components
import { AppButton, AppInput, AppText } from '../../components';
// config
import { moderateScale } from '../../config/responsiveSize';

const ComponentsScreen: React.FC = () => {
    return (
        <>
            <AppText>Buttons</AppText>
            <AppButton />
            <AppInput
                name='Email'
                success
            />
            <AppInput
                name='Password'
                keyboardType='default'
                icons
            />
            <AppInput
                name='Name'
                keyboardType='default'
                icon
            />
            <AppInput
                name='Name'
                keyboardType='default'
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(10),
    },
});

export default ComponentsScreen;
