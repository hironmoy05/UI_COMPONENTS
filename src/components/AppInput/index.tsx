import React, { useEffect, useState } from 'react';
import { TextInput, View, Platform } from 'react-native';

// Third party package
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

// It's own style
import styles from './styles';
// config
import { AppInputTypes, AppTextInputProps } from '../../config/types';
// components
import { colors } from '../../config/theme';
import AppText from '../AppText';
// store
import { moderateScale, moderateScaleVertical, textScale } from '../../config/responsiveSize';
import { useThemeContext } from '../../store/themeContext';

const AppInput: React.FC<AppTextInputProps & AppInputTypes> = ({ icon, icons, success, name, textStyle, ...otherProps }) => {
    const { theme } = useThemeContext();
    const currentTheme = colors[theme.mode];

    const [isSecure, setIsSecure] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);
    const [inputText, setInputText] = useState('');
    const translateValue = Platform.OS === 'ios' ? moderateScaleVertical(14) : moderateScaleVertical(12)

    // Animated
    const translateText = useSharedValue(1);
    const fontScale = useSharedValue(1);

    const placeholderAnimation = useAnimatedStyle(() => ({
        transform: [{
            translateY: translateText.value,
        }],
        fontSize: fontScale.value
    }), [inputText]);

    const handleText = (text) => {
        setInputText(text);
    }

    useEffect(() => {
        'worklet';
        if (inputText) {
            translateText.value = withTiming(1, { duration: 200 });
            fontScale.value = withTiming(textScale(10), { duration: 200 });
        } else {
            translateText.value = withTiming(translateValue, { duration: 200 });
            fontScale.value = withTiming(moderateScale(18), { duration: 200 })
        }
    }, [inputText]);

    if (success) {
        return (
            <>
                <View style={ styles.container }>
                    <AppText textStyle={ { ...styles.inputLabel, ...textStyle } }>{ name }</AppText>
                    <View>
                        <TextInput
                            style={ {
                                ...styles.input,
                                borderWidth: 2,
                                paddingRight: moderateScale(50),
                                borderColor: currentTheme.primaryColor
                            } }
                            color={ currentTheme.iconColor }
                            placeholder={ name }
                            onChangeText={ text => setInputText(text) }
                            secureTextEntry={ isSecure }
                            { ...otherProps }
                        />
                        <AppText
                            textStyle={ styles.iconContainer }
                            onPress={ () => setIsSuccess(!isSuccess) }
                        >
                            {
                                inputText ?
                                    <AntIcon name='check' size={ moderateScale(25) } color={ currentTheme.primaryColor } />
                                    :
                                    <AntIcon name='close' size={ moderateScale(25) } color={ currentTheme.iconColor } />
                            }
                        </AppText>
                    </View>
                </View>
            </>
        )
    }

    if (icons) {
        return (
            <>
                <View style={ styles.container }>
                    <AppText textStyle={ { ...styles.inputLabel, ...textStyle } }>{ name }</AppText>
                    <View>
                        <AppText textStyle={ { ...styles.iconContainer, left: 10 } }>
                            <Icon name='ios-lock-closed' size={ moderateScale(25) } color={ currentTheme.iconColor } />
                        </AppText>
                        <View>
                            <Animated.Text style={ [
                                styles.placeholderText,
                                placeholderAnimation
                            ] }>
                                { name }
                            </Animated.Text>
                            <TextInput
                                style={ {
                                    ...styles.input,
                                    paddingLeft: moderateScale(45),
                                    paddingRight: moderateScale(50),
                                } }
                                color={ currentTheme.iconColor }
                                secureTextEntry={ isSecure }
                                onChangeText={ (text) => handleText(text) }
                                { ...otherProps }
                            />
                        </View>
                        <AppText
                            textStyle={ styles.iconContainer }
                            onPress={ () => setIsSecure(!isSecure) }
                        >
                            {
                                isSecure ?
                                    <Icon name='eye-off' size={ moderateScale(25) } color={ currentTheme.iconColor } />
                                    :
                                    <Icon name='eye' size={ moderateScale(25) } color={ currentTheme.iconColor } />
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
                            color={ currentTheme.iconColor }
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
                                    <Icon name='eye-off' size={ moderateScale(25) } color={ currentTheme.iconColor } />
                                    :
                                    <Icon name='eye' size={ moderateScale(25) } color={ currentTheme.iconColor } />
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
                color={ currentTheme.iconColor }
                { ...otherProps }
            />
        </View>
    );
};

export default React.memo(AppInput);
