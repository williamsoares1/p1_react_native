import styles from "./styles"
import { TouchableOpacity, Text } from "react-native"

type conteudo = {
  content: string | number
}

export const Button = ({ content }: conteudo) => {
    return (
        <TouchableOpacity activeOpacity={0.9}>
          <Text style={styles.button}>{content}</Text>
        </TouchableOpacity>
    )
}