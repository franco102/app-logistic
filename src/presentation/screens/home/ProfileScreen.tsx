import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Block, Button, Image, Text } from '../../components/examples';
import { useTheme } from '../../hooks/example';
import { IonIcon } from '../../components/shared/IonIcon';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { CarouselAuxiliar } from '../../components/profile/CarouselAuxiliar';
import { RootParamList } from '../../routes/Menu';
 
type NavigationProps = DrawerNavigationProp<RootParamList>;

export const ProfileScreen = () => {
    const navigation = useNavigation<NavigationProps>();
    const { assets, colors, sizes } = useTheme();

    return (
        <Block safe marginTop={sizes.md}>
            <Block
                scroll
                paddingHorizontal={sizes.s}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: sizes.padding }}>
                <Block flex={0}>
                    <Image
                        background
                        resizeMode="cover"
                        padding={sizes.sm}
                        paddingBottom={sizes.l}
                        radius={sizes.cardRadius}
                        source={assets.background}>

                        <Card style={styles.card}>
                            <Card.Content>

                                <View
                                    style={{
                                        ...styles.vehicleInfo,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginTop: 20,
                                        backgroundColor: 'rgba(253, 253, 253, 0.2)',
                                        padding: 10,
                                        borderRadius: 50
                                    }}>
                                    <Button
                                        color={colors.facebook}
                                        radius={50}
                                        width={4}
                                        style={{ width: 2, position: 'absolute', top: -15, right: -5 }}
                                        onPress={() => navigation.toggleDrawer()}>
                                        <IonIcon name='menu-outline' color={colors.white.toString()} />
                                    </Button>
                                    <Avatar.Image
                                        style={{backgroundColor:'transparent'}}
                                        source={assets.dirver}
                                        size={80}
                                    />
                                    <View style={{ display: 'flex', flex:1, justifyContent: 'flex-start', alignItems: 'flex-start',paddingLeft:10 }} >
                                        <Title>John Doe</Title>
                                        <Paragraph>DNI: 72696073</Paragraph>
                                    </View>
                                </View>
                                <View style={{
                                        ...styles.vehicleInfo,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between', 
                                        backgroundColor: 'rgba(253, 253, 253, 0.2)',
                                        padding: 10,
                                        borderRadius: 50
                                    }}>
                                    <Avatar.Image
                                        style={{backgroundColor:'transparent'}}
                                        source={assets.moto}
                                        size={80}
                                    />
                                    <View style={{ display: 'flex', flex:1, justifyContent: 'flex-start',paddingLeft:10 }}>
                                        <View style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between',marginHorizontal:10 }}>
                                            <Paragraph style={{backgroundColor:colors.facebook,borderRadius:10, paddingHorizontal:10,color:colors.white,fontWeight:700}}>Toyota</Paragraph>
                                            <Paragraph style={{backgroundColor:colors.facebook,borderRadius:10, paddingHorizontal:10,color:colors.white,fontWeight:700}}>Corolla</Paragraph>
                                        </View>
                                        <View style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between',marginHorizontal:10 }}>
                                            <Paragraph style={{backgroundColor:colors.facebook,borderRadius:10, paddingHorizontal:10,color:colors.white,fontWeight:700}}>ABC-123</Paragraph>
                                            <Paragraph style={{backgroundColor:colors.facebook,borderRadius:10, paddingHorizontal:10,color:colors.white,fontWeight:700}}>Rojo</Paragraph>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.assistantInfo} > 
                                    <CarouselAuxiliar />
                                </View>
                            </Card.Content>
                        </Card>

                    </Image>


                    {/* profile: about me */}
                    <Block paddingHorizontal={sizes.sm}>
                        <Text h5 semibold marginBottom={sizes.s} marginTop={sizes.sm}>
                            Informacion de Actividad
                        </Text>
                        <Block
                            flex={0}
                            radius={sizes.sm}  
                            color="rgba(41, 31, 31, 0.2)">
                            <Block
                                row
                                flex={0}
                                // intensity={100}
                                radius={sizes.sm}
                                overflow="hidden"
                                // tint={colors.blurTint}
                                justify="space-evenly"
                                paddingVertical={sizes.sm}
                                renderToHardwareTextureAndroid>
                                <Block align="center">
                                    <Text h5>4H</Text>
                                    <Text>Trabajadas</Text>
                                </Block>
                                <Block align="center">
                                    <Text h5>40</Text>
                                    <Text>Entregas</Text>
                                </Block>
                                <Block align="center">
                                    <Text h5>100k</Text>
                                    <Text>Recorrido</Text>
                                </Block>
                            </Block>
                        </Block>
                        <Block marginTop={10} flex={0} align="center" color="rgba(41, 31, 31, 0.2)" radius={sizes.sm} paddingVertical={10}>
                            <Block row  >
                                <Button
                                    white
                                    outlined
                                    shadow={false}
                                    radius={sizes.m}
                                    onPress={() => {
                                        // alert(`Follow ${user?.name}`);
                                    }}>
                                    <Block
                                        justify="center"
                                        radius={sizes.m}
                                        paddingHorizontal={sizes.m}
                                        color="rgba(255,255,255,0.2)">
                                        <Text black bold transform="uppercase">
                                            FSILVA
                                        </Text>
                                    </Block>
                                </Button>
                                <Button
                                    shadow={false}
                                    radius={sizes.m}
                                    marginHorizontal={sizes.sm}
                                    color="rgba(255,255,255,0.2)"
                                    outlined={String(colors.white)}
                                    onPress={() => ({})}>
                                    <IonIcon
                                        size={18}
                                        name="map-outline"
                                    // color={colors.white}
                                    />
                                </Button>
                                <Button
                                    shadow={false}
                                    radius={sizes.m}
                                    color="rgba(255,255,255,0.2)"
                                    outlined={String(colors.white)}
                                    onPress={() => ({})}>
                                    <IonIcon
                                        size={18}
                                        name="alert-circle-outline"
                                    // color={colors.white}
                                    />
                                </Button>
                            </Block>
                        </Block>
                    </Block>

                </Block>

            </Block>
        </Block>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    card: {
        marginBottom: 16,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: 'white',
        borderWidth: 1

    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        color: 'white'
    },
    profileInfo: {
        marginLeft: 16,
    },
    vehicleInfo: {
        marginBottom: 16,
    },
    assistantInfo: {
        marginTop: 16,
        backgroundColor: 'rgba(253, 253, 253, 0.2)',
        padding: 5,
        borderRadius: 15
    },
    assitantProfile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    assistantDetails: {
        marginLeft: 16,
    },
});