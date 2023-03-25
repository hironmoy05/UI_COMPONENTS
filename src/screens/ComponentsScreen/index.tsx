import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// components
import { AppInput } from '../../components';
// config
import { moderateScale } from '../../config/responsiveSize';

const ComponentsScreen: React.FC = () => {
    return (
        <>
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
