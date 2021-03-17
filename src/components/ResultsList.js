import React from 'react';

import {Text, View , StyleSheet, FlatList} from 'react-native'
import ResultDetail from './ResultDetail';



const ResultsList = ({title, resultsList}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={resultsList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({item})=> {
                    return <ResultDetail result={item} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle : {
        fontSize: 18,
        color : 'black',
        fontWeight: '700',

        marginBottom: 5
    },
    container : {
        marginHorizontal : 15
    }
})

export default ResultsList;