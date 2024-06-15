import styles from "./styles";
import { ScrollView, Text, View } from "react-native";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { ImageBox } from "@/components/ImageBox/ImageBox";
import imageSignUp from '../src/assets/images/imageSignUpSemFundo.png';
import { AntDesign } from '@expo/vector-icons';
import { LastText } from "@/components/LastText/LastText";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.arrowBack}><AntDesign name="arrowleft" size={24} color="black" /></Text>
      <ImageBox source={imageSignUp}/>
      <View style={styles.signUpBox}>
        <Text style={styles.infoPageText}>Sign Up</Text>
        <Input content="FIRST NAME" placeholder="ex: Samantha"/>
        <Input content="LAST NAME" placeholder="ex: Parker"/>
        <Input content="EMAIL ID" placeholder="exemple@email.com"/>
        <Input content="PASSWORD" placeholder="####"/>
      </View>
        <Button content="Create Account"/>
        <LastText content="Already have an account?" contentRedirect="Sign In"/>
    </ScrollView>
  );
}
