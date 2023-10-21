import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import RestaurantsCard from './RestaurantsCard';
import client from '../sanity';

const Featured = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])


    useEffect(() => {

        client.fetch(`*[_type=="featured"&& _id==$id]{
                ...,
                restaurants[]->{
                  ...,
                  dishes[]->,
              type->{
                name
              }
                },
              }[0]`, { id }).then((data) => {
            setRestaurants(data?.restaurants)
        })

    }, [id])

    return (
        <View>
            <View className='mt-4 px-4 flex-row justify-between items-center flex-1'>
                <Text className='font-bold text-lg'>{title}</Text>
                <Icons.ArrowRightIcon />
            </View>
            <Text className='text-gray-400 text-sm px-4'>{description}</Text>

            <ScrollView horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className='pt-4'
                showsHorizontalScrollIndicator={false}
            >
                {restaurants.map((restaurant) => (
                    <RestaurantsCard
                        key={restaurant._id}
                        id={restaurant._id}
                        img={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant?.type.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        lat={restaurant.lat}
                        long={restaurant.long}
                    />
                ))}


            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Featured;
