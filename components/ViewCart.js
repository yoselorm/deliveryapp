import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartItemsWithId, selectTotalItems } from '../features/CartSlice';

const ViewCart = () => {
    const navigation = useNavigation()

    const items = useSelector(selectCartItems)

    const totalItems = useSelector(selectTotalItems)
    if (items.length === 0) return null;

    return (
        <View className='absolute bottom-12 z-50 w-full'>
            <TouchableOpacity onPress={() => { navigation.navigate('cart') }} className='bg-[#6680e6] mx-5 p-4 flex-row items-center space-x-1 rounded-lg'>
                <Text className='text-white text-lg font-extrabold bg-[#3f5dd1] px-2 py-1'>
                    {items.length}
                </Text >
                <Text className='text-white text-lg font-extrabold flex-1 text-center'>View Cart</Text>
                <Text className='text-white text-lg font-extrabold'>GHS {totalItems}</Text>
            </TouchableOpacity>

        </View>
    );
}


export default ViewCart;
