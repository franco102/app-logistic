import { ImageBackground, StyleSheet,  View, } from "react-native";
import React, { useState } from "react"; 
import Input from "../../components/examples/Input";
import { Block, Button, Image, Text } from "../../components/examples";
import { useTheme } from "../../hooks/example";
import LinearGradient from "react-native-linear-gradient"; 
import { useAuth } from "../../hooks/auth/useAuth";



const LoginScreen = () => {
    const { assets, colors, gradients, sizes } = useTheme();
    const {formUser, setFormUser, handleSubmitLogin}=useAuth();
    return (
        <ImageBackground
            source={assets.card1} // La imagen de fondo
            style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.89)" }}
            resizeMode="cover"
        >
            <LinearGradient
                colors={['rgba(194, 192, 192, 0.58)', 'rgba(255, 255, 255, 0.6)']} // Gradiente semitransparente
                style={{ flex: 1, margin: 20, borderCurve: "circular", borderRadius: 30 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <View style={{ flex: 1, justifyContent: 'space-around', padding: 20, }}>
                    <View
                        style={{  alignItems: "center", display: 'flex', justifyContent: 'center', alignContent: 'center' }}
                    >
                        <Image resizeMode="contain" source={assets?.login} style={{ height: 114 }} />
                        <Text size={35} paddingBottom={20}>
                            Log in
                        </Text>
                        <Text style={{ fontFamily: "poppins-semiBold"}} size={15}>
                            Bienvenido al app!
                        </Text>
                    </View>
                    <View
                        style={{
                            marginVertical: 30,
                            borderColor: colors.primary,
                            borderWidth: 2,
                            paddingHorizontal: 20,
                            paddingVertical: 30,
                            borderBottomEndRadius: 20,
                            borderTopLeftRadius: 20,
                            height: 200,
                            backgroundColor: colors.white
                        }}
                    >
                        <Input placeholder="Email" onChangeText={(text)=>setFormUser({username:text, password:formUser.password})}  value={formUser.username}/>
                        <Input placeholder="Password" style={{ marginVertical: 10 }} onChangeText={(text)=>setFormUser({username:formUser.username, password:text})}  value={formUser.password}/>
                        <Button flex={1} gradient={gradients.primary} marginBottom={sizes.base} onPress={()=>handleSubmitLogin()} >
                            <Text white bold transform="uppercase">
                                Log In
                            </Text>
                        </Button>
                    </View>
                    <Image
                        background
                        resizeMode="cover"
                        source={assets.card4}
                        style={{ width: '100%', height: 100 }}
                        radius={sizes.cardRadius}>
                        <Block
                            color="rgba(109, 94, 94, 0.37)"
                            padding={sizes.padding}
                            style={{ display: 'flex' }}
                        >
                            <Block row marginLeft={sizes.xs} >
                                <Image
                                    source={assets.user_login}
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: sizes.s,
                                    }}
                                />
                                <Block marginLeft={sizes.s} align="center" justify="center">
                                    <Text bold size={20} white weight={800}>
                                        App Gestión de Pedidos
                                    </Text>
                                </Block>
                            </Block>

                        </Block>
                    </Image>
                </View>
            </LinearGradient> 
        </ImageBackground>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});