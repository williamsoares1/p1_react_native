import styles from "./styles"
import { TextInput, View, Text } from "react-native"

type strings = {
    placeholder: string,
    content: string
}

export const Input = ( {placeholder, content}: strings ) => {
    return (
        <>
            <Text style={styles.label}>{content}</Text>
            <TextInput style={styles.input} placeholder={placeholder}/>
        </>
    )
}