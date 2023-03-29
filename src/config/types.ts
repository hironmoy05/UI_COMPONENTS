import React  from 'react';
import { ColorValue, TextInputProps } from 'react-native';

export type AppInputTypes = {
    name: string;
    textStyle?: {},
    icon?: boolean,
    icons?: boolean,
    success?: boolean
}

export type AppTextTypes = {
    children: React.ReactNode;
    textStyle?: {}
}

export interface AppTextInputProps extends TextInputProps {
    color?: ColorValue,
}

export type ColorType = {
    [key: string]: string,
}