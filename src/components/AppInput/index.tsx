import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

// Third party package
import Icon from 'react-native-vector-icons/Ionicons';
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

const AppInput: React.FC<AppTextInputProps & AppInputTypes> = ({ icon, name, textStyle, ...otherProps }) => {
    const { theme } = useThemeContext();
    const currentTheme = colors[theme.mode];

    const [isSecure, setIsSecure] = useState(true);

    if (icon) {
        return (
            <>
                <View style={ styles.container }>
                    <View style={ { marginVertical: moderateScaleVertical(15) } }>
                        <AppText textStyle={ { ...textStyle } }>{ name }</AppText>
                        <View>
                            <TextInput
                                style={ styles.input }
                                color={ currentTheme.primaryColor }
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
                </View>
            </>
        )
    }

    return (
        <View style={ styles.container }>
            <AppText textStyle={ { ...textStyle } }>{ name }</AppText>
            <TextInput
                style={ styles.input }
                color={ currentTheme.primaryColor }
                { ...otherProps }
            />
        </View>
    );
};

export default React.memo(AppInput);
