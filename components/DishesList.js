import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import * as Icons from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItems, selectCartItemsWithId } from '../features/CartSlice';

const DishesList = ({
    id,
    image,
    name,
    price,
    description, }) => {

    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()

    const items = useSelector((state) => selectCartItemsWithId(state, id))

    const remmoveItemsFromCart = () => {
        if (!items.length > 0) return;
        dispatch(removeFromCart({ id }))
    }
    const addItemstoCart = () => {
        dispatch(addToCart({ id, name, description, price, image }))
    }
    return (
        <>
            <TouchableOpacity onPress={() => { setToggle(!toggle) }} className={`bg-white border border-gray-100 p-4 ${toggle && 'border-b-0'}`}>
                <View className='flex-row'>
                    <View className='flex-1 pr-2'>
                        <Text className='mb-1 text-lg'>{name}</Text>
                        <Text className='text-gray-400'>{description}</Text>
                        <Text className='text-gray-500 mt-2'>GHS {price}</Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: '#f3f3f4'
                            }}
                            source={{ uri: urlFor(image).url() }}
                            className='w-20 h-20'
                        />
                    </View>
                </View>

            </TouchableOpacity>

            {toggle && (
                <View className='bg-white p-3'>
                    <View className='flex-row space-x-2 items-center'>
                        <TouchableOpacity onPress={remmoveItemsFromCart}>
                            <Icons.MinusCircleIcon color='green' opacity={0.4} size={28} />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemstoCart}>
                            <Icons.PlusCircleIcon color='green' opacity={0.4} size={28} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>


    );
}


export default DishesList;
