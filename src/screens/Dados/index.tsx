import { StyleSheet, View, Text, Platform, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Fontisto, AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome, FontAwesome5, Feather, Octicons, SimpleLineIcons, Foundation, MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles'
import React, { useEffect, useState } from 'react';

export const Dados = () => {


    return <View style={styles.container}>
        <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 0,
            }}
        >
            <View style={styles.header}>

                <View style={styles.tabIcons}>
                    <TouchableOpacity style={styles.btnClose}>
                        <AntDesign name="close" size={24} color="#fff" />
                    </TouchableOpacity>

                    <View style={styles.tabIcons}>
                        <TouchableOpacity style={styles.comumbtn}>
                            <AntDesign name="questioncircleo" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.comumbtn}>
                            <MaterialCommunityIcons name="bell-badge" size={24} color="#fff" />
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={styles.boxInfo}>
                    <TouchableOpacity style={styles.btnIMG}>
                        <MaterialCommunityIcons name="image-plus" size={40} color="#fff" />
                    </TouchableOpacity>

                    <View style={styles.info}>
                        <Text style={styles.userName}>
                            Rodrigo
                        </Text>

                        <Text style={styles.userInfo}>
                            Agência 0001 - Conta XXXXXXXXXXX
                            Banco 0260 - Nu Pagamentos S.A - Instituição de Pagamentos
                        </Text>
                    </View>
                </View>


            </View>

            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 0,
                }}
            >
                <TouchableOpacity>
                    <View style={styles.myCard}>
                        <Fontisto name="umbrella" size={24} color="#fff" />
                        <Text style={styles.myCardTxt}>Seguros</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.myCard}>
                        <FontAwesome5 name="house-user" size={24} color="#fff" />
                        <Text style={styles.myCardTxt}>Modo Rua</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.myCard}>
                        <Octicons name="gear" size={24} color="#fff" />
                        <Text style={styles.myCardTxt}>Configurações</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.myCard}>
                        <MaterialCommunityIcons name="shield-outline" size={24} color="#fff" />
                        <Text style={styles.myCardTxt}>Segurança</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.myCard}>
                        <MaterialCommunityIcons name="bank-outline" size={24} color="#fff" />
                        <Text style={styles.myCardTxt}>Open Finance</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.myCard}>
                        <MaterialCommunityIcons name="note-text-outline" size={24} color="#fff" />
                        <Text style={styles.myCardTxt}>Documentos</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.myCard}>
                        <MaterialCommunityIcons name="store-outline" size={24} color="#fff" />
                        <Text style={styles.myCardTxt}>Pedir conta PJ</Text>
                    </View>
                </TouchableOpacity>

                
                <TouchableOpacity>
                    <View style={styles.btnSair}>
                        <Ionicons name="ios-return-down-back-outline" size={24} color="#fff" />
                        <Text style={styles.myCardTxt}>Sair do Aplicativo</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </ScrollView>

    </View>

}

