import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';


const PreparationModal = () => {

    const navigation = useNavigation()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('delivery')
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <SafeAreaView className='flex-1 justify-center items-center bg-[#5272F2]'>
            <Animatable.Image
                source={require('../assets/delivery.gif')}
                animation='slideInUp'
                iterationCount={1}
                className='h-40 w-40 rounded-full'
            />
            <Animatable.Text
                animation='slideInUp'
                iterationCount={1}
                className='text-lg font-bold text-white my-10 text-center'
            >Confirming order...please wait</Animatable.Text>

            <Progress.Bar progress={0.3} width={200} color='white' indeterminate={true} />
        </SafeAreaView>
    );
}


export default PreparationModal;
