import { StyleSheet } from "react-native";

export const colors ={
    primary:'#7037eb',
    secondary:'#f72585',
    tertiary:'#3a0ca3',
    success:'#4cc9f10',
    warning:'#fca311',
    danger:'#e71d36',
    dark:'#22223b',
    background:'#fff',
}

export const globalStyles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.background,
        padding: 20, 
    },
    primaryButton:{
        backgroundColor: colors.primary,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    buttonText:{
        color: colors.background,
        fontSize: 18,
        fontWeight: 'bold',
    }
})