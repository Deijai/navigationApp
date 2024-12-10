import { StyleSheet } from "react-native";

export const globalColors = {
    primary: '#7037ab',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warnig: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',

    background: '#fff'
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.background
    },
    primaryButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        width: '100%',
        marginBottom: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: globalColors.background,
        fontSize: 18
    }

})