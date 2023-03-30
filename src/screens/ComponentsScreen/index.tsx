import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// components
import { AppButton, AppInput, AppText } from '../../components';
// config
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';
import { useThemeContext } from '../../store/themeContext';
import { colors } from '../../config/theme';

const ComponentsScreen: React.FC = () => {
    const { theme } = useThemeContext();
    const currentTheme = colors[theme.mode];

    return (
        <View style={ { ...styles.container, backgroundColor: currentTheme.backgroundColor } }>
            <View style={ {
                ...styles.innerContainer,
                borderColor: currentTheme.whiteColor,
                backgroundColor: currentTheme.bgColor
            } }
            >
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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    innerContainer: {
        width: moderateScale(90) + '%',
        borderRadius: moderateScale(5),
        paddingVertical: moderateScaleVertical(20),
        paddingHorizontal: moderateScale(5) + '%',
        borderwidth: 2,
    }
});

export default ComponentsScreen;
