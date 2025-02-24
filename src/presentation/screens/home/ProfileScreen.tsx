import React, { useCallback } from 'react';
import { Platform, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Block, Button, Image, Text } from '../../components/examples';
import { useData, useTheme, useTranslation } from '../../hooks/example';
import { IonIcon } from '../../components/shared/IonIcon';

import { View, StyleSheet, Image as ImagePaper } from 'react-native';
import { Card, Title, Paragraph, Text as TextPaper, Avatar } from 'react-native-paper';
import { colors } from '../../theme/theme';
import { CarouselAuxiliar } from '../../components/profile/CarouselAuxiliar';

export const ProfileScreen = () => {
    const { user } = useData();
    // const {t} = useTranslation();
    const navigation = useNavigation();
    const { assets, colors, sizes } = useTheme();

    const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
    const IMAGE_VERTICAL_SIZE =
        (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
    const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
    const IMAGE_VERTICAL_MARGIN =
        (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;

    const handleSocialLink = useCallback(
        (type: 'twitter' | 'dribbble') => {
            const url =
                type === 'twitter'
                    ? `https://twitter.com/${user?.social?.twitter}`
                    : `https://dribbble.com/${user?.social?.dribbble}`;

            try {
                Linking.openURL(url);
            } catch (error) {
                // alert(`Cannot open URL: ${url}`);
            }
        },
        [user],
    );

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
                                <View style={styles.profileHeader}>
                                    <Button
                                        row
                                        flex={0}
                                        justify="flex-start"
                                        onPress={() => navigation.goBack()}>
                                        <Image
                                            radius={0}
                                            width={10}
                                            height={18}
                                            color={colors.black}
                                            source={assets.arrow}
                                            transform={[{ rotate: '180deg' }]}
                                        />
                                    </Button>
                                    <Avatar.Image
                                        source={{ uri: 'https://via.placeholder.com/150' }}
                                        size={80}
                                    />
                                    <View style={styles.profileInfo}>
                                        <Title>John Doe</Title>
                                        <Paragraph>Conductor Principal</Paragraph>
                                    </View>
                                </View>
                                <View style={styles.vehicleInfo}>
                                    <Title>Información del Vehículo</Title>
                                    <Paragraph>Marca: Toyota</Paragraph>
                                    <Paragraph>Modelo: Corolla</Paragraph>
                                    <Paragraph>Placa: ABC-123</Paragraph>
                                    <Paragraph>Color: Rojo</Paragraph>
                                </View>
                                <View style={styles.assistantInfo} >
                                    <Title style={{textAlign:'center'}}>Asistentes</Title>
                                    <CarouselAuxiliar/> 
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
                            // shadow={!isAndroid}   
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
                                        <Text white bold transform="uppercase">
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
                                    onPress={() => handleSocialLink('twitter')}>
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
                                    onPress={() => handleSocialLink('dribbble')}>
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
    },
    profileInfo: {
        marginLeft: 16,
    },
    vehicleInfo: {
        marginBottom: 16,
    },
    assistantInfo: {
        marginTop: 16,
        backgroundColor:'rgba(255, 255, 255, 0.37)',
        padding:5,
        borderRadius:15
    },
    assitantProfile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    assistantDetails: {
        marginLeft: 16,
    },
});