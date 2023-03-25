import React from 'react';
import { StyleSheet, Text } from 'react-native';

// config
import { moderateScale } from '../../config/responsiveSize';
import { AppTextTypes } from '../..//config/types';

const AppText: React.FC<AppTextTypes> = ({ children, textStyle, ...otherProps }) => {
    return (
        <Text
            style={ [styles.text, textStyle] }
            { ...otherProps }
        >
            { children }
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: moderateScale(18),
    },
});

export default React.memo(AppText);
