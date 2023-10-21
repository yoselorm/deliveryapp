import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import client from '../sanity';


const Home = () => {

    const [featuredCategories, setFeaturedCategories] = useState([])
    const [screenToggle, setScreenToggle] = useState(false)



    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    useEffect(() => {
        client.fetch(`*[_type=="featured"]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
            }
          }`).then((data) => {
            setFeaturedCategories(data)
        })
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setScreenToggle(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <>
            {screenToggle ? (<SafeAreaView className='bg-white pt-5 flex-1'>
                <View className='flex-row justify-between mx-3 items-center'>
                    <View className='flex-row gap-3 items-center '>
                        <Image className='h-9 w-9 rounded-full' source={require('../assets/tom.jpg')} />
                        <View>
                            <Text className='text-gray-500 font-bold'>Deliver Now!</Text>
                            <Text className='font-bold text-xl'>Current location <Icons.ChevronDownIcon size={20} /></Text>
                        </View>
                    </View>
                    <View>
                        <Icons.UserIcon size={32} />
                    </View>
                </View>
                <View className='flex-row m-3 items-center space-x-2'>
                    <View className='bg-gray-200 p-3 flex-1 flex-row space-x-2'>
                        <Icons.MagnifyingGlassIcon />
                        <TextInput placeholder='restaurants and cuisines' keyboardType='default' />
                    </View>
                    <Icons.AdjustmentsHorizontalIcon />
                </View>

                <ScrollView className='bg-gray-100' contentContainerStyle={{
                    padding: 10
                }}>
                    <Categories />

                    {featuredCategories.map((category) => (
                        <Featured
                            key={category._id}
                            id={category._id}
                            title={category.name}
                            description={category.short_description}

                        />
                    ))}

                </ScrollView>

            </SafeAreaView>) : (
                <View className='w-full h-full bg-[#5272F2] flex justify-center items-center'>
                    <Text className='text-6xl text-white font-extrabold font-cursive italic'>Comamos</Text>
                    <Text className='text-lg text-white font-semibold'>Order from the best!!</Text>
                </View>
            )}
        </>

    );
}


export default Home;
