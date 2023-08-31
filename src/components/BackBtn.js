import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import Button from './Button';

export default function BackBtn() {
    const navigation = useNavigation();
    const goBackPage = () => {
        navigation.goBack();
    }
    return (
        <Button
            onPress={goBackPage}
            btnLabel={<Ionicons name="arrow-back" size={24} color="#000000" />}
        />

    );
}

