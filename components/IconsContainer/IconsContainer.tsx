import styles from "./styles"
import { AntDesign, Entypo } from "@expo/vector-icons"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import { View, Text } from "react-native"

export const IconsContainer = () => {
    return (
        <>
            <View style={styles.iconContainer}>
                <View style={styles.iconBox}>
                    <FontAwesome5 name="facebook-f" size={34} color="#0063E6" />
                </View>
                <View style={styles.iconBox}>
                    <AntDesign name="google" size={34} color="#0063E6" />
                </View>
                <View style={styles.iconBox}>
                    <Entypo name="instagram" size={34} color="#0063E6" />
                </View>
            </View>
        </>
    )
}