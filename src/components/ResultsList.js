import React from 'react';

import {Text, View , StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultDetail from './ResultDetail';

import { useNavigation } from '@react-navigation/native';

const ResultsList = ({title, resultsList }) => {
    const navigation = useNavigation();
    if (!resultsList.length) {
        return null;
      }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={resultsList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({item})=> {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate("Details", {id: item.id})}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
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