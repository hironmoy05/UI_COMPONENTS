import React, { useCallback } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

// Third party package
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// store
import { useThemeContext } from '../../store/themeContext';
// config
import { colors } from '../../config/theme';
import { moderateScaleVertical } from '../../config/responsiveSize';
import AppText from '../AppText';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const wait = (numMs) => new Promise(res => setTimeout(() => res(), numMs));

type AppButtonTypes = {
    gradient?: boolean
}

const AppButton: React.FC<AppButtonTypes> = ({ gradient }) => {
    const { theme } = useThemeContext();
    const currentTheme = colors[theme.mode]
    const opacityValue = useSharedValue(1);

    const opacityStyle = useAnimatedStyle(() => ({
        opacity: opacityValue.value,
    }), [opacityValue]);

    const handlePress = useCallback(async () => {
        opacityValue.value = withTiming(.5, { duration: 100 });
        await wait(100);
        opacityValue.value = withTiming(1, { duration: 100 });
    }, [])


    if (gradient) {
        return <Pressable
            onPressOut={ handlePress }
        >
            <AnimatedLinearGradient
                style={ [styles.container, opacityStyle] }
                colors={ [currentTheme.tertiaryColor, currentTheme.primaryColor] }
                start={ { x: 0, y: 0 } }
                end={ { x: 1, y: 0.9 } }
            >
                <AppText textStyle={ { color: currentTheme.whiteColor, fontWeight: '700' } }>BUTTON</AppText>
            </AnimatedLinearGradient>
        </Pressable>
    }

    return (
        <AnimatedPressable
            style={ [styles.container, opacityStyle, { backgroundColor: currentTheme.primaryColor }] }
            onPressOut={ handlePress }
        >
            <AppText textStyle={ { fontSize: 14, fontWeight: '700' } }>BUTTON</AppText>

        </AnimatedPressable>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: moderateScaleVertical(10),
        borderRadius: moderateScaleVertical(5)
    },
});

export default AppButton;
