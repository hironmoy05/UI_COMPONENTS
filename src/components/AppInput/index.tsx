import React from 'react';
import { TextInput, View } from 'react-native';

// It's own style
import styles from './styles';
// config
import { AppInputTypes, AppTextInputProps } from '../../config/types';
// components
import AppText from '../AppText';
import { colors } from '../../config/theme';
// store
import { useThemeContext } from '../../store/themeContext';

const AppInput: React.FC<AppTextInputProps & AppInputTypes> = ({ name, textStyle, ...otherProps }) => {
    const { theme } = useThemeContext();
    const currentTheme = colors[theme.mode];

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
