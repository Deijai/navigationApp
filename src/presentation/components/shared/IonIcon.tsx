import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { globalColors } from '../../theme/theme';


interface Props {
    size?: number;
    name: string;
    color?: string;
}

export const IonIcon = ({ size = 20, color = globalColors.primary, name }: Props) => {
    return (
        <Icon name={name} size={size} color={color} />
    )
}
