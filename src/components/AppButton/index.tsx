import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Third party package
import LinearGradient from 'react-native-linear-gradient';
import { useThemeContext } from '../../store/themeContext';
import { colors } from '../../config/theme';
import { moderateScaleVertical } from '../../config/responsiveSize';

const AppButton: React.FC = () => {
    const { theme } = useThemeContext();
    const currentTheme = colors[theme.mode]

    return (
        <LinearGradient
            style={ styles.container }
            colors={ [currentTheme.tertiaryColor, currentTheme.primaryColor] }
            start={ { x: 0, y: 0 } }
            end={ { x: 1, y: 0.9 } }
        >
            <Text>AppButton</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: moderateScaleVertical(15),
        borderRadius: moderateScaleVertical(5)
    },
});

export default AppButton;
