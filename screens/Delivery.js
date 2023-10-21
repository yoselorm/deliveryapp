import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icons from 'react-native-heroicons/solid';



const Delivery = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView className='flex-1 bg-white justify-center items-center space-y-5'>
            <Animatable.Image
                source={require('../assets/construction.gif')}
                animation='slideInUp'
                iterationCount={1}
                className='h-40 w-40 rounded-full'
            />
            <Text className=' text-lg font-bold'>Page Under Construction</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('cart') }} className=' flex-row items-centerabsolute top-3 right-2  bg-slate-200 rounded-full px-4 py-2 space-x-2 shadow-sm'>
                <Icons.ArrowLeftIcon size={30} />
                <Text className='text-red-400 text-lg text-center font-semibold'>Return</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}


export default Delivery;
