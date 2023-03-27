import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';

// Third party package
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

// It's own style
import styles from './styles';
// config
import { AppInputTypes, AppTextInputProps } from '../../config/types';
// components
import { colors } from '../../config/theme';
import AppText from '../AppText';
// store
import { moderateScale } from '../../config/responsiveSize';
import { useThemeContext } from '../../store/themeContext';

const AppInput: React.FC<AppTextInputProps & AppInputTypes> = ({ icon, icons, name, textStyle, ...otherProps }) => {
    const { theme } = useThemeContext();
    const currentTheme = colors[theme.mode];

    const [isSecure, setIsSecure] = useState(true);
    const [inputText, setInputText] = useState(false);

    // Animated
    const translateText = useSharedValue(1);
    const fontScale = useSharedValue(1);

    const placeholderAnimation = useAnimatedStyle(() => ({
        transform: [{
            translateY: translateText.value,
        }],
        fontSize: fontScale.value
    }), []);

    useEffect(() => {
        if (inputText) {
            translateText.value = withTiming(1, { duration: 200 });
            fontScale.value = withTiming(14, { duration: 200 });
        } else {
            translateText.value = withTiming(16, { duration: 200 });
            fontScale.value = withTiming(18, { duration: 200 })
        }
    }, [inputText]);

    if (icons) {
        return (
            <>
                <View style={ styles.container }>
                    <AppText textStyle={ { ...styles.inputLabel, ...textStyle } }>{ name }</AppText>
                    <View>
                        <AppText textStyle={ { ...styles.iconContainer, left: 10 } }>
                            <Icon name='ios-lock-closed' size={ moderateScale(25) } color={ currentTheme.secondaryColor } />
                        </AppText>
                        <View>
                            <Animated.Text style={ [
                                { position: 'absolute', left: 50 },
                                placeholderAnimation
                            ] }>
                                { name }
                            </Animated.Text>
                            <TextInput
                                style={ { ...styles.input, paddingLeft: moderateScale(45), paddingRight: moderateScale(50) } }
                                color={ currentTheme.primaryColor }
                                secureTextEntry={ isSecure }
                                onChangeText={ setInputText }
                                { ...otherProps }
                            />
                        </View>
                        <AppText
                            textStyle={ styles.iconContainer }
                            onPress={ () => setIsSecure(!isSecure) }
                        >
                            {
                                isSecure ?
                                    <Icon name='eye-off' size={ moderateScale(25) } color={ currentTheme.secondaryColor } />
                                    :
                                    <Icon name='eye' size={ moderateScale(25) } color={ currentTheme.secondaryColor } />
                            }
                        </AppText>
                    </View>
                </View>
            </>
        )
    }
    if (icon) {
        return (
            <>
                <View style={ styles.container }>
                    <AppText textStyle={ { ...styles.inputLabel, ...textStyle } }>{ name }</AppText>
                    <View>
                        <TextInput
                            style={ { ...styles.input, paddingRight: moderateScale(50) } }
                            color={ currentTheme.primaryColor }
                            placeholder={ name }
                            secureTextEntry={ isSecure }
                            { ...otherProps }
                        />
                        <AppText
                            textStyle={ styles.iconContainer }
                            onPress={ () => setIsSecure(!isSecure) }
                        >
                            {
                                isSecure ?
                                    <Icon name='eye-off' size={ moderateScale(25) } color={ currentTheme.secondaryColor } />
                                    :
                                    <Icon name='eye' size={ moderateScale(25) } color={ currentTheme.secondaryColor } />
                            }
                        </AppText>
                    </View>
                </View>
            </>
        )
    }

    return (
        <View style={ styles.container }>
            <AppText textStyle={ { ...styles.inputLabel, ...textStyle } }>{ name }</AppText>
            <TextInput
                style={ styles.input }
                color={ currentTheme.primaryColor }
                { ...otherProps }
            />
        </View>
    );
};

export default React.memo(AppInput);
