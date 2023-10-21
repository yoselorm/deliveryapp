import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import * as Icons from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurantsCard = ({
    id,
    genre,
    img,
    title,
    rating,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("restaurant", {
                id,
                genre,
                img,
                title,
                rating,
                address,
                short_description,
                dishes,
                long,
                lat
            })
        }} className='bg-white mr-3 shadow'>
            <Image
                source={{ uri: urlFor(img).url() }}
                className='h-36 w-64 rounded-sm'
            />
            <View className='px-3 pb-4'>
                <Text className='text-xl font-bold pt-2'>{title}</Text>
                <View className='flex-row items-center space-x-1'>
                    <Icons.StarIcon size={22} opacity={0.5} color='green' />
                    <Text className='text-gray-500 text-xs'>
                        <Text className='text-green-500 font-semibold'>{rating}</Text> {genre}
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <Icons.MapPinIcon size={22} />
                    <Text className='text-gray-500 text-xs'>Nearby {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}


export default RestaurantsCard;
