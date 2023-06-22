import { StyleSheet, View, Text, Platform, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome, FontAwesome5, Feather, Octicons } from '@expo/vector-icons';
import { styles } from './styles'
import React, { useEffect, useState } from 'react';




export const Main = () => {

    const [cortejo, setCortejo] = useState<string>();

    useEffect(() => {
        const horario = new Date().getHours();

        if (horario < 12) {
            setCortejo("Bom Dia")
        } else if (horario >= 12 && horario < 18) {
            setCortejo("Boa Tarde")
        } else {
            setCortejo("Boa Noite")
        }
    }, [])


    return <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.tabIcons}>
                <TouchableOpacity style={styles.btnUsuario}>
                    <MaterialCommunityIcons name="image-plus" size={24} color="#fff" />
                </TouchableOpacity>




                <View style={styles.tabIcons}>
                    <TouchableOpacity style={styles.comumbtn}>
                        <FontAwesome5 name="eye-slash" size={24} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.comumbtn}>
                        <AntDesign name="questioncircleo" size={20} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.comumbtn}>
                        <Octicons name="person-add" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>




            </View>
            <Text style={styles.textoHeader}>
                Olá, Rodrigo
            </Text>
            <Text style={styles.textoCortejo}>
                {cortejo}
            </Text>


        </View>

        <ScrollView
        
            horizontal={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>


                
            <View style={styles.valorGPT}>
                <View style={styles.valorConta}>
                    <Text style={styles.textoValorConta}>Conta</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>
                <Text style={styles.textoValorConta}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(20)}
                </Text>
            </View>



            <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 8,
                }}
            >


                <TouchableOpacity style={styles.btnPScroll}>
                    <View style={styles.btnIcone}>
                     <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
                    </View>
                    <Text style={styles.btnScrollTxt}>Área Pix</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnPScroll}>
                    <View style={styles.btnIcone}>
                        <AntDesign name="barcode" size={22} color="black" />
                    </View>
                    <Text style={styles.btnScrollTxt}>Pagar</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnPScroll}>
                    <View style={styles.btnIcone}>
                        <MaterialCommunityIcons name="credit-card-refund" size={24} color="black" />
                    </View>
                    <Text style={styles.btnScrollTxt}>Transferir</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnPScroll}>
                    <View style={styles.btnIcone}>
                        <MaterialCommunityIcons name="credit-card-plus-outline" size={24} color="black" />
                    </View>
                    <Text style={styles.btnScrollTxt}>Depositar</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnPScroll}>
                    <View style={styles.btnIcone}>
                        <Feather name="box" size={24} color="black" />
                    </View>
                    <Text style={styles.btnScrollTxt}>Caixinha</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnPScroll}>
                    <View style={styles.btnIcone}>
                        <MaterialCommunityIcons name="cellphone-play" size={24} color="black" />
                    </View>
                    <Text style={styles.btnScrollTxt}>Recarga</Text>
                </TouchableOpacity>
            </ScrollView>


            <TouchableOpacity>
                <View style={styles.myCard}>
                    <FontAwesome name="credit-card" size={24} color="black" />
                    <Text style={styles.myCardTxt}>Meus Cartões</Text>
                </View>
            </TouchableOpacity>


            <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginVertical: 30,
                    paddingHorizontal: 8,
                }}
            >
                <TouchableOpacity style={styles.btnScrollCards}>
                    <Text style={{ color: '#8100dd' }}>
                        Convide amigos para o Nubank
                    </Text>
                    <Text style={styles.btnScrollTxt}>
                        e desbloqueie o seu emblema !
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnScrollCards}>
                    <Text style={styles.btnScrollTxt}>
                        Você tem
                    </Text>
                    <Text style={{ color: '#8100dd' }}>
                        até R$ 2.000,00 dispovível para emprestimo.
                    </Text>

                </TouchableOpacity>
            </ScrollView>



            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                <TouchableOpacity style={styles.cards}>
                    <Text style={styles.cardsTxt}>
                        Cartão de crédito
                    </Text>
                    <Text style={{ fontSize: 17 }} >
                        Fatura atual
                    </Text>
                    <Text style={styles.textoValorFatura}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(0)}
                    </Text>

                    <View style={styles.limite}>
                        <Text style={styles.limite}>
                            Limite dispovível de
                        </Text>
                        <Text style={styles.textoValores}>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(400)}
                        </Text>
                    </View>

                    <View style={styles.limite}>
                        <Text style={styles.limite}>
                            Limite adicional para Pix e boletos:
                        </Text>
                        <Text style={styles.textoValores}>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(550)}
                        </Text>
                    </View>

                </TouchableOpacity>



                <TouchableOpacity style={styles.cards}>
                    <Text style={styles.cardsTxt}>
                        Empréstimo
                    </Text>
                    <Text style={{ fontSize: 17 }} >
                        Valor dispovível de até
                    </Text>
                    <Text style={styles.textoValorFatura}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(2000)}
                    </Text>
                </TouchableOpacity>



                <TouchableOpacity style={styles.cards}>
                    <Text style={styles.cardsTxt}>
                        Reúna suas contas
                    </Text>
                    <Text style={{ fontSize: 15, paddingTop: 20 }} >
                        Adicione suas contas a pagar, programe próximos pagamentos e acompanhe seus vencimentos.
                    </Text>
                    <TouchableOpacity style={styles.btnADD}>
                        <Text style={styles.btnADDtxt}>Adicionar</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    </View>

}

