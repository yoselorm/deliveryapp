import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/RestaurantSlice';
import { removeFromCart, selectCartItems, selectTotalItems } from '../features/CartSlice';
import { useNavigation } from '@react-navigation/native';
import * as Icons from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';


const Cart = () => {
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectCartItems)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [selectedItemsInCart, setSelectedItemsInCart] = useState([])
    const cartTotal = useSelector(selectTotalItems)

    useEffect(() => {
        const selctedItems = items.reduce((results, item) => {
            (
                results[item.id] = results[item.id] || []
            ).push(item)
            return results
        }, {})
        setSelectedItemsInCart(selctedItems)
    }, [items])

    return (
        <SafeAreaView className='bg-white  flex-1'>
            <View className='flex-1 bg-gray-100'>
                <View className='border-b border-[#5272F2] shadow-sm p-5 bg-white'>
                    <View>
                        <Text className='text-center text-lg font-bold '>Cart Items</Text>
                        <Text className='text-center text-gray-600'>{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity onPress={navigation.goBack} className='absolute top-3 right-2  bg-slate-200 rounded-full'>
                        <Icons.XCircleIcon size={35} />
                    </TouchableOpacity>
                </View>
                <View className=' bg-white py-3 px-4 my-5 flex-row space-x-5 items-center'>
                    <Image
                        source={require('../assets/tom.jpg')}
                        className='w-7 h-7 p-4 rounded-full'
                    />
                    <Text className='flex-1'>Deliver in 30-45 mins</Text>
                    <TouchableOpacity>
                        <Text className='text-[#5272F2]'>Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {Object.entries(selectedItemsInCart).map(([key, items]) => (
                        <View key={key} className='bg-white flex-row items-center space-x-4 px-4 py-4'>
                            <Text className='text-md font-semibold'>{items.length} x </Text>
                            <Image
                                source={{ uri: urlFor(items[0]?.image).url() }}
                                className='w-12 h-12 rounded-full'
                            />
                            <Text className='flex-1'>{items[0]?.name}</Text>
                            <Text className='text-gray-400'>GHS {items[0]?.price}</Text>

                            <TouchableOpacity onPress={() => { dispatch(removeFromCart({ id: key })) }}>
                                <Text className='text-[#f25252]'>remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                <View className='bg-white mt-5 p-5 space-y-5'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Summary</Text>
                        <Text className=' font-bold'>GHS {cartTotal}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('preparationmodal') }} className='bg-[#5272F2] p-4 rounded-lg'>
                        <Text className='text-white font-bold text-center text-lg'>Confirm order</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>

    );
}


export default Cart;
