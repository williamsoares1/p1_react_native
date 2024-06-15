import styles from "./styles"
import { Text } from "react-native"

export const LastText = ({ content, contentRedirect }) => {
    return (
    <>
        <Text style={styles.lastText}>
                {content}
                <Text style={styles.redirectText}> {contentRedirect}</Text>
        </Text>
    </>
    )
}