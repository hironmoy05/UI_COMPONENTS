import React from 'react';
import { TextInput, View } from 'react-native';

// It's own style
import styles from './styles';
// config
import { AppInputTypes } from '../../config/types';
// components
import AppText from '../AppText';

const AppInput: React.FC<AppInputTypes> = ({ name, textStyle, ...otherProps }) => {
    return (
        <View style={ styles.container }>
            <AppText textStyle={ { ...textStyle } }>{ name }</AppText>
            <TextInput
                style={ styles.input }
                { ...otherProps }
            />
        </View>
    );
};

export default AppInput;
