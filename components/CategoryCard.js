import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const CategoryCard = ({ img, title }) => {
    return (
        <TouchableOpacity className='relative mr-2'>
            <Image
                source={{ uri: img }} className='h-20 w-24 rounded' />
            <Text className='absolute text-white font-bold bottom-2 left-1'>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default CategoryCard;
