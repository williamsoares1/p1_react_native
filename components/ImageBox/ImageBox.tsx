import styles from "./styles"
import { Image } from "react-native"

export const ImageBox = ({ source }) => {
    return (
        <Image style={styles.imgBox} source={source}/>
    )
}