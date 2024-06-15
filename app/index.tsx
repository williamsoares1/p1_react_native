import styles from "./styles";
import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import imageLogin from '../src/assets/images/imageLoginSemFundo.png';

import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { IconsContainer } from "@/components/IconsContainer/IconsContainer";
import { ImageBox } from "@/components/ImageBox/ImageBox";
import { LastText } from "@/components/LastText/LastText";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBox source={imageLogin}/>
      <View style={styles.loginBox}>
        <Text style={styles.infoPageText}>Log In</Text>
        <Input content="EMAIL ID" placeholder="exemple@email.com"/>
        <View>
          <Input content="PASSWORD" placeholder="####"/>
          <View style={styles.eyeIconBox}>
            <Feather name="eye-off" size={34} color="#757575" />
          </View>
        </View>
        <Text style={styles.forgotPWText}>Forget Password ?</Text>
        <Button content="Login"/>
      </View>
      <Text style={styles.orText}>Or</Text>
      <IconsContainer/>
      <LastText content="Don't have an account?" contentRedirect="Sign Up"/>
    </View>
  );
}
