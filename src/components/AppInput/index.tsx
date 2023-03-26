import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

// Third party package
import Icon from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';

// It's own style
import styles from './styles';
// config
import { AppInputTypes, AppTextInputProps } from '../../config/types';
// components
import { colors } from '../../config/theme';
import AppText from '../AppText';
// store
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';
import { useThemeContext } from '../../store/themeContext';

const AppInput: React.FC<AppTextInputProps & AppInputTypes> = ({ icon, icons, name, textStyle, ...otherProps }) => {
    const { theme } = useThemeContext();
    const currentTheme = colors[theme.mode];

    const [isSecure, setIsSecure] = useState(true);

    if (icons) {
        return (
            <>
                <View style={ styles.container }>
                    <AppText textStyle={ { ...styles.inputLabel, ...textStyle } }>{ name }</AppText>
                    <View>
                        <AppText textStyle={ { ...styles.iconContainer, left: 10 } }>
                            <Icon name='ios-lock-closed' size={ moderateScale(25) } color={ currentTheme.secondaryColor } />
                        </AppText>
                        <TextInput
                            style={ { ...styles.input, paddingLeft: moderateScale(45), paddingRight: moderateScale(50) } }
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
