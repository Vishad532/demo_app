import React from 'react';
import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator
} from 'react-native';
import { colors } from '../constants/colors';

export default function Loader({ isLoading }) {
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={isLoading}
            style={{ zIndex: 1100 }}
            onRequestClose={() => { }}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator animating={isLoading} size="large" color={colors.activeMenu} />
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#rgba(0, 0, 0, 0.7)',
        backfaceVisibility: 'hidden',
        zIndex: 1000
    },
    activityIndicatorWrapper: {
        // backgroundColor: '#FFFFFF',
        height: 90,
        width: 90,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

