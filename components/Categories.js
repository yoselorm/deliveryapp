import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import client, { urlFor } from '../sanity';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        client.fetch(`*[_type=="category"]`).then((data) => {
            setCategories(data)
        })
    }, [])
    return (
        <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} showsHorizontalScrollIndicator={false}>
            {categories.map((categories) => (
                <CategoryCard
                    key={categories._id}
                    img={urlFor(categories.image).url()}
                    title={categories.name} />
            ))}

        </ScrollView>
    );
}


export default Categories;
