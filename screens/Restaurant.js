import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { urlFor } from '../sanity';
import * as Icons from 'react-native-heroicons/solid';
import DishesList from '../components/DishesList';
import ViewCart from '../components/ViewCart';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/RestaurantSlice';


const Restaurant = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { params: {
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
    } } = useRoute()

    useEffect(() => {
        dispatch(setRestaurant({
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
        }))

    }, [dispatch])
    return (
        <>
            <ViewCart />
            <ScrollView className='relative'>
                <View>
                    <Image
                        source={{ uri: urlFor(img).url() }}
                        className='w-full h-60'
                    />
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                    className='absolute top-16 left-5 p-3 bg-slate-100 rounded-full'>
                    <Icons.ArrowLeftIcon size={25} />
                </TouchableOpacity>
                <View className='bg-white'>
                    <View className='px-4 pt-4'>
                        <Text className='font-bold text-3xl'>{title}</Text>
                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row space-x-1 items-center'>
                                <Icons.StarIcon color='green' size={22} opacity={0.4} />
                                <Text className='text-xs text-gray-500'>
                                    <Text className='text-green-500'>{rating} </Text>
                                    {genre}
                                </Text>
                            </View>
                            <View className='flex-row space-x-1 items-center'>
                                <Icons.MapPinIcon color='green' opacity={0.4} size={22} />
                                <Text className='text-xs text-gray-500'>
                                    Nearby | {address}
                                </Text>
                            </View>

                        </View>
                        <Text className='text-gray-500 my-2'>
                            {short_description}
                        </Text>
                    </View>

                    <TouchableOpacity className='flex-row items-center p-4 space-x-2 border-y border-gray-200'>
                        <Icons.QuestionMarkCircleIcon size={22} opacity={0.4} />
                        <Text className='flex-1 font-semibold'>Got some allergies?</Text>
                        <Icons.ChevronRightIcon size={22} />
                    </TouchableOpacity>
                </View>

                <View className='pb-32'>
                    <Text className='text-2xl font-semibold px-3 pt-3 mb-4'>Menu</Text>
                    {dishes.map((dish) => (
                        <DishesList
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}

                        />
                    ))}
                </View>
            </ScrollView>
        </>
    );
}


export default Restaurant;
