import React from 'react';

import {View, Image, Text, StyleSheet} from 'react-native'

const ResultDetail = ({result}) => {
    return (
        <View style={styles.detailsStle}>
            <Image style={styles.imageStyles} source={{uri: result.image_url}} />
            <Text style={styles.textStyle}>{result.name}</Text>
            <Text style={styles.reviewsStyle}>{result.rating} Stars  Reviews - {result.review_count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsStle : {
        marginHorizontal : 4
    },
    imageStyles: {
        width: 280,
        height:150,
        borderRadius: 4,
        marginBottom: 5
    },
    textStyle: {
        fontWeight: '700',
        fontSize: 15
    },
    reviewsStyle : {
        fontSize: 14,
        fontWeight: '500'
    }
})

export default ResultDetail;